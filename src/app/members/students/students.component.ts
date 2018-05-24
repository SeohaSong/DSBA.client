import { Component, OnInit, Input } from '@angular/core';

import { UtilsService } from "../../_services/utils.service";


@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss'],
})
export class StudentsComponent implements OnInit {

  @Input() student_type: string;
  student_pairs: any[];

  constructor(
    private utilsService: UtilsService,
  ) { }

  ngOnInit() {
    this.utilsService
        .get_student_pairs(this.student_type)
        .then(val => [this.student_type, this.student_pairs] = val);
  }

}
