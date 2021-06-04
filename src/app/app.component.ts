import { Component, OnInit } from '@angular/core';
import { BooksService } from './services/books.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  booksArray = []
  constructor(public bookService:BooksService) { }
  
  ngOnInit() {
    this.booksArray = this.bookService.books
  }
}
