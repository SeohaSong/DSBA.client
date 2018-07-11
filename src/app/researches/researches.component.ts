import { Component, OnInit } from '@angular/core';

import { UtilsService } from "../_services/utils.service";
import { DisplayService } from "../_services/display.service";


@Component({
  selector: 'app-researches',
  templateUrl: './researches.component.html',
  styleUrls: ['./researches.component.scss']
})
export class ResearchesComponent implements OnInit {

  constructor(
    private utilsService: UtilsService,
    private displayService: DisplayService
  ) { }

  researches: any[];
  research_groups: any[];

  ngOnInit() {
    this.displayService.set_researches_display();
    let researches = this.utilsService.get_researches();
    this.researches = researches;
    this.research_groups = this.utilsService.group_list(4, researches);
  }

}
