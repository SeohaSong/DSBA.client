import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Member } from './member';

declare const $: any;


@Injectable()
export class MemberService {

  constructor(
    private router: Router
  ) { }

  initialize(){
    this.map_url2style(); 
    $("a[routerLink^='/member/']").click(() => {
      this.map_url2style();
    });
  }

  map_url2style(){
    let url = this.router.url;
    let url_map = {
      "/member/overall": 1,
      "/member/professor": 2,
      "/member/students": 3,
      "/member/alumni": 4
    }
    $("li.list-group-item").removeClass("active");    
    $("li.list-group-item:nth-child(" + url_map[url] + ")").addClass("active");
  }

  get_pair_list(students, student_pairs=[]): Array<Array<Member>> {
		let pairs_length = parseInt("" + students.length / 2) + 1;
		for(let i = 0; i < pairs_length; i++) student_pairs.push([]);
		for(let i = 0; i < students.length; i++) {
			let index = parseInt("" + i / 2);
			student_pairs[index].push(students[i]);
		}
		return student_pairs;
	}
  
}
