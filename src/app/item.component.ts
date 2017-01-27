import { Component, Input,Output, EventEmitter } from '@angular/core';

export interface Task {
  content:string,
  isSelected:boolean
}

@Component({
  selector: 'my-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {

  @Input() task:Task;
  @Output() deleteElement = new EventEmitter<Task>();

  deleteItem(){
    this.deleteElement.emit()
  }
}
