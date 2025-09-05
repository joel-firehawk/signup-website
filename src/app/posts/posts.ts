import { Component, OnInit, signal } from '@angular/core';
import { UserService } from '../services/user-service';
import { PostService } from '../services/post-service';
import { Post } from '../models/post.type';
import { catchError } from 'rxjs';
import { PostItem } from "../components/post-item/post-item";

@Component({
  selector: 'app-posts',
  imports: [PostItem],
  templateUrl: './posts.html',
  styleUrl: './posts.css'
})
export class Posts implements OnInit{
  constructor(private userService: UserService, private postService: PostService) {}

  get isAuthenticated() {
    return this.userService._isAuthenticated ? true : false;
  }

  postItems = signal<Array<Post>>([]);

  ngOnInit(): void {
    this.postService.getUsersFromApi().pipe(
      catchError((err) => {
        console.log(err);
        throw err;
      })
    ).subscribe((response: any) => {
      this.postItems.set(response.data);
    })
  }
}
