import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {AppConst} from "../constants/app-const";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient:HttpClient) { }

  sendCredential(username:string,password:string){


    const url = AppConst.serverPath+"/token";
    const encoded = btoa(username+":"+password);

    let header = new HttpHeaders().set('Authorization','Basic '+encoded);

    header.append('Content-Type','application/x-www-form-urlencoded');

    return this.httpClient.get<Response>(url,{
      headers:header
    })

  }


  validateSession(){

  }

  logOut(){

  }

}


