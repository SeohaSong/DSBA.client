import { Component } from '@angular/core';

import { DisplayService } from './_services/display.service'
import { UtilsService } from './_services/utils.service'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    private displayService: DisplayService,
    private utilsService: UtilsService,
  ) { }

  title = 'app';
  categories: any[];
  uid: any;

  ngOnInit() {
    this.displayService.init_display();
    this.categories = this.utilsService.get_categories();

    let func = this.utilsService.set_auth;
    this.utilsService.limitToBrowser(func, this.utilsService, [this]);
  }

  sign_in() {this.utilsService.sign_in(this)}
  sign_out() {this.utilsService.sign_out(this)}

}
