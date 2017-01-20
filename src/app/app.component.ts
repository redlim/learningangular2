import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "Sponge Bob";
  resultText = [];
  inputText = "";
  setText(text:string){
    this.resultText.push(text);
    this.inputText = "";
  }
  deleteElement(index){
    this.resultText.splice(index,1);
  }
}
