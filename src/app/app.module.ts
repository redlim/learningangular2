import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ItemComponent } from './item.component';
import {ItemService} from "./services/item.service";
import {BooksService} from "./books/services/books.service";
import {HeaderComponent} from './header/header.component'
import {BooksComponent} from './books/books.component'
import {BooksEditComponent} from './books/books.edit.component'
import {BookDetailComponent} from './books/books.detail.component'
import {routing} from "./app.routing";
import { MaterialModule } from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    BookDetailComponent,
    BooksComponent,
    BooksEditComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    MaterialModule.forRoot()
  ],
  providers: [ItemService,BooksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
