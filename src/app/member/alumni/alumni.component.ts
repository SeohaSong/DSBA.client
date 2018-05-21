import { Component, OnInit } from '@angular/core';
import { MemberService } from "../member.service"


@Component({
  selector: 'app-alumni',
  templateUrl: './alumni.component.html',
  styleUrls: ['./alumni.component.scss']
})
export class AlumniComponent implements OnInit {

  private member_pairs: Array<any>

  constructor(
    private memberService: MemberService,
  ) { }

  ngOnInit() {
    this.member_pairs = this.memberService.get_members("alumni");
  }

}
