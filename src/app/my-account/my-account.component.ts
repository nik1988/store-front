import { Component, OnInit } from '@angular/core';
import {AppConst} from "../constants/app-const";
import {LoginService} from "../services/login.service";
import {UserService} from "../services/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css']
})
export class MyAccountComponent implements OnInit {



  private serverPath = AppConst.serverPath;
  private loginError:boolean = false;
  private loggedIn:boolean = false;
  public credential = {'username':'','password':''};

  private emailSent:boolean = false;
  private userNameExists:boolean;
  private emailExists:boolean;

  private username:string;
  private email:string;

  private emailNotExists:boolean = false;
  private forgotPasswordEmailSent:boolean;

  constructor(private loginService:LoginService, private userService:UserService,private router:Router) {
  }


  ngOnInit() {
  }

  onLogin() {

    this.loginService.sendCredential(this.credential.username,this.credential.password).subscribe(
      (response:any) =>{
        console.log(response);
        localStorage.setItem('token',response.token);
        this.loggedIn= true;
        this.router.navigate(['/home']);

      },
      (error) =>{
        this.loggedIn = false;
        this.loginError = true;
        console.log(error);
      }
   );

}


onNewAccount(){

    this.userNameExists = false;
    this.emailExists = false;
    this.emailSent = false;

    this.userService.newUser(this.username,this.email).subscribe(
      (resposne) => {

        console.log(resposne);
        this.emailSent = true;
      },

      (error) =>{

        console.log("error");
        let errormessage = error.text();
        if(errormessage = "usernameExists") this.userNameExists = true;
        if(errormessage = "emailExists") this.emailExists = true;
      }

    )

}

}
