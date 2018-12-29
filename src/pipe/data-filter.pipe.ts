import {Pipe, PipeTransform} from "@angular/core";
import * as _ from "lodash";
import {Book} from "../app/model/book";

@Pipe(
  {
    name:"dataFilter"
  }
)
export class DataFilterPipe implements PipeTransform{

  transform(array:any,query:string):any
  {

    /*
     _.filter(myArr, function(o) {
    return o.name == 'john';
 });
     */

      if(query){

        console.log("data filter called");

        return _.filter(array,row=>row.description.indexOf(query) > -1);
       /* _.filter(array,function(book){

          return book.description.indexOf(query) > -1;

        })*/
      }

      return array;
  }

 }
