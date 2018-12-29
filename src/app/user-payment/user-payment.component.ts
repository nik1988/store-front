import { Component, OnInit } from '@angular/core';
import {UserPayment} from "../model/user-payment";
import {UserBilling} from "../model/user-billing";
import {PaymentService} from "../services/payment.service";

@Component({
  selector: 'user-payment',
  templateUrl: './user-payment.component.html',
  styleUrls: ['./user-payment.component.css']
})
export class UserPaymentComponent implements OnInit {

  stateList:string[] = ['Florida','Pennsylvenia','MasaChussets','Texas'];
  cardList:string[] = ['Visa','MasterCard','Discover','American Express']

  cardDetailsList:UserPayment[];

  selectedBillingTab:number;
  updateUserPaymentInfo:boolean;

   userPayment:UserPayment = new UserPayment();
   userBilling:UserBilling = new UserBilling();



  constructor(private userPaymentService:PaymentService) { }

  ngOnInit() {
    this.fetchAddedCards();

  }



  selectedBillingChange(event:any){

    console.log("selected billing change event called ");

    if(event == 0){
      this.fetchAddedCards();
    }
  }

  setDefaultPayment(){

  }

  onNewPayment(){

    //made default payment as true for now.
    this.userPayment.defaultPayment = 'true';
    this.userPayment.userBilling = this.userBilling;

    // add new credit card and billing details

    this.userPaymentService.newPayment(this.userPayment).subscribe(

      (response) => {
        console.log(response);
        this.selectedBillingTab = 0;

      },
      (error) => {
        console.log(error);
      }

    )

  }

  fetchAddedCards(){

    this.userPaymentService.fetchCardDetails().subscribe(

      (cardDetailList:UserPayment[]) => {

        console.log("card details ="+JSON.stringify(cardDetailList));
        this.cardDetailsList = cardDetailList;

      }

    );

  }

  deletePayment(payment:UserPayment){

//    console.log(this.cardDetailsList.indexOf(payment));


   this.userPaymentService.removePayment(payment).subscribe(

      (response) => {

        console.log("payment removed successfully");

        this.cardDetailsList.splice(this.cardDetailsList.indexOf(payment),1);

      },
     (error) => {
        console.log("error while deleting payment" +error);

     }

    )

  }

  editCardDetails(card:UserPayment){

    console.log("edit card details called selectedBilingChange = " +this.selectedBillingTab);


    this.userPayment = card;
    this.userBilling = card.userBilling;
    this.selectedBillingTab = 1;

  }

}
