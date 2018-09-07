import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss'],
})
export class StudentsComponent implements OnInit {

  constructor() { }

  @Input() pageType: string;
  @Input() studentPairs: any[];

  ngOnInit() { }
}
