import { Component, OnInit, Inject } from '@angular/core';

import { DisplayService } from '../_services/display.service'
import { UtilsService } from "../_services/utils.service";


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(
    private displayService: DisplayService,
    private utilsService: UtilsService
  ) { }

  vids = ["f9k5fxouO1Q", "rko6cb_Gq0k", "BiIlQQAx70c", "vHsa4tUErPg"];
  project_groups: any[];
  cooperations: any[];

  latestShots = [
    {
      id: 1,
      active: "active",
      description: "Facilisis odio, dapibus ac justo acilisis gestinas."
    },
    {
      id: 2,
      active: "",
      description: "Facilisis odio, dapibus ac justo acilisis gestinas."
    },
    {
      id: 3,
      active: "",
      description: "Facilisis odio, dapibus ac justo acilisis gestinas."
    },
    {
      id: 4,
      active: "",
      description: "Facilisis odio, dapibus ac justo acilisis gestinas."
    }
  ];

  ngOnInit() {
    this.displayService.set_main_display();
    let projects = this.utilsService.get_projects();
    this.project_groups = this.utilsService.group_list(4, projects)
                          .slice(0, 2);
    this.cooperations = this.utilsService.get_cooperations();
  }

}
