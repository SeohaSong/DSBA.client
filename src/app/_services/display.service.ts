import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Router } from '@angular/router';

import { UtilsService } from './utils.service';

declare const App: any;
declare const FancyBox: any;
declare const StyleSwitcher: any;
declare const OwlCarousel: any;
declare const $: any;
declare const db: any;
declare const auth: any;
declare const storage: any;
declare const firebase: any;

@Injectable({
  providedIn: 'root'
})
export class DisplayService {

  constructor(
    private utilsService: UtilsService,
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) { }


  _groupList(size, list){
    let groups = [];
    let group_idxs = [];
    let n_group = parseInt(""+(list.length-1)/size)+1;
    for (let i=0; i < n_group; i++) {
      groups.push([]);
      for (let i_=0; i_ < size; i_++) group_idxs.push(i);
    }
    for (let i=0; i < list.length; i++) {
      groups[group_idxs[i]].push(list[i])
    }
    return groups
  }


  startPage() {

    let initScroll8Nav = () => {
      $(document).scrollTop(0)
      $('.navbar-collapse.mega-menu.navbar-responsive-collapse.collapse')
      .removeClass("in")
    }

    if (isPlatformBrowser(this.platformId)) {
      $("[data-_initScroll8Nav]").click(initScroll8Nav)
      return new Promise((resolve) => {setTimeout(() => resolve())})
    }
  }


  startApp(app) {

    let _signIn = () => {
      let provider = new firebase.auth.GoogleAuthProvider();
      auth.languageCode = 'ko-KR';
      auth.signInWithRedirect(provider);
    }

    let _signOut = () => {
      auth.signOut();
      this.router.navigate(['main']);
    }

    let initData = () => {
      app.categories = this.utilsService.get_categories()
      app.signIn = _signIn
      app.signOut = _signOut
    }

    let initDisplay = () => {
      let init = () => {
        let type = this.utilsService.get_url_head();
        if(type == 'board') {type = 'activities'}
        $("li").removeClass("active");
        $("[data-category="+type+"]").addClass('active');
      }
      App.init();
      FancyBox.initFancybox();
      StyleSwitcher.initStyleSwitcher();
      $("a").click(() => {init()});
      init();
    }

    let initAuth = () => {
      auth.onAuthStateChanged((user) => {
        if (user) {
          let name = user.displayName
          let email = user.email
          let uid = user.uid
          storage.setItem('name', name)
          storage.setItem('uid', uid)
          console.log(name)
          db.collection('users').doc(uid).set({
            name: name,
            email: email,
            status: 0
          })
          .then(() => console.log('신규 가입되었습니다.'))
          .catch(() => console.log('기존 사용자입니다.'))
        } else {
          storage.removeItem('name')
          storage.removeItem('uid')
          console.log('비회원입니다.')
        }
        app.uid = storage.getItem('uid')
        $("#loading-ui").fadeOut()
      })
      // setInterval(() => console.log(app.uid), 500)
    }

    this.startPage()
    .then(() => initData())
    .then(() => initDisplay())
    .then(() => initAuth())
  }


  initMain(comoponent) {

    let groupList = this._groupList

    let initData = () => {
      comoponent.cooperations = this.utilsService.get_cooperations();
      let projects = this.utilsService.get_projects();
      comoponent.project_groups = groupList(4, projects).slice(0, 1);
      let researches = this.utilsService.get_researches()
      comoponent.research_groups = groupList(4, researches).slice(0, 1);
    }

    let initDisplay = () => {
      OwlCarousel.initOwlCarousel();
      $('#da-slider').cslider({autoplay: false});
    }

    this.startPage().then(() => initData()).then(() => initDisplay())
  }



