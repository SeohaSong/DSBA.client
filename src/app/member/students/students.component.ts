import { Component, OnInit } from '@angular/core';
import { MemberService } from "../member.service"


@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {

  private member_pairs: Array<any>

  constructor(
    private memberService: MemberService,
  ) { }

  ngOnInit() {
    this.member_pairs = this.memberService.get_members("students");
  }

}
