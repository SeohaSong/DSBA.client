import { Injectable, Inject } from '@angular/core';
import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

import { UtilsService } from './utils.service';


declare const App: any;
declare const StyleSwitcher: any;
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
    if (isPlatformBrowser(this.platformId)) {
      $(window).load(() => {
        App.init();
        StyleSwitcher.initStyleSwitcher();
        $("a[href^='/']").click(() => {
          $(".navbar-responsive-collapse").removeClass("in");
        })
        $("#loading-ui").fadeOut();
      })
    }
  }

  set_members_display(){
    if (isPlatformBrowser(this.platformId)) {
      setTimeout(() => {
        let type = this.utilsService.get_url_tail();
        $(
          "li.list-group-item > a[href='/members/"
          +type
          +"']"
        ).parent().addClass("active");
        $("a[href^='/members/']").click(() => {
          let type = this.utilsService.get_url_tail();
          $("li.list-group-item").removeClass("active");
          $(
            "li.list-group-item > a[href='/members/"
            +type
            +"']"
          ).parent().addClass("active");
        });
      });
    }

  }

}
