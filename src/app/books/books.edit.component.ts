import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
import {BooksService} from './services/books.service'
import {Book} from  './books.detail.component'
@Component({
  selector: 'book-edit',
  templateUrl: './books.edit.component.html'
})

export class BooksEditComponent {

  book:Book;
  constructor(private router: Router, activatedRoute: ActivatedRoute,private booksService: BooksService) {
    this.book = {
      "title":"",
      "detail":"",
      "description":""
    };
    let id = activatedRoute.snapshot.params['id'];
    if(id !== "new"){
      console.log(id);
      booksService.getBook(id).subscribe(
        book=> this.book = book);
    }else{
      this.book = {
        "title":"",
        "detail":"",
        "description":""
      }
    }
  }

  saveBook(){
    this.booksService.setBook(this.book).subscribe((ok)=>this.router.navigate(['/books']))
  }


}
