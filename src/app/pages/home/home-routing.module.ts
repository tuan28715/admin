import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { CategoryComponent } from './category/category.component';
import { UserComponent } from './user/user.component';
import { CrudComponent } from './dish/crud.component';
import { DashboardComponent } from './dashboard/dashboard.component';
const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children:[
      { path: '', canActivate:[], component: DashboardComponent},
      { path: 'dishes', canActivate:[], component: CrudComponent },
      { path: 'categories',canActivate:[], component: CategoryComponent},
      { path: 'users',canActivate:[], component: UserComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
