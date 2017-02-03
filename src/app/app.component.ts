import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  // constructor(private http : Http,private itemService:ItemService){}

  emptyText = false;
  title = "Los Libracos";
  // resultText: Task[]=[];
  // inputText = "";
  // isLoading = true;
  //
  // ngOnInit() { this.getData(); }
  //
  // getData(){
  //   this.isLoading = true;
  //   this.itemService.getItems().subscribe(
  //     items => {
  //       this.resultText = items;
  //       this.isLoading = false
  //     }
  //   )
  // }
  //
  // saveData(data:Task){
  //   this.isLoading = true;
  //   this.itemService.setItems(data).subscribe(
  //     response => this.getData()
  //   )
  //
  // }
  //
  // deleteData(i:Task){
  //   this.isLoading = true;
  //   this.itemService.deleteItem(i).subscribe(
  //     response => this.getData()
  //   )
  // }
  //
  // modifyData(i:Task){
  //   this.isLoading = true;
  //   this.itemService.modifyItem(i).subscribe(
  //     response => this.getData()
  //   )
  // }
  //
  // setText(text:string){
  //   if(text.length === 0){
  //     this.emptyText = true;
  //   }else{
  //     this.emptyText = false;
  //     let obj :Task = {
  //       description:text,
  //       checked :false
  //     };
  //     this.saveData(obj);
  //     this.inputText = "";
  //   }
  // }
  // deleteItem(item:Task){
  //   this.deleteData(item);
  // }

}
