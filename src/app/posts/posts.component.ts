import { Component, OnInit } from '@angular/core';
import { Post } from '../app.component';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  search: string = ''

  posts: Post[] = [
    {title: 'Учу Angular', text: 'Прикольно', id: 1},
    {title: 'Заголовок 2', text: 'Пост 2 вот такой здесь текст', id: 2}
  ]

  constructor() { }

  ngOnInit(): void {
  }


  updatePosts(post: Post) {
    this.posts.unshift(post)
  }

  updateSearch(search: string) {
    this.search = search;
  }

}
