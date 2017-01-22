import { Component } from '@angular/core';

interface Task {
  content:string,
  isSelected:boolean
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  emptyText = false;
  title = "Sponge Bob";
  resultText: Task[]=[];
  inputText = "";

  setText(text:string){
    if(text.length === 0){
      this.emptyText = true;
    }else{
      this.emptyText = false;
      let obj :Task = {
        content:text,
        isSelected :false
      };
      this.resultText.push(obj);
      this.inputText = "";
    }
  }
  deleteItem(item:number){
    console.log(item);
    this.resultText.splice(item,1)
  }
}
