import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {UserPayment} from "../model/user-payment";
import {AppConst} from "../constants/app-const";

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private httpClient:HttpClient) { }

  newPayment(payment:UserPayment){

    let url = AppConst.serverPath +'/payment/addCreditCard';

    let tokenHeader = new HttpHeaders().set('x-auth-token',localStorage.getItem('token'));

    return this.httpClient.post(url,payment,{
      headers:tokenHeader,
      responseType:'text'
    });

  }

  fetchCardDetails(){

    let url = AppConst.serverPath +'/payment/getUserPaymentList';

    return this.httpClient.get<UserPayment[]>(url);
  }


  removePayment(payment:UserPayment){

    let url = AppConst.serverPath +'/payment/removePaymentMethod';

    return this.httpClient.post(url,payment,{
      responseType:'text'
    });
  }

}
