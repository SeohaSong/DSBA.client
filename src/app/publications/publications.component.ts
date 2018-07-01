import { Component, OnInit } from '@angular/core';

import { DisplayService } from "../_services/display.service";
import { UtilsService } from "../_services/utils.service";


@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.scss']
})
export class PublicationsComponent implements OnInit {

  pubs: any[];

  constructor(
    private displayService: DisplayService,
    private utilsService: UtilsService,
  ) { }

  ngOnInit() {
    this.displayService.set_publications_display();
    this.pubs = this.utilsService.get_publications();
  }

}
