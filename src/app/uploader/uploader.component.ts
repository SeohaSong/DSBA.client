import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from "@angular/router";

import { UtilsService } from '../_services/utils.service'

declare const firebase: any;
declare const db: any;
declare const tinymce: any;


@Component({
  selector: 'app-uploader',
  templateUrl: './uploader.component.html',
  styleUrls: ['./uploader.component.scss']
})
export class UploaderComponent implements OnInit {

  constructor(
    private http: HttpClient,
    private router: Router,
    private utilsService: UtilsService
  ) { }

  creating_title: string;
  creating_category = '';

  post_collection = db.collection("posts");

  ngOnInit() {
    this.utilsService.setEditor();
  }

  create_post() {
    let post = {view_count: 0, images: []};
    post['title'] = this.creating_title;
    post['category'] = this.creating_category;
    post['content'] = tinymce.activeEditor.getContent({format : 'raw'});
    let condition1 = !post['title'];
    let condition2 = !post['category'];
    let condition3 = post['content'] == "<p><br data-mce-bogus=\"1\"></p>";
    if( condition1 || condition2 || condition3 ) {
      alert('양식을 모두 채워주세요.');
    } else {
      post['writer'] = this.utilsService.get_username();
      let dt = new Date();
      let yyyy = ''+dt.getFullYear()
      let mm_ = dt.getMonth()+1
      let mm = ''+parseInt(mm_/10+'')+mm_%10;
      let dd_ = dt.getMonth()+1
      let dd = ''+parseInt(dd_/10+'')+dd_%10;
      let hh_ = dt.getHours()+1
      let hh = ''+parseInt(hh_/10+'')+hh_%10;
      let mM_ = dt.getMinutes()+1
      let mM = ''+parseInt(mM_/10+'')+mM_%10;
      let ss_ = dt.getSeconds()+1
      let ss = ''+parseInt(ss_/10+'')+ss_%10;
      let date = yyyy+'.'+mm+'.'+dd+' '+hh+':'+mM+':'+ss;
      post['date'] = date;
      this.post_collection.doc().set(post);
      this.router.navigate(['board', post['category']]);
    }
  }

  upload_all_local_data () {
    let post_collection = this.post_collection;
    post_collection.get().then(data => {
      data.forEach(post => {
        post_collection.doc(post.id).delete()
        .then(data => console.log('delete success'))
        .catch(error => console.log('delete fail'));
      });
    }).then(() => {
      let posts: any;
      this.http.get('assets/db/post.json')
      .subscribe((data => {
        posts = data;
        for (let i=0; i < posts.length; i++) {
          let post = posts[i];
          delete post['thumbnail'];
          delete post['id'];
          let date = post.date;
          let yyyy = date.slice(0, 4);
          let mm = date.slice(4, 6);
          let dd = date.slice(6, 8);
          let hh = date.slice(8, 10);
          let mM = date.slice(10, 12);
          let ss = date.slice(12, 14);
          post.date = yyyy+'.'+mm+'.'+dd+' '+hh+':'+mM+':'+ss;
          post.view_count = parseInt(post.view_count);
          if (post.images.length) post.images = [post.images[0]];
          post_collection.doc().set(post)
          .then(data => console.log('create success'))
          .catch(error => console.log('create fail'));
        }
      }).bind(this));
    });
  }

}
