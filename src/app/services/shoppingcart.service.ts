import {AppConst} from "../constants/app-const";
import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {CartItem} from "../cart-item";

@Injectable({
  providedIn:'root'
})

export class ShoppingCartService {


  constructor(private httpClient:HttpClient){

  }

  addItemToCart(qty:number,bookId:number){

    let url = AppConst.serverPath+'/cart/addItem';

    return this.httpClient.post(url,{'qty':qty,'bookId':bookId},{

      responseType:'text'

    })
  }

  fetchItemsFromCart(){

    let url = AppConst.serverPath+'/cart/getCartItemList';

    return this.httpClient.get<CartItem[]>(url);

  }


}
