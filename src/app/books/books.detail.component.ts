import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
import {BooksService} from './services/books.service'

export interface Book {
  id?:number,
  description:string,
  title:string,
  detail:string
}

@Component({
  selector: 'book-detail',
  templateUrl: './books.detail.component.html'
})

export class BookDetailComponent {

  book:Book;

  constructor(private router: Router, activatedRoute: ActivatedRoute, private booksService: BooksService) {

    let id = activatedRoute.snapshot.params['id'];

    booksService.getBook(id).subscribe(
        (book)=>
          this.book = book);

  }

  gotoBooks() {
    this.router.navigate(['/books']);
  }
  editBook(id){
    this.router.navigate(['/edit/book/'+id]);
  }
  deleteBook(book){
    if (confirm('Estás seguro')) {
      this.booksService.deleteItem(book).subscribe((response)=>this.gotoBooks());
    }
  }
}
