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


@Injectable({
  providedIn: 'root'
})
export class DisplayService {

  constructor(
    private utilsService: UtilsService,
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) { }

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
    $(lsts[0]).addClass('in');
    $(btns[0]).addClass('in');
    btns.click((e) => {
      let btn = $(e.currentTarget)
      let lst = lsts[btn.data('pagenation-btn')]
      lsts.removeClass('in');
      btns.removeClass('in');
      btn.addClass('in');
      $(lst).addClass('in');
    });
  }}

  init_click_postprocessing() {
    $("[_init-page]").click(() => {
      $(document).scrollTop(0);
      $('.navbar-collapse.mega-menu.navbar-responsive-collapse.collapse')
      .removeClass("in");
    })
  }

  init_display(){if (isPlatformBrowser(this.platformId)) {
    let init = () => {
      let type = this.utilsService.get_url_head();
      if(type == 'board') {type = 'activities'}
      $("li").removeClass("active");
      $("[data-category="+type+"]").addClass('active');
    }
    this.init_click_postprocessing();
    setTimeout(() => {
      App.init();
      FancyBox.initFancybox();
      StyleSwitcher.initStyleSwitcher();
      $("#loading-ui").fadeOut();
      $("a").click(() => {init()});
      init();
    })
  }}

  set_main_display(){if (isPlatformBrowser(this.platformId)) {
    this.init_click_postprocessing();
    setTimeout(() => {
      OwlCarousel.initOwlCarousel();
      $('#da-slider').cslider({autoplay: false,});
      $("a[data-section]").click((e) => {
        let id = $(e.target).data('section');
        let scroll_top = $("div[data-section="+id+"]").offset().top;
        $(document).scrollTop(scroll_top-100);
      });
    });
  }}


  initMembers(component) {
    let statuses = [
      "Ph.D. Candidate",
      "Ph.D. Student",
      "Integrated M.S/Ph.D. Candidate",
      "Integrated M.S/Ph.D. Student",
      "M.S. Student"
    ];
    let promise = db.collection("members").get().then(data => {
      let objs = [];
      data.forEach(obj => objs.push(obj.data()));
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

  initMembersDisplay(component){
    this.init_click_postprocessing();
    let utilsService = this.utilsService
    let turnPage = (() => {
      let tail = utilsService.get_url_tail();
      $("[_members-active-toggle]").removeClass("active");
      $("[_members-active-toggle="+tail+"]").addClass("active");
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
          component.studentPairs = utilsService.group_list(2, members);
        }
      });
    });
    $("[_members-active-toggle]").click(() => turnPage());
    turnPage();
  }


  set_publications_display(){if (isPlatformBrowser(this.platformId)) {
    let init = () => {
      let type = this.utilsService.get_url_tail();
      $("[data-type0]").removeClass('in');
      $("[data-type0="+type+"]").addClass('in');
    }
    this.init_click_postprocessing();
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
    this.init_click_postprocessing();
    setTimeout(() => {
      let doc = $(document);
      this.init_scroll(doc, 150, 450);
      init_section(doc, 100);
      this.init_pagenation();
    });
  }}

  set_board_display(){if (isPlatformBrowser(this.platformId)) {
    this.init_click_postprocessing();
    setTimeout(() => {
      let doc = $(document);
      this.init_scroll(doc, 80, 387);
    })
  }}
}
