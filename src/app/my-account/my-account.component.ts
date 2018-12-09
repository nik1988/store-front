import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AppConst} from "../constants/app-const";
import {LoginService} from "../services/login.service";
import {UserService} from "../services/user.service";
import {Router} from "@angular/router";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css']
})
export class MyAccountComponent implements OnInit {



  private serverPath = AppConst.serverPath;
  public loginError:boolean = false;
  private loggedIn:boolean = false;
  public credential = {'username':'','password':''};

  public emailSent:boolean = false;
  public userNameExists:boolean;
  public emailExists:boolean;

  public username:string;
  public email:string;

  public emailNotExists:boolean = false;
  public forgotPasswordEmailSent:boolean = false;
  public recoverEmail:string;

  //generate a login suucess event
  @Output() onLoginSucess = new EventEmitter<boolean>();


  constructor(private loginService:LoginService, private userService:UserService,private router:Router) {
  }


  ngOnInit() {
  }

  onLogin() {

    this.loginService.sendCredential(this.credential.username,this.credential.password).subscribe(
      (response:any) =>{
        console.log("login successfull");
        console.log(response);
        localStorage.setItem('token',response.token);
        this.loggedIn= true;
        this.loginService.emitLogInSuccess();
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
      (response) => {
        console.log("mail sent successfully");
        console.log(response);
        this.emailSent = true;
      },

      (error:HttpErrorResponse) =>{

        console.log("error = "+error.error);
        let errormessage = error.error;

        if(errormessage === "userNameExists") { //userNameExists
          this.userNameExists = true;
        }
        if(errormessage === "emailExists"){
          this.emailExists = true;
        }
      }

    )

}

  onForgetPassword(){

    console.log("request submitted");

    this.emailNotExists = false;

    this.userService.retrievePassword(this.recoverEmail).subscribe(

      (response) =>{
        console.log("password recovered successfully");
        this.forgotPasswordEmailSent = true;
      },
      (responseError) =>{

        console.log("error while recovering password");
        if(responseError.error === "emailNotExists"){
          this.emailNotExists = true;
        }
      }

    )
  }

}
