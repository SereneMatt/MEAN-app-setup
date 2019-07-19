import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  apiURL = '/api/blogs/';

  constructor(private httpClient: HttpClient) { }

  postBlog(blogObj) {
    return this.httpClient.post(`${this.apiURL}`, blogObj);
  }
}
