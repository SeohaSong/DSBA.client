import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { STUDENTS } from "./database.service";


@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor(
    private router: Router,
  ) { }

  get_url_tail(){
    let tail = this.router.url.split("/")[2];
    return tail
  }

  get_student_pairs(type): any {
    return new Promise(resolve => {
      if (type == undefined) {
        resolve(this.get_url_tail())
      } else {
        resolve(type)
      }
    }).then(type => {
      let pairs = [];
      let students = STUDENTS.filter(val => val.type == type);
      let pairs_length = parseInt(""+students.length/2)+1;
      for(let i=0; i < pairs_length; i++) pairs.push([]);
      for(let i=0; i < students.length; i++) {
        let index = parseInt(""+i/2);
        pairs[index].push(students[i]);
      }
      return [type, pairs]
    })
  }

}