  initMembers(component) {

    let initData = () => {
      let statuses = [
        "Ph.D. Candidate",
        "Ph.D. Student",
        "Integrated M.S/Ph.D. Candidate",
        "Integrated M.S/Ph.D. Student",
        "M.S. Student"
      ];
      let promise = db.collection("members").get().then(data => {
        let objs = [];
        data.forEach(obj => objs.push(obj.data()))
        objs.sort((a, b): number => {
          [a, b] = [statuses.indexOf(a.status)+a.admission+a.name_ko,
                    statuses.indexOf(b.status)+b.admission+b.name_ko];
          if (a < b) return -1;
          if (a >= b) return 1;
        });
        component.totalStudents = objs;
        component.loadingStatus = false;
      });
      return promise
    }

    let initDisplay = () => {
      let utilsService = this.utilsService
      let turnPage = (() => {
        let tail = utilsService.get_url_tail();
        $("[data-_membersBtn]").removeClass("active");
        $("[data-_membersBtn="+tail+"]").addClass("active");
        this.router.navigate(['members', tail]).then(() => {
          component.pageType = tail;
          let members: any[];
          let overall = component.totalStudents.slice();
          let students = overall.filter(val => val.type == 'students');
          let alumni = overall.filter(val => val.type == 'alumni').reverse();
          if (tail == 'overall') members = students.concat(alumni);
          if (tail == 'students') members = students;
          if (tail == 'alumni') members = alumni;
          if (tail != 'professor') {
            component.studentPairs = this._groupList(2, members);
          }
        });
      });
      $("[href^='/members']").click(() => turnPage());
      turnPage();
    }

    this.startPage().then(() => initData()).then(() => initDisplay())
  }




  init_scroll(
    doc, top_pad, bottom_pad
  ) {if (isPlatformBrowser(this.platformId)) {
    let nav = $("[data-nav]");
    let init_top = parseInt(nav.css('top'));
    doc.on('scroll resize', () => {
      let scroll_top = doc.scrollTop();
      let top = init_top-scroll_top;
      let nav_h = parseInt(nav.css('height'));
      let body_h = parseInt($('body').css('height'));
      let bottom = body_h-top_pad-scroll_top-nav_h;
      let top_cutoff = top-top_pad;
      let bottom_cutoff = bottom-bottom_pad;
      if (top_cutoff > 0) {nav.css('top', top);}
      else if (bottom_cutoff < 0) {nav.css('top', top_pad+bottom_cutoff);}
      else {nav.css('top', top_pad);}
    })
  }}
  init_pagenation() {if (isPlatformBrowser(this.platformId)) {
    let lsts = $("[data-pagenation-lst]")
    let btns = $("[data-pagenation-btn]")
    $(lsts[0]).addClass('in')
    $(btns[0]).addClass('in')
    btns.click((e) => {
      let btn = $(e.currentTarget)
      let lst = lsts[btn.data('pagenation-btn')]
      lsts.removeClass('in')
      btns.removeClass('in')
      btn.addClass('in')
      $(lst).addClass('in')
    });
  }}

  // $("a[data-section]").click((e) => {
  //   let id = $(e.target).data('section');
  //   let scroll_top = $("div[data-section="+id+"]").offset().top;
  //   $(document).scrollTop(scroll_top-100);
  // })


  set_publications_display(){if (isPlatformBrowser(this.platformId)) {
    let init = () => {
      let type = this.utilsService.get_url_tail();
      $("[data-type0]").removeClass('in');
      $("[data-type0="+type+"]").addClass('in');
    }
    // this.init_scroll8nav();
    setTimeout(() => {
      init();
      $("a[href^='/publications/']").click(() => {init();});
    });
  }}

  set_researches_display(){if (isPlatformBrowser(this.platformId)) {
    let init_section = (doc, top_pad) => {
      $("a[data-section]").click((e) => {
        let id = $(e.currentTarget).data('section');
        let scroll_top = $("div[data-section="+id+"]").offset().top
        doc.scrollTop(scroll_top-top_pad)
      })
    }
    // this.init_scroll8nav();
    setTimeout(() => {
      let doc = $(document);
      this.init_scroll(doc, 150, 450);
      init_section(doc, 100);
      this.init_pagenation();
    });
  }}

  set_board_display(){if (isPlatformBrowser(this.platformId)) {
    // this.init_scroll8nav();
    setTimeout(() => {
      let doc = $(document);
      this.init_scroll(doc, 80, 387);
    })
  }}
}
