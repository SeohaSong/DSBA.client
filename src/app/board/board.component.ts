import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
    private utilsService: UtilsService
  ) { }

  post_groups: any;
  posts: any;

  // https://joshua1988.github.io/web-development/angular/angular2-learn/#angular-1-%EA%B3%BC-2-%EC%9D%98-%EC%B0%A8%EC%9D%B4%EC%A0%90

  ngOnInit() {
    this.displayService.set_board_display();
    this.get_newses().subscribe(this.init.bind(this));
  }

  init(data) {
    let posts = data.reverse();
    this.post_groups = this.utilsService.group_list(8, posts);
    this.posts = this.post_groups[0];
  }

  reverse(value) {
    return value.reverse();
  }

  trim_html(html){
    return html.replace(/<.+?>/g, ' ').slice(0, 128)+' ...';
  }

  get_newses() {
    let newses = this.http.get('/assets/db/news.json');
    return newses;
  }


}
