import { Component, OnInit } from '@angular/core';

import { UtilsService } from "../_services/utils.service";


@Component({
  selector: 'app-jenkins',
  templateUrl: './jenkins.component.html',
  styleUrls: ['../members/students/students.component.scss']
})
export class JenkinsComponent implements OnInit {

  constructor(
    private utilsService: UtilsService,
  ) { }

  prMemberPair: any[];
  seMember: any[];
  projects: any[];
  weeks: any[];
  beautifyAdmission = this.utilsService.beautifyAdmission;

  ngOnInit() {
    let func = this.utilsService.initJenkins;
    this.utilsService.limitToBrowser(func, this.utilsService, [this]);
  }

}
