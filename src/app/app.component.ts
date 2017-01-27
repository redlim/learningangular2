import { Component } from '@angular/core';
import { Task } from './item.component';
import { Http } from '@angular/http'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  constructor(private http : Http){}

  emptyText = false;
  title = "Sponge Bob";
  resultText: Task[]=[];
  inputText = "";
  isLoading = true;

  private url = "http://127.0.0.1:8080/items/";
  ngOnInit() { this.getData(); }

  getData(){
    this.isLoading = true;
    this.http.get(this.url).subscribe(
      response => {
        this.isLoading = false;
        let data = response.json();
        for (let d of data) {
          d.checked = d.checked !== "false";
        }
        this.resultText = data;
      },
      error => console.error(error)
    )
  }

  saveData(data:Task){
    this.isLoading = true;
    this.http.post(this.url,data).subscribe(
      response=> {
        this.isLoading = false;
        console.log("okidoki"); this.inputText = ""},
      error => console.error(error)
    )
  }

  deleteData(i:Task){
    this.isLoading = true;
    this.http.delete(this.url+i.id).subscribe(
      response => {
        this.isLoading = false;
        console.log("okidoki")
      },
      error => console.error(error)
    )
  }

  modifyData(i:Task){
    this.isLoading = false;
    this.http.put(this.url+i.id,i).subscribe(
      response => {
        this.isLoading = false;
        console.log("okidoki")
      },
      error => console.error(error)
    )
  }

  setText(text:string){
    if(text.length === 0){
      this.emptyText = true;
    }else{
      this.emptyText = false;
      let obj :Task = {
        description:text,
        checked :false
      };
      this.saveData(obj);
      this.getData();
      this.inputText = "";
    }
  }
  deleteItem(item:Task){
    this.deleteData(item);
    this.getData();
  }

}
