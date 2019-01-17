import {Book} from "./model/book";
import {ShoppingCart} from "./shopping-cart";

export class CartItem {

  public cartItemId:number;
  public subtotal:number;
  public book:Book;
  public shoppinCart:ShoppingCart;
  public toUpdate:boolean;
  public qty:number;

}
