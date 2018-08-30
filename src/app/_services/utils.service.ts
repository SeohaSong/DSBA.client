import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Router } from '@angular/router';

import {
  CATEGORIES, STUDENTS, RESEARCHES, PUBLICATIONS, COOPERATIONS, PROJECTS
} from "./database.service";

declare const storage: any;
declare const firebase: any;
declare const auth: any;
declare const db: any;
declare const tinymce: any;


@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor(
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) { }

  limitToBrowser(func, this_, args) {
    if (isPlatformBrowser(this.platformId)) return func.apply(this_, args);
  }

  set_posts(board) {
    let category = board.category;
    let all_posts = board.all_posts;
    let posts = board.posts;
    let images = board.images;
    let id2id = board.id2id;
    let id = 0;
    db.collection("posts").orderBy('date').get().then(data => {
      data.forEach(post_ => {
        id += 1;
        id2id[id] = post_.id;
        let post = post_.data();
        post.id = id;
        all_posts[id] = post;
        post.images.forEach(img => images.push(img));
        posts.push(post);
      });
      posts.reverse();
      if (category != 'overall') {
        board.posts = posts.filter(post => post.category == category);
      }
      board.post_n = Object.keys(all_posts).length
      board.post_groups = board.utilsService.group_list(10, board.posts);
      board.page_length = board.post_groups.length;
      if (board.post_id) {board.show_post(board.post_id)}
      board.turn_page();
      board.latest_posts = board.posts.slice(0, 2);
      board.displayService.set_board_display();
      board.loading_status = false;
    });
  }

  save_post(board, id) {
    let title = board.updating_title
    let content = this.getEditorContent();
    db.collection('posts').doc(board.id2id[id]).set({
      title: title,
      content: content
    },{merge: true})
    return [title, content]
  }

  update_view_count(id) {
    console.log('뷰카운트 업데이트는 서버측에서 작업해야함');
  }

  set_auth(app) {
    app.uid = storage.getItem('uid');
    if (app.uid == 'pendding') {
      setTimeout(() => {if (app.uid == 'pendding') this.sign_out(app)}, 5000)
    }
    auth.onAuthStateChanged((user) => {
      if (user) {
        let name = user.displayName
        let email = user.email
        let uid = user.uid
        storage.setItem('name', name);
        storage.setItem('uid', uid);
        db.collection('users').doc(uid).set({
          name: name,
          email: email,
          state: 0
        })
        .then(data => console.log('신규 가입되었습니다.'))
        .catch(error => console.log('기존 사용자입니다.'));
        console.log(name)
      } else {
        storage.removeItem('name');
        storage.removeItem('uid');
        console.log('비회원입니다.')
      }
      app.uid = storage.getItem('uid');
    });
  }

  get_userid = () => storage.getItem('uid');
  get_username = () => storage.getItem('name');

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

  get_url_head = () => this.router.url.split("?")[0].split("/")[1];
  get_url_tail = () => {
    let pipes = this.router.url.split("?")[0].split("/");
    return pipes[pipes.length-1];
  }

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
    });
  }

  setEditor() {
    setTimeout(() => {
      tinymce.remove();
      tinymce.init({
        selector: '[data-editor=w]',
        plugins : 'lists link image charmap preview hr table code autoresize',
        menubar: false,
        toolbar: [
'undo redo | bold italic | underline strikethrough | link image\
 | alignleft aligncenter alignright | outdent indent | formatselect\
 | bullist numlist | preview code | charmap hr table'
        ]
      });
      tinymce.init({
        selector: '[data-editor=r]',
        plugins : 'autoresize',
        readonly: true,
        toolbar: false,
        menubar: false,
        statusbar: false
      });
    });
  }

  setEditorContent = (content) => tinymce.activeEditor.setContent(content);
  getEditorContent = () => tinymce.activeEditor.getContent({format : 'raw'});

  get_categories = () => CATEGORIES
  get_researches = () => RESEARCHES
  get_publications = () => PUBLICATIONS
  get_cooperations = () => COOPERATIONS
  get_projects = () => PROJECTS
}
