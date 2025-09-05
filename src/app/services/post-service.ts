import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Post } from '../models/post.type';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  http = inject(HttpClient);

  getUsersFromApi() {
    const url = `http://localhost:3000/posts`;
    return this.http.get<{ data: Array<Post> }>(url);
  }

  addPost(formData: FormData) {
    const url = `http://localhost:3000/posts`;
    return this.http.post<{ message: string }>(url, formData);
  }
}
