import { Injectable } from '@angular/core'
import { Http, Response } from '@angular/http'
import 'rxjs/Rx';

@Injectable()
export class ItemService{

  constructor(private http:Http){}

  private url = "http://127.0.0.1:8080/items/";

  getItems(){
    return this.http.get(this.url).map(
      response => this.setChecked(response.json())
    )
  }

  setChecked(data){
    for (let d of data) {
      d.checked = d.checked !== "false";
    }
    return data;
  }
  setItems(data){
    return this.http.post(this.url,data).map(
      response => response
    )
  }
  modifyItem(item){
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
