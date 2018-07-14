import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Location } from '@angular/common'

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
    private location: Location
  ) { }

  post_groups: any;
  posts: any;
  page_length: number;
  page: number;

  ngOnInit() {
    let init = (data) => {
      let posts = data.reverse();
      this.post_groups = this.utilsService.group_list(10, posts);
      this.page_length = this.post_groups.length;
      this.turn_page();
      this.displayService.set_board_display();
    }
    this.get_newses().subscribe(init.bind(this));

  }

  turn_page(change=0) {

    let page: number;
    let max_page = this.page_length;
    let path = this.location.path();
    let page_param = /\?.*page=(\w+)/.exec(path);
    let post_groups = this.post_groups;

    if(!page_param) {page = 1} else {page = parseInt(page_param[1])+change}
    if(page < 1) {page = 1} else if(page > max_page) {page = max_page}

    this.page = page;
    this.posts = post_groups[page-1];
    this.location.go(path.split('?')[0]+'?page='+(page));
  }

  reverse(value) {
    return value.reverse();
  }

  is_image(images) {
    if(images.length) {
      return [7, true]
    } else {
      return [10, false]
    }
  }

  beautify_date(date) {
    let y = date.slice(0, 4)
    let m = date.slice(4, 6)
    let d = date.slice(6, 8)
    return [y, m, d].join('.')
  }

  trim_html(html){
    return html.replace(/<.+?>/g, ' ').slice(0, 128)+' ...';
  }

  get_newses() {
    let newses = this.http.get('/assets/db/news.json');
    return newses;
  }


}
