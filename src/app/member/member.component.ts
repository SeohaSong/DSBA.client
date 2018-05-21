import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

import { Component, OnInit, Inject } from '@angular/core';

import { MemberService } from './member.service';

declare const App: any;
declare const Datepicker: any;
declare const CirclesMaster: any;


@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.scss']
})
export class MemberComponent implements OnInit {

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private memberService: MemberService
  ) { }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      App.initScrollBar();
      Datepicker.initDatepicker();
      CirclesMaster.initCirclesMaster1();
      this.memberService.initialize();
    }
  }

}
