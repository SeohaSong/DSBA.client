import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Router } from '@angular/router';

import { PUBLICATIONS } from "./database.service";

declare const storage: any;
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

  get_userid = () => storage.getItem('uid');
  get_username = () => storage.getItem('name');

  get_url_head = () => this.router.url.split("?")[0].split("/")[1];
  get_url_tail = () => {
    let pipes = this.router.url.split("?")[0].split("/");
    return pipes[pipes.length-1];
  }

  beautifyAdmission(admission: string) {
    let parts: Array<string> = admission.split('-');
    let head: string = ['March 1', 'September 1'][parseInt(parts[1])-1];
    let beautified: string  = [head, parts[0]].join(', ');
    return beautified;
  }

  setEditor() {
    setTimeout(() => {
      tinymce.remove();
      tinymce.init({
        selector: '[data-editor=w]',
        plugins : 'lists link image charmap preview hr table code autoresize',
        menubar: false,
        toolbar: [`
          undo redo | bold italic | underline strikethrough | link image
          | alignleft aligncenter alignright | outdent indent | formatselect
          | bullist numlist | preview code | charmap hr table
        `]
      });
      tinymce.init({
        selector: '[data-editor=r]',
        plugins : 'autoresize',
        readonly: true,
        toolbar: false,
        menubar: false,
        statusbar: false,
        default_link_target: "_blank"
      });
    });
  }

  setEditorContent = (content) => tinymce.activeEditor.setContent(content);
  getEditorContent = () => tinymce.activeEditor.getContent({format : 'raw'});
  get_publications = () => PUBLICATIONS
}
