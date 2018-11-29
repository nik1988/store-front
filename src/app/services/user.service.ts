import { Injectable } from '@angular/core';
import {AppConst} from "../constants/app-const";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private serverPath:string = AppConst.serverPath;

  constructor(private httpClient:HttpClient) { }


  newUser(username:string,email:string){

    let url = this.serverPath+"/user/newUser";

    let userInfo = {
      'username': username,
      'email':email

    }

    return this.httpClient.post('url',userInfo);

  }

  retrievePassword(email:string){

    let url = this.serverPath+"/user/forgetPassword";

    let userInfo = {
      'email':email

    }

    return this.httpClient.post('url',userInfo);

  }


}


