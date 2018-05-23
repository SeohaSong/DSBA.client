import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Component, OnInit, Inject } from '@angular/core';

import { MembersService } from './members.service';



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
        this.membersService.set_display()
      })
    }
  }

}
