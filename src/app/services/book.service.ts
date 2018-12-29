import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Book} from "../model/book";
import {AppConst} from "../constants/app-const";

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private httpClient:HttpClient) { }

  getBookList() {

    let serverUrl = AppConst.serverPath;

    const getBookUrl = serverUrl+"/book/viewBookList";

    return this.httpClient.get<Book[]>(getBookUrl);
  }


}
