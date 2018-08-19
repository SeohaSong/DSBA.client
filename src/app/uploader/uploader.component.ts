import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

declare const firebase: any;
declare const db: any;


@Component({
  selector: 'app-uploader',
  templateUrl: './uploader.component.html',
  styleUrls: ['./uploader.component.scss']
})
export class UploaderComponent implements OnInit {

  constructor(
    private http: HttpClient
  ) { }

  all_posts: any;

  ngOnInit() {
    this.http.get('assets/db/post.json').subscribe(
      ((data) => {
        this.all_posts = data;
      }).bind(this)
    );
  }

  upload_all_local_data () {
    let posts = this.all_posts;
    for (let i=0; i < posts.length; i++) {
      let post = posts[i]
      db.collection('posts').doc(post.id+'').set(post)
      .then(data => console.log(i+' success'))
      .catch(error => console.log(i+' fail'));
    }
  }

}
