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

  ngOnInit() {
    this.displayService.set_board_display();
    this.get_newses().subscribe(data => {
      let posts = data.reverse();
      this.post_groups = this.utilsService.group_list(8, posts)
    })
  }
  // https://angularfirebase.com/snippets/how-to-reverse-an-observable-array-in-angular-angularfire2-firebaselistobservable/
  safe_html(html){
    return html.replace(/<.+?>/g, ' ').slice(0, 128)+' ...';
  }

  get_newses() {
    let newses = this.http.get('/assets/db/news.json');
    return newses;
  }


}
