import { Injectable, Inject } from '@angular/core';
import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

import { UtilsService } from './utils.service';


declare const $: any;


@Injectable({
  providedIn: 'root'
})
export class DisplayService {

  constructor(
    private utilsService: UtilsService,
    @Inject(PLATFORM_ID) private platformId: Object,
  ) { }

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
          $(".navbar-responsive-collapse").removeClass("in");
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
