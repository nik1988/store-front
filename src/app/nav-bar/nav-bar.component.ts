import { Component, OnInit } from '@angular/core';
import {LoginService} from "../services/login.service";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  searchTitle:string ="";
  loggedIn:boolean = false;

  constructor(private loginService:LoginService) {

    this.loginService.loggedIn.subscribe(

      (loginsuccess:boolean) =>{ this.loggedIn = loginsuccess }

    )
  /*  this.loginService.validateSession().subscribe(
      (response:any) =>{
        console.log(" validating session, session id ="+response.session);

        if(response.session != null ){
          this.loggedIn = true;
        }

      },
      (error) => {this.loggedIn = false;}

    )
*/

  }

  ngOnInit() {

    this.loginService.validateSession().subscribe(
      (response:any) =>{
        console.log(" validating session, session id ="+response.session);

        if(response.session != null ){
          this.loggedIn = true;
        }

        },
      (error) => {this.loggedIn = false;}

    )

  }

  onSearchByTitle(){

  }

  logout(){
    this.loggedIn = false;
  }




}
