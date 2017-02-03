import { Routes, RouterModule } from '@angular/router';
import { BooksComponent } from './books/books.component';
import { BookDetailComponent } from './books/books.detail.component';
import { BooksEditComponent } from './books/books.edit.component';

const appRoutes = [
  { path: 'book/:id', component: BookDetailComponent,  },
  { path: 'books', component: BooksComponent },
  { path: 'edit/book/:id', component: BooksEditComponent },
  { path: '', redirectTo: 'books', pathMatch: 'full' }
]
export const routing = RouterModule.forRoot(appRoutes);
