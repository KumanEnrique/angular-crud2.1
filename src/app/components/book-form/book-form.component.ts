import { Component, OnInit } from '@angular/core';

import {BooksService} from '../../services/books.service'
import {Book} from '../../models/book'

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent implements OnInit {

  constructor(public booksService:BooksService) { }

  ngOnInit() {
  }

  addBook(title:HTMLInputElement,editorial:HTMLInputElement,author:HTMLInputElement,ISBN:HTMLInputElement,year:HTMLInputElement,genre:HTMLInputElement){
    // console.log(title.value,editorial.value,author.value,ISBN.value,year.value,genre.value)
    this.booksService.addBook(title.value,editorial.value,author.value,ISBN.value,year.value,genre.value)
    title.value = ""
    editorial.value = ""
    author.value = ""
    ISBN.value = ""
    year.value = ""
    genre.value = ""
    title.focus()
    return false
  }
}
