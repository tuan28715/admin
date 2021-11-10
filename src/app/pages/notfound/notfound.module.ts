import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotfoundRoutingModule } from './notfound-routing.module';
import { NotfoundComponent } from './notfound.component';
import { HomeModule } from '../../pages/home/home.module'
import { PageModule } from 'src/app/shared/pagemodule';


@NgModule({
  declarations: [
    NotfoundComponent
  ],
  imports: [
    CommonModule,
    NotfoundRoutingModule,
    HomeModule,
    PageModule
  ]
})
export class NotfoundModule { }
