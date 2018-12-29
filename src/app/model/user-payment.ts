import {UserBilling} from "./user-billing";

export class UserPayment {

  public id:number;
  public type:string;
  public cardName:string;
  public cardNumber:string;
  public expiryMonth:string;
  public expiryYear:string;
  public cvc:string;
  public holderName:string;
  public defaultPayment:string;
  public userBilling:UserBilling;

}
