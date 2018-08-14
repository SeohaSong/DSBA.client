import { Injectable, Inject } from '@angular/core';
import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

import { UtilsService } from './utils.service';


declare const App: any;
declare const FancyBox: any;
declare const StyleSwitcher: any;
declare const OwlCarousel: any;
declare const ParallaxSlider: any;

declare const $: any;


@Injectable({
  providedIn: 'root'
})
export class DisplayService {

  constructor(
    private utilsService: UtilsService,
    @Inject(PLATFORM_ID) private platformId: Object,
  ) { }


  init_scroll(doc, top_pad, bottom_pad) {
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
  }


  init_pagenation() {
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
  }


  init_display(){

    let init = () => {
      let type = this.utilsService.get_url_head();
      if(type == 'board') {type = 'activities'}
      $("[data-category]").removeClass('active');
      $("[data-category="+type+"]").addClass('active');
    }

    if (isPlatformBrowser(this.platformId)) {
      this.init_click_postprocessing();
      setTimeout(() => {
        App.init();
  			FancyBox.initFancybox();
        StyleSwitcher.initStyleSwitcher();
        $("#loading-ui").fadeOut();
        init();
        $("a[href^='/']").click(() => {init();});
      })
    }
  }


  do_click_postprocessing() {
    $(document).scrollTop(0)
    $('.navbar-responsive-collapse').removeClass("in");
  }

  init_click_postprocessing() {
    setTimeout(() => {
      this.do_click_postprocessing();
    });
  }


  set_main_display(){
    if (isPlatformBrowser(this.platformId)) {
      this.init_click_postprocessing();
      setTimeout(() => {
        OwlCarousel.initOwlCarousel();
        ParallaxSlider.initParallaxSlider();
        $("a[data-section]").click((e) => {
          let id = $(e.target).data('section');
          let scroll_top = $("div[data-section="+id+"]").offset().top
          $(document).scrollTop(scroll_top-100)
        })
      })
    }
  }


  set_members_display(){
    if (isPlatformBrowser(this.platformId)) {
      this.init_click_postprocessing();
      setTimeout(() => {
        let type = this.utilsService.get_url_tail();
        $("li.list-group-item > a[href='/members/"+type+"']")
        .parent().addClass("active");
        $("a[href^='/members/']").click(() => {
          let type = this.utilsService.get_url_tail();
          $("li.list-group-item").removeClass("active");
          $("li.list-group-item > a[href='/members/"+type+"']")
          .parent().addClass("active");
        });
      });
    }
  }


  set_publications_display(){

    let init = () => {
      let type = this.utilsService.get_url_tail();
      $("[data-type0]").removeClass('in');
      $("[data-type0="+type+"]").addClass('in');
    }

    if (isPlatformBrowser(this.platformId)) {
      this.init_click_postprocessing();
      setTimeout(() => {
        init();
        $("a[href^='/publications/']").click(() => {init();});
      })
    }
  }


  set_researches_display(){

    let init_section = (doc, top_pad) => {
      $("a[data-section]").click((e) => {
        let id = $(e.currentTarget).data('section');
        let scroll_top = $("div[data-section="+id+"]").offset().top
        doc.scrollTop(scroll_top-top_pad)
      })
    }

    if (isPlatformBrowser(this.platformId)) {
      this.init_click_postprocessing();
      setTimeout(() => {
        let doc = $(document);
        this.init_scroll(doc, 150, 450);
        init_section(doc, 100);
        this.init_pagenation();
      })
    }
  }


  set_board_display(){
    if (isPlatformBrowser(this.platformId)) {
      this.init_click_postprocessing();
      setTimeout(() => {
        let doc = $(document);
        this.init_scroll(doc, 80, 385);
      })
    }
  }

}
