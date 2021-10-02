import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { CrudComponent } from './crud/crud.component'
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'dishes', component: CrudComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
