import { Component, Input,Output, EventEmitter } from '@angular/core';

interface Task {
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
  @Input() position : number;
  @Output() deleteElement = new EventEmitter();

  deleteItem(position){
    this.deleteElement.emit(position)
  }
}
