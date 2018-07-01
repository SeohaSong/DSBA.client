import { Injectable, Inject } from '@angular/core';
import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

import { UtilsService } from './utils.service';


declare const App: any;
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
}
