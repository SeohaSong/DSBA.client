import { Component, OnInit } from '@angular/core';
import { Member, STUDENTS } from '../member';
import { MemberService } from "../member.service"


@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {

  members = STUDENTS;
  member_pairs: Array<Array<Member>>;

  constructor(
    private memberService: MemberService
  ) { }

  ngOnInit() {
    this.member_pairs = this.memberService.get_pair_list(this.members);
  }

}
