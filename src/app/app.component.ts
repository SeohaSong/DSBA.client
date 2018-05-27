import { Component, Inject } from '@angular/core';

import { DisplayService } from './_services/display.service'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    private displayService: DisplayService,
  ) { }

  title = 'app';

  ngOnInit() {
    this.displayService.set_default_display()
  }

}
