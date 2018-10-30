import { Component, OnInit } from '@angular/core';

import { UtilsService } from "../_services/utils.service";
import { DisplayService } from "../_services/display.service";


@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss']
})
export class MembersComponent implements OnInit {

  totalStudents: any[];
  studentPairs: any[][];
  pageType: string;
  loadingStatus = true;
  types = ["overall", "professor", "students", "alumni"];

  constructor(
    private displayService: DisplayService,
    private utilsService: UtilsService
  ) { }

  ngOnInit() {
    this.displayService.initMembers(this)
  }

  checkPage(pageTypes: string[]) {
    if (this.pageType == 'overall') return true;
    if (pageTypes.indexOf(this.pageType) >= 0) return true;
    return false;
  }
}
