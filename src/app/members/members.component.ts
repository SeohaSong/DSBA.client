import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Component, OnInit, Inject } from '@angular/core';

import { MembersService } from './members.service';

declare const $: any;


@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss']
})
export class MembersComponent implements OnInit {

  types = ["overall", "professor", "students", "alumni"]

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private membersService: MembersService,
  ) { }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      setTimeout(() => {
        $(
          "li.list-group-item > a[href='/member/"
          +this.membersService.get_curr_type()
          +"']"
        ).parent().addClass("active");
        $("a[href^='/member/']").click(() => {
          $("li.list-group-item").removeClass("active");
          $(
            "li.list-group-item > a[href='/member/"
            +this.membersService.get_curr_type()
            +"']"
          ).parent().addClass("active");
        });
      })
    }
  }

}
