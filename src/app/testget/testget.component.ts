import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpParams, HttpResponse} from '@angular/common/http';
import {Post} from './post.model';

@Component({
  selector: 'app-testget',
  templateUrl: './testget.component.html',
  styleUrls: ['./testget.component.styl']
})
export class TestgetComponent implements OnInit {

  constructor(private http: HttpClient) {}
  public response: Post[] = [];
  API_URL = 'https://jsonplaceholder.typicode.com/posts';
  ngOnInit(): void {}

  getData(): void {
    this.http.get<Post[]>(this.API_URL, {observe: 'body', params: {userId : '2'}})
      .subscribe((value) => {
      this.response = value || [];
      console.log(value);
    });
    // this.http.get<Post[]>(this.API_URL, {observe: 'body'}).subscribe((value) => {
    //   this.response = value;
    //   console.log(this.response);
    // });
  }
}
