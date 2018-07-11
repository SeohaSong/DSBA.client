import { Component, OnInit } from '@angular/core';

import { DisplayService } from "../_services/display.service";



import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  constructor(
    private http: HttpClient,
    private displayService: DisplayService
  ) { }

  newses: any;

  ngOnInit() {
    this.displayService.set_board_display();
    this.get_newses().subscribe(data => {
      this.newses = data
    })
  }

  get_newses() {
    let newses = this.http.get('http://localhost:4200/assets/db/news.json')
    return newses
  }



}
