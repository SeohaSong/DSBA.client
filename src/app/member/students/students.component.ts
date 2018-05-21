import { Component, OnInit, Input } from '@angular/core';
import { MemberService } from "../member.service"


@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {

  member_pairs: Array<any>
  @Input() member_type: string

  constructor(
    private memberService: MemberService,
  ) { }

  ngOnInit() {
    if (this.member_type == undefined) {
      this.member_type = this.memberService.get_member_type()
    }
    this.member_pairs = this.memberService.get_members(this.member_type);
  }

}
