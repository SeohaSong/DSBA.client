import { Component, OnInit } from '@angular/core';

import { UtilsService } from "../_services/utils.service";
import { DisplayService } from "../_services/display.service";


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  constructor(
    private utilsService: UtilsService,
    private displayService: DisplayService
  ) { }

  projects: any[];
  project_groups: any[];

  ngOnInit() {
    this.displayService.set_researches_display();
    let projects = this.utilsService.get_projects();
    this.projects = projects;
    // this.project_groups = this.utilsService.group_list(4, projects)
  }

}
