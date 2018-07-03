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


  set_default_display(){
    setTimeout(() => {
      $("a[href^='/']").click(() => {
        $(document).scrollTop(0)
        let nav = $('.navbar-responsive-collapse')
        nav.removeClass("in");
      });
    });
  }


  init_display(){

    let init = () => {
      let type = this.utilsService.get_url_head();
      console.log(type)
      $("[data-category]").removeClass('active');
      $("[data-category="+type+"]").addClass('active');
    }

    if (isPlatformBrowser(this.platformId)) {
      this.set_default_display()
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


  set_main_display(){
    if (isPlatformBrowser(this.platformId)) {
      this.set_default_display()
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
      this.set_default_display()
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
      this.set_default_display();
      setTimeout(() => {
        init();
        $("a[href^='/publications/']").click(() => {init();});
      })
    }
  }


  set_researches_display(){

    let init_scroll = (doc, top_pad) => {
      let nav = $("[data-nav]");
      let init_top = parseInt(nav.css('top'));
      doc.scroll(() => {
        let top = init_top-doc.scrollTop()-top_pad;
        if (top > 0) {nav.css('top', top+top_pad);}
        else {nav.css('top', top_pad);}
      })
    }

    let init_section = (doc, top_pad) => {
      $("a[data-section]").click((e) => {
        let id = $(e.target).data('section');
        let scroll_top = $("div[data-section="+id+"]").offset().top
        doc.scrollTop(scroll_top-top_pad)
      })
    }

    if (isPlatformBrowser(this.platformId)) {
      this.set_default_display();
      setTimeout(() => {
        let doc = $(document)
        init_scroll(doc, 150);
        init_section(doc, 100);
      })
    }
  }

  set_board_display(){
    if (isPlatformBrowser(this.platformId)) {
      this.set_default_display();
      setTimeout(() => {
        $('#demo-in').click(() => {
          $('[data-board-toggle]').removeClass('on');
          $('[data-board-toggle=content]').addClass('on');
        })
        $('#dsba-back-btn').click(() => {
          $('[data-board-toggle]').removeClass('on');
          $('[data-board-toggle=menu]').addClass('on');
        })
      })
    }
  }

}
