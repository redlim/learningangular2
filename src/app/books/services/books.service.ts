import { Injectable } from '@angular/core'
import { Http, Response } from '@angular/http'
import 'rxjs/Rx';

@Injectable()
export class BooksService{

  constructor(private http:Http){}

  private url = "http://127.0.0.1:8080/books/";

  getBooks(){
    return this.http.get(this.url).map(
      response => response.json()
    )
  }
  getBook(id){
    return this.http.get(this.url+id).map(
      response => response.json()
    )
  }

  setBook(data){
    return this.http.post(this.url,data).map(
      response => response
    )
  }
  modifyBook(item){
    return this.http.put(this.url+item.id,item).map(
      response => response
    )
  }
  deleteItem(item){
    return this.http.delete(this.url+item.id).map(
      response => response
    )
  }

}
