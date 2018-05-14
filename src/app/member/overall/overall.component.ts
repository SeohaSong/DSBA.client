import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';

import { Component, OnInit, Inject } from '@angular/core';

declare const $: any;


@Component({
  selector: 'app-overall',
  templateUrl: './overall.component.html',
  styleUrls: ['./overall.component.scss']
})
export class OverallComponent implements OnInit {

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      $("div.panel.panel-profile").css("display", "none")
      $("div.profile-bio.margin-bottom-40").removeClass("margin-bottom-40")
    }
  }

}
