import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Component, OnInit, Inject } from '@angular/core';

import { MemberService } from './member.service';

declare const $: any;


@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.scss']
})
export class MemberComponent implements OnInit {

  types = ["overall", "professor", "students", "alumni"]

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private memberService: MemberService,
  ) { }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      setTimeout(() => {
        $(
          "li.list-group-item > a[href='/member/"
          +this.memberService.get_curr_type()
          +"']"
        ).parent().addClass("active");
        $("a[href^='/member/']").click(() => {
          $("li.list-group-item").removeClass("active");
          $(
            "li.list-group-item > a[href='/member/"
            +this.memberService.get_curr_type()
            +"']"
          ).parent().addClass("active");
        });
      })
    }
  }

}
