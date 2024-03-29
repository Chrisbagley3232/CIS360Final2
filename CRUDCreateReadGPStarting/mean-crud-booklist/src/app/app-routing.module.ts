import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BooksListComponent } from './components/books-list/books-list.component';
import { AddCensusComponent } from './components/add-census/add-census.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'books-list' },
  { path: 'books-list', component: BooksListComponent },
  { path: 'add-census', component: AddCensusComponent},
  { path: '', pathMatch: 'full', redirectTo: 'delete-census/:id' },
  //{ path: '', pathMatch: 'full', redirectTo: 'update-census/:id' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
