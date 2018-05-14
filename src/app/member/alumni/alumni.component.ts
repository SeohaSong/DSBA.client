import { Component, OnInit } from '@angular/core';
import { Member, ALUMNI } from '../member';
import { MemberService } from "../member.service"


@Component({
  selector: 'app-alumni',
  templateUrl: './alumni.component.html',
  styleUrls: ['./alumni.component.scss']
})
export class AlumniComponent implements OnInit {

  members = ALUMNI;
  member_pairs: Array<Array<Member>>;

  constructor(
    private memberService: MemberService
  ) { }

  ngOnInit() {
    this.member_pairs = this.memberService.get_pair_list(this.members);
  }

}
