import { Component } from '@angular/core';
import { Http} from '@angular/http';
import {BooksService} from './services/books.service';
import {Router } from '@angular/router'

@Component({
  selector: 'book-list',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})

export class BooksComponent {

  public constructor(private http : Http,private booksService:BooksService, private router:Router){}

  title = "Los Libracos";
  books=[];
  ngOnInit() { this.getBooks(); }

  getBooks(){
    this.booksService.getBooks().subscribe((items)=>this.books = items)
  }
  newBook(){
    this.router.navigate(['/edit/book/new']);
  }
  editBook(book){
    this.router.navigate(['/edit/book/'+book.id])
  }
  deleteBook(book){
    if (confirm('Estás seguro')) {
      this.booksService.deleteItem(book).subscribe((response)=>this.getBooks());

    }
  }


}
