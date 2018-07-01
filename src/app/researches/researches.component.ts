import { Component, OnInit } from '@angular/core';

import { UtilsService } from "../_services/utils.service";
import { DisplayService } from "../_services/display.service";


@Component({
  selector: 'app-researches',
  templateUrl: './researches.component.html',
  styleUrls: ['./researches.component.scss']
})
export class ResearchesComponent implements OnInit {

  researches: any[];

  constructor(
    private utilsService: UtilsService,
    private displayService: DisplayService
  ) { }

  ngOnInit() {
    this.displayService.set_default_display()
    this.researches = this.utilsService.get_researches()
  }

}
