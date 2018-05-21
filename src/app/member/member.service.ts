import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Member, MEMBERS } from '../../../db/member';

declare const $: any;


let url_map = {
  "/member/overall": 1,
  "/member/professor": 2,
  "/member/students": 3,
  "/member/alumni": 4
}


@Injectable()
export class MemberService {

  constructor(
    private router: Router
  ) { }

  initialize(){
    this._convert_url2style();
    $("a[routerLink^='/member/']").click(() => {
      this._convert_url2style();
    });
  }

  get_members(type, member_pairs=[]): Array<Array<Member>> {

    let members = MEMBERS.filter(member => member.type == type)
		let pairs_length = parseInt("" + members.length / 2) + 1;
		for(let i = 0; i < pairs_length; i++) member_pairs.push([]);
		for(let i = 0; i < members.length; i++) {
			let index = parseInt("" + i / 2);
			member_pairs[index].push(members[i]);
		}
		return member_pairs;
  }

  _convert_url2style(){
    let url = this.router.url;
    $("li.list-group-item").removeClass("active");
    $("li.list-group-item:nth-child(" + url_map[url] + ")").addClass("active");
  }

}
