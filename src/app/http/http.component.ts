import { Component, OnInit } from '@angular/core';
import { Data, HttpService } from '../services/http-service';


@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent implements OnInit {

  data: Data[] = [];
  postTitle = ''

  constructor(private httpService: HttpService) { 

  }

  ngOnInit(): void {
    this.httpService.onGet()
      .subscribe({
        next: response => {
          this.data = response;
          console.log(this.data)
        },
        error: error => {
          console.log(error.message);
        }
      })
  }

  onAdd() {
    if (!this.postTitle.trim()) {
      return
    }

    this.httpService.onAdd({
      title: this.postTitle,
      completed: false,
    }).subscribe(post => {
      console.log(post)
      this.data.push(post)
      this.postTitle = ''
    })
  }

  completeTodo(id: number) {
    this.httpService.onChange(id)
      .subscribe({
        next: post => {
          post.completed = true
          console.log(post)
        },
        error: error => {
          console.log(error.message);
          
        }
      })
  }

}
