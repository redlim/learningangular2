import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ItemComponent } from './item.component';
import {ItemService} from "./services/item.service";
import {BooksService} from "./books/services/books.service";

import {BooksComponent} from './books/books.component'
import {BooksEditComponent} from './books/books.edit.component'
import {BookDetailComponent} from './books/books.detail.component'
import {routing} from "./app.routing";


@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    BookDetailComponent,
    BooksComponent,
    BooksEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [ItemService,BooksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
