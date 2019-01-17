import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {Book} from "../model/book";
import {AppConst} from "../constants/app-const";
import {BookService} from "../services/book.service";
import {ShoppingCartService} from "../services/shoppingcart.service";

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {

  constructor(private route:ActivatedRoute,
              private router:Router,
              private bookService:BookService,
              private shoppingCartService:ShoppingCartService) {

  }

  public book:Book = new Book();
  private bookId:number;
  public serverPath = AppConst.serverPath;
  public numberList:number[] =[1,2,3,4,5,6,7,8,9];
  public qty:number = 1;
  addBookSuccess:boolean;
  notEnoughStock:boolean;

  ngOnInit() {

    this.route.params.forEach((params:Params) => {

      this.bookId  = Number.parseInt(params['id']);

    })
    //console.log("book detail id = "+this.route.snapshot.params.id);

    this.bookService.getBookById(this.bookId).subscribe(

      (book:Book) => {
        this.book = book},

      (error) => {console.log("error fetching book" +error);}

    )

  }

  onAddToCart(){

    this.addBookSuccess = false;
    this.notEnoughStock = false;

    this.shoppingCartService.addItemToCart(this.qty,this.bookId).subscribe(

      (response) => {
        console.log("item added to cart")
        this.addBookSuccess = true;
      },
      (error) => {console.log("failed to add item to cart")

            if(error.error == "NoStock"){

                this.notEnoughStock = true;

            }

      }

    )

  }

}


