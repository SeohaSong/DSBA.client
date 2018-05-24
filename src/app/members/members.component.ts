import { Component, OnInit } from '@angular/core';

import { DisplayService } from "../_services/display.service";


@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss']
})
export class MembersComponent implements OnInit {

  types = ["overall", "professor", "students", "alumni"]

  constructor(
    private displayService: DisplayService,
  ) { }

  ngOnInit() {
    this.displayService.set_members_display()
  }

}
