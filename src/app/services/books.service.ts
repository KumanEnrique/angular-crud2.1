import { Injectable } from '@angular/core';

import {Book} from '../models/book'

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  books:Book[] = []
  constructor() {
  }
  addBook(title,editorial,author,ISBN,year,genre){
    let newBook = new Book()
    newBook.title = title
    newBook.editorial = editorial
    newBook.author = author
    newBook.year = year
    newBook.genre = genre
    newBook.ISBN = ISBN
    newBook.id = this.books.length + 1
    newBook.show = false
    this.books.push(newBook)
    // console.log("service",this.books)
  }
  deleteBook(booktoDelete:Book){
    for(let i = 0;i < this.books.length;i++){
      if(booktoDelete.id == this.books[i].id){
        this.books.splice(1,1)
      }
    }
    /* let newBooks = this.books.filter((book) => book.id != booktoDelete.id)
    this.books = newBooks
    console.log("newBooks",newBooks) */
    // console.log("books",this.books)
  }
  updateBook(bookToUpdate){
    for(let i = 0;i < this.books.length;i++){
      if(bookToUpdate.id == this.books[i].id){
        // console.log("books",bookToUpdate)
        console.log("service",this.books[i])
        bookToUpdate.show = false
        this.books[i] = bookToUpdate
        console.log("service",this.books)
      }
    }
  }
}
