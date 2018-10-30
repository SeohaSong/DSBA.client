import { Component } from '@angular/core'

import { DisplayService } from './_services/display.service'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    private displayService: DisplayService
  ) { }

  title = 'app'
  categories: any[]
  uid: any

  signIn: Function
  signOut: Function


  ngOnInit() {
    this.displayService.startApp(this)
  }

}
