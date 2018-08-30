import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Location } from '@angular/common'
import { ActivatedRoute } from '@angular/router';

import { DisplayService } from "../_services/display.service";
import { UtilsService } from "../_services/utils.service";


@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  constructor(
    private http: HttpClient,
    private displayService: DisplayService,
    private utilsService: UtilsService,
    private location: Location,
    private route: ActivatedRoute
  ) { }

  id2id = [];
  all_posts = {};
  post_n: number;

  posts = [];
  post: any;
  post_groups: any;
  post_group: any;
  latest_posts: any;
  images = []
  page_length: number;
  page: number;

  updating_status = false;
  updating_title: string;

  loading_status = true;

  category = (
    this.route.snapshot.routeConfig.path
    .replace(/board\/*/, '')
    .replace(/\/.*/, '')
  )
  post_id = this.route.snapshot.paramMap.get('id');

  ngOnInit() {
    let func = this.utilsService.set_posts
    this.utilsService.limitToBrowser(func, this.utilsService, [this]);
  }

  show_post(id) {
    if (this.post) {
      this.post = this.all_posts[id];
      this.utilsService.setEditorContent(this.post.content);
    } else {
      this.post = this.all_posts[id];
    }
    this.updating_status = false;
    let url = this.location.path().split('?');
    let parts = [[url[0].replace(/\/\d+/, ''), id].join('/'), url[1]]
    this.location.go(parts.join('?'))
    this.utilsService.update_view_count(this.id2id[id]);
    this.displayService.do_click_postprocessing();
    this.utilsService.setEditor();
  }

  reset_post() {
    this.post = null;
    this.updating_status = false;
    let url = this.location.path().split('?');
    this.location.go([url[0].replace(/\/\d+/, ''), url[1]].join('?'));
  }

  turn_post(change=0) {
    let id = this.post.id+change;
    if (!(id < 1 || id > this.post_n)) {
      this.post = this.all_posts[id];
      let url = this.location.path().split('?');
      let parts = [[url[0].replace(/\/\d+/, ''), id].join('/'), url[1]];
      this.location.go(parts.join('?'));
      this.utilsService.setEditorContent(this.post.content);
    }
  }

  turn_page(change=0) {
    let page: number;
    let max_page = this.page_length;
    let path = this.location.path();
    let post_groups = this.post_groups;
    let page_param = /\?.*page=(\w+)/.exec(path);
    if(!page_param) {page = 1} else {page = parseInt(page_param[1])+change}
    if(page < 1) {page = 1} else if(page > max_page) {page = max_page}
    this.page = page;
    this.post_group = post_groups[page-1];
    this.location.go(path.split('?')[0]+'?page='+page);
  }

  trim_html = (html, limit=128) => html.slice(0, limit)+' ...';

  toggleEditStatus(id) {
    let uid = this.utilsService.get_userid();
    if (uid) {
      if (this.updating_status) {
        let post = this.all_posts[id];
        [post.title, post.content] = this.utilsService.save_post(this, id);
      } else {
        let post = this.all_posts[id];
        this.updating_title = post.title;
      }
      new Promise((resolve, reject) => {
        resolve(this.updating_status = !this.updating_status)
      }).then(() => this.utilsService.setEditor());
    } else {
      console.log('로그인을 해야합니다.')
    }
  }

}
