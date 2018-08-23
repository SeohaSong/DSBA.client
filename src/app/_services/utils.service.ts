import { Injectable, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

import {
  CATEGORIES, STUDENTS, RESEARCHES, PUBLICATIONS, COOPERATIONS, PROJECTS
} from "./database.service";

declare const storage: any;
declare const firebase: any;
declare const auth: any;
declare const db: any;


let platformId: any;

function limitToBrowser() {
  return (target, propertyKey, descriptor) => {
    let oldValue = descriptor.value;
    descriptor.value = function() {
      if (isPlatformBrowser(platformId)) {
        return oldValue.apply(null, arguments);
      }
    }
    return descriptor;
  }
}


@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor(
    private router: Router,
    @Inject(PLATFORM_ID) private platformId_: Object,
  ) {platformId = platformId_}

  @limitToBrowser()
  set_posts(board) {
    let category = board.category;
    let all_posts = board.all_posts;
    let posts = board.posts;

    db.collection("posts").orderBy('id').get().then(data => {
      data.forEach(post => {
        post = post.data();
        all_posts[post.id] = post;
        posts.push(post);
      });
      posts.reverse();
      if (category) {
        board.posts = posts.filter(post => post.category == category);
      }
      board.post_groups = board.utilsService.group_list(10, board.posts);
      board.page_length = board.post_groups.length;
      if (board.post_id) {board.show_post(board.post_id)}
      board.turn_page();
      board.latest_posts = board.posts.slice(0, 2);
      board.displayService.set_board_display();
    });
  }

  @limitToBrowser()
  set_auth(app) {
    app.uid = storage.getItem('uid');
    if (app.uid == 'pendding') {
      setTimeout(() => {if (app.uid == 'pendding') this.sign_out(app)}, 5000)
    }

    auth.onAuthStateChanged((user) => {
      if (user) {
        let email = user.email
        let uid = user.uid
        storage.setItem('email', email);
        storage.setItem('uid', uid);
        db.collection('users').doc(uid).set({email: email, state: 0})
        .then(data => console.log('신규 가입되었습니다.'))
        .catch(error => console.log('기존 사용자입니다.'));
        console.log(email)
      } else {
        storage.removeItem('email');
        storage.removeItem('uid');
        console.log('비회원입니다.')
      }
      app.uid = storage.getItem('uid');
    });
  }

  sign_in(app) {
    storage.setItem('uid', 'pendding');
    let provider = new firebase.auth.GoogleAuthProvider();
    auth.languageCode = 'ko-KR';
    auth.signInWithRedirect(provider);
  }

  sign_out(app) {
    auth.signOut();
    this.router.navigate(['main']);
  }

  get_url_head = () => this.router.url.split("/")[1];
  get_url_tail = () => this.router.url.split("/")[2];

  group_list(size, list){
    let groups = [];
    let group_idxs = [];
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

  get_categories = () => CATEGORIES
  get_researches = () => RESEARCHES
  get_publications = () => PUBLICATIONS
  get_cooperations = () => COOPERATIONS
  get_projects = () => PROJECTS
}
