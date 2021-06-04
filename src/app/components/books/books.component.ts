import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book';

import {BooksService} from '../../services/books.service'

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  booksArray = []
  editingBook:Book
  constructor(public bookService:BooksService) { }
  
  ngOnInit() {
    this.booksArray = this.bookService.books
  }

  deleteBook(book:Book){
    // console.log("nose",book)
    this.bookService.deleteBook(book)
  }
  editBook(book:Book){
    this.editingBook= book
    book.show = !book.show
  }
  updateBook(){
    this.bookService.updateBook(this.editingBook)
  }
}
