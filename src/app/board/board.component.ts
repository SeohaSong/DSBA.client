import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Location } from '@angular/common'

import { DisplayService } from "../_services/display.service";
import { UtilsService } from "../_services/utils.service";

import { ActivatedRoute } from '@angular/router';


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

  all_posts = {};
  post_n: number;

  posts = [];
  post: any;
  post_groups: any;
  post_group: any;
  latest_posts: any;
  page_length: number;
  page: number;

  snapshot = this.route.snapshot
  category = this.snapshot.routeConfig.path.replace(/board\/*/, '')
  post_id = this.snapshot.paramMap.get('id');

  ngOnInit() {
    this.utilsService.set_posts(this);
  }

  show_post(id) {
    this.post = this.all_posts[id];
    let url = this.location.path().split('?');
    this.location.go(
      [[url[0].replace(/\/\d+/, ''), id].join('/'), url[1]]
      .join('?')
    );
    this.displayService.do_click_postprocessing();
  }

  reset_post() {
    this.post = null;
    let url = this.location.path().split('?');
    this.location.go(
      [url[0].replace(/\/\d+/, ''), url[1]]
      .join('?')
    );
  }

  turn_post(change=0) {
    let id = this.post.id+change;
    if (!(id+1 < 1 || id+1 > this.post_n)) {
      this.post = this.all_posts[id];
      let url = this.location.path().split('?');
      this.location.go(
        [[url[0].replace(/\/\d+/, ''), id].join('/'), url[1]]
        .join('?')
      );
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

  reverse(value) {
    return value.reverse();
  }

  is_image(images) {
    if(images.length) {return true} else {return false}
  }

  beautify_date(date) {
    let y = date.slice(0, 4);
    let m = date.slice(4, 6);
    let d = date.slice(6, 8);
    return [y, m, d].join('.');
  }

  trim_html(html){
    return html.replace(/<.+?>/g, ' ').slice(0, 128)+' ...';
  }

}
