import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Member, MEMBERS } from '../../../db/member';


declare const $: any;


@Injectable({
  providedIn: 'root'
})
export class MembersService {

  constructor(
    private router: Router
  ) { }

  get_members(type): Array<Array<Member>> {
    let member_pairs=[]
    let members = MEMBERS.filter(member => member.type == type)
		let pairs_length = parseInt(""+members.length/2)+1;
		for(let i = 0; i < pairs_length; i++) member_pairs.push([]);
		for(let i = 0; i < members.length; i++) {
			let index = parseInt(""+i/2);
			member_pairs[index].push(members[i]);
		}
		return member_pairs;
  }

  get_curr_type(){
    let curr_type = this.router.url.split("/")[2]
    return curr_type
  }

  set_display(){
    $(
      "li.list-group-item > a[href='/members/"
      +this.get_curr_type()
      +"']"
    ).parent().addClass("active");
    $("a[href^='/members/']").click(() => {
      $(".navbar-responsive-collapse").removeClass("in");
      $("li.list-group-item").removeClass("active");
      $(
        "li.list-group-item > a[href='/members/"
        +this.get_curr_type()
        +"']"
      ).parent().addClass("active");
    });
  }

}
