import { Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {

  @Output() onSearch: EventEmitter<string> = new EventEmitter<string>()

  search = '';

  constructor() { }

  ngOnInit(): void {
  }

  startSearch() {

    this.onSearch.emit(this.search)
  }

}
