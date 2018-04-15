import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';

import { Component, Inject } from '@angular/core';

declare const App: any;
declare const StyleSwitcher: any;
declare const $: any;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  title = 'app';

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      App.init();
      StyleSwitcher.initStyleSwitcher();
      $(window).load(() => {
        $("#loading-ui").fadeOut();
      })
    }
  }

}
