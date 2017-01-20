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
  title = "Sponge Bob";
  resultText: Task[]=[];
  inputText = "";

  setText(text:string){
    let obj :Task = {
      content:text,
      isSelected :false
    };
    this.resultText.push(obj);
    this.inputText = "";
  }
  deleteElement(index){
    this.resultText.splice(index,1);
  }
}
