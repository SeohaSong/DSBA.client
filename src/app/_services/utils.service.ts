import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import {
  CATEGORIES, STUDENTS, RESEARCHES, PUBLICATIONS, COOPERATIONS, PROJECTS
} from "./database.service";


@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor(
    private router: Router,
  ) { }

  get_url_head(){
    let head = this.router.url.split("/")[1];
    return head
  }

  get_url_tail(){
    let tail = this.router.url.split("/")[2];
    return tail
  }

  group_list(size, list){
    let groups = [];
    let group_idxs = []
    let n_group = parseInt(""+(list.length-1)/size)+1;
    for (let i=0; i < n_group; i++) {
      groups.push([]);
      for (let i_=0; i_ < size; i_++) group_idxs.push(i);
    }
    for (let i=0; i < list.length; i++) {
      groups[group_idxs[i]].push(list[i])
    }
    return groups
  }

  get_categories() {
    return CATEGORIES
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
      pairs = this.group_list(2, students)
      return [type, pairs]
    })
  }

  get_researches() {
    return RESEARCHES
  }

  get_publications() {
    return PUBLICATIONS
  }

  get_cooperations() {
    return COOPERATIONS
  }

  get_projects() {
    return PROJECTS
  }
}
