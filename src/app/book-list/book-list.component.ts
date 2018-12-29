import { Component, OnInit } from '@angular/core';
import {Book} from "../model/book";
import {BookService} from "../services/book.service";

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  constructor(private bookService:BookService) { }

  public filterQuery:string = "";
  public rowsOnPage = 5;
  public sortBy:string = "";
  public sortOrder:string = "";

  public selectedBook:Book;
  public bookList:Book[];

  public serverPath:string = "http://localhost:8282/image/book";


  ngOnInit() {

    this.bookService.getBookList().subscribe(

      (book:Book[]) => {
       // console.log("fetched book list = "+JSON.stringify(book))
        this.bookList = book;
      },
      (error) => {
        console.log("error fetching book list " + error);
      }

    )

  }

  onSelectBook(book:Book){

  }

}
