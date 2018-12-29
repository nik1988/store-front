import {Component, OnInit} from '@angular/core';
import {User} from "../model/user";
import {UserService} from "../services/user.service";

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {

  datafetched: boolean;

  selectProfileTab: number;
  userNameExists: boolean;
  currentPassword: string;
  emailExists: boolean;
  txtNewPassword: string;
  txtConfirmPassword: string;
  anonymousUser: boolean = false;
  serverPath:string = "";

  errorMessage: string = "";
  updateError: boolean;

  user: User = new User();

  constructor(private userService: UserService) {
  }

  ngOnInit() {

    this.userService.getCurrentUser().subscribe(
      (user: User) => {
        this.user = user
        if (user == null) {
          this.anonymousUser = true;
          console.log("anonymous user");
        }
      })

  }

  onUpdateUserInfo() {


    this.datafetched = false;
    this.updateError = false;

    this.user.password = this.currentPassword;
    this.userService.updateUser(this.user, this.txtNewPassword).subscribe(
      (response) => {
        this.datafetched = true;
      },
      (error) => {

        console.log("error while updating user data");

        let errormessage = error.error;

        this.updateError = true;

        if (errormessage === 'incorrectPassword') {
          this.errorMessage = "Incorrect Password !! Please enter correct password to update user details.";
        }

        if (errormessage === 'emailNotFound') {
          this.errorMessage = "Incorrect Email address !! Please enter correct email to update user details.";
        }

        if (errormessage === 'userNameNotFound') {
          this.errorMessage = "Incorrect UserName!! Please enter correct username";
        }

      }
    )


  }

}
