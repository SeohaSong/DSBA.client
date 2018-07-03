import { Component, OnInit } from '@angular/core';

import { UtilsService } from "../_services/utils.service";
import { DisplayService } from "../_services/display.service";


@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  constructor(
    private utilsService: UtilsService,
    private displayService: DisplayService
  ) { }

  ngOnInit() {
    this.displayService.set_board_display();
  }

}
