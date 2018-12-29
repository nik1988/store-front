import { Injectable } from '@angular/core';
import {AppConst} from "../constants/app-const";
import {HttpClient, HttpHeaders, HttpResponse} from "@angular/common/http";
import {User} from "../model/user";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private serverPath:string = AppConst.serverPath;

  constructor(private httpClient:HttpClient) { }

   header:HttpHeaders = new HttpHeaders().set('x-auth-token',localStorage.getItem("token"))


  newUser(username:string,email:string){

    let url = this.serverPath+"/user/newUser";

    let userInfo = {
      'username': username,
      'email':email

    }

    return this.httpClient.post(url,userInfo,{
      responseType:'text',
      'headers':this.header
    });

  }

  retrievePassword(email:string){

    let url = this.serverPath+"/user/forgotPassword";

    let userInfo = {
      'email':email
    }

    return this.httpClient.post(url,userInfo,{
      responseType:'text',
      'headers':this.header
    });

  }


  getCurrentUser(){

    let url = this.serverPath+"/user/getCurrentUser";



    return this.httpClient.get<User>(url,{

      'headers':this.header

    });

  }

  updateUser(user:User,newPassword:string){

    let userinfo = {

      'id':user.id,
      'email':user.email,
      'firstname':user.firstName,
      'lastname':user.lastName,
      'newpassword':newPassword,
      'currentpassword':user.password,
      'username':user.username

    }

    let url = AppConst.serverPath +"/user/updateUserInfo";

    return this.httpClient.post(url,userinfo,{
      'responseType':'text'

    });

  }


}


