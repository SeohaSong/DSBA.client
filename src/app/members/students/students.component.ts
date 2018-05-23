import { Component, OnInit, Input } from '@angular/core';

import { MembersService } from "../members.service";


@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss'],
})
export class StudentsComponent implements OnInit {

  member_pairs: Array<any>;
  @Input() member_type: string;

  constructor(
    private membersService: MembersService,
  ) { }

  ngOnInit() {
    if (this.member_type == undefined) {
      this.member_type = this.membersService.get_curr_type()
    }
    this.member_pairs = this.membersService.get_members(this.member_type);
  }

}
