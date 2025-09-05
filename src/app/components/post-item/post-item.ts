import { Component, input } from '@angular/core';
import { Post } from '../../models/post.type';

@Component({
  selector: 'app-post-item',
  imports: [],
  templateUrl: './post-item.html',
  styleUrl: './post-item.css'
})
export class PostItem {
  post = input.required<Post>();
}
