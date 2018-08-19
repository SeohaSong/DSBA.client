import { Component, Inject } from '@angular/core';
import { Router } from "@angular/router";

import { DisplayService } from './_services/display.service'
import { UtilsService } from './_services/utils.service'


declare const firebase: any;
declare const storage: any;
declare const auth: any;
declare const db: any;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    private displayService: DisplayService,
    private utilsService: UtilsService,
    private router: Router
  ) { }

  title = 'app';
  categories: any[];
  uid = storage.getItem('uid');

  ngOnInit() {
    this.displayService.init_display()
    this.categories = this.utilsService.get_categories();
    auth.onAuthStateChanged((user) => {
      if (user) {
        let email = user.email
        let uid = user.uid
        storage.setItem('email', email);
        storage.setItem('uid', uid);
        this.uid = storage.getItem('uid');
        db.collection('users').doc(uid).set({email: email, state: 0})
        .then(data => console.log('신규 가입되었습니다.'))
        .catch(error => console.log('기존 사용자입니다.'));
        console.log(email)
      } else {
        storage.removeItem('email');
        storage.removeItem('uid');
        this.uid = storage.getItem('uid');
        console.log('비회원입니다.')
      }
    });
  }

  sign_in() {
    let provider = new firebase.auth.GoogleAuthProvider();
    auth.languageCode = 'ko-KR';
    this.uid = storage.setItem('uid', 'pendding');
    auth.signInWithRedirect(provider);
  }
  sign_out() {
    auth.signOut()
    this.router.navigate(['main'])
  }

}
