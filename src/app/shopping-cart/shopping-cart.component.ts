import { Component, OnInit } from '@angular/core';
import {CartItem} from "../cart-item";
import {Book} from "../model/book";
import {ShoppingCart} from "../shopping-cart";
import {AppConst} from "../constants/app-const";
import {ShoppingCartService} from "../services/shoppingcart.service";

@Component({
  selector: 'shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  public selectedBook:Book;
  public cartItemList:CartItem[] = [];
  public cartItemNumber:number;
  public  shoppingCart:ShoppingCart = new ShoppingCart();
  public cartItemUpdated:boolean;
  public emptyCart:boolean;
  public notEnoughStock:number;

  public serverPath = AppConst.serverPath;

  constructor(private shoppingCartService:ShoppingCartService) { }

  ngOnInit() {

    this.shoppingCartService.fetchItemsFromCart().subscribe(

      (cartItemList:CartItem[]) => {

        this.cartItemList = cartItemList;
        console.log("cartitem list =");
        console.log(JSON.stringify(this.cartItemList));

      },

      (error) =>{console.log("error while fecthing cart item list" + error)}

    )
  }

  onSelectItem(item:any){

  }

  onRemoveCartItem(item:any){

  }
  onUpdateCartItem(item:any){

  }

}
