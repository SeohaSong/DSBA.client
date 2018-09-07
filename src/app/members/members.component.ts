import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
  loadingStatus: boolean = true;
  types: string[] = ["overall", "professor", "students", "alumni"];

  constructor(
    private router: Router,
    private displayService: DisplayService,
    private utilsService: UtilsService
  ) { }

  ngOnInit() {
    let func1 = this.utilsService.initMembers;
    this.utilsService.limitToBrowser(func1, this.utilsService, [this]);
    let func2 = this.displayService.initMembersDisplay;
    this.utilsService.limitToBrowser(func2, this.displayService, [this]);
  }

  checkPage(pageTypes: string[]) {
    if (this.pageType == 'overall') return true;
    if (pageTypes.indexOf(this.pageType) >= 0) return true;
    return false;
  }

  turnPage(pageType: string) {
    this.router.navigate(['members', pageType])
    .then(() => this.utilsService.setStudentPairs(this));
  }
}
