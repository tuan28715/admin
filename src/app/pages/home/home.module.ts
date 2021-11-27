import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { MaterialModule } from '../../shared/material-module';
import { CrudComponent } from './dish/crud.component'

import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';
import {TableModule} from 'primeng/table';
import {ToastModule} from 'primeng/toast';
import {CalendarModule} from 'primeng/calendar';
import {SliderModule} from 'primeng/slider';
import {MultiSelectModule} from 'primeng/multiselect';
import {ContextMenuModule} from 'primeng/contextmenu';
import {DialogModule} from 'primeng/dialog';
import {DropdownModule} from 'primeng/dropdown';
import {ProgressBarModule} from 'primeng/progressbar';
import {FileUploadModule} from 'primeng/fileupload';
import {ToolbarModule} from 'primeng/toolbar';
import {RatingModule} from 'primeng/rating';
import {RadioButtonModule} from 'primeng/radiobutton';
import {InputNumberModule} from 'primeng/inputnumber';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import {PanelMenuModule} from 'primeng/panelmenu';
import { CreateDishComponent } from './dish/create-dish/create-dish.component';
import { UpdateDishComponent } from './dish/update-dish/update-dish.component';
import { UpdateCategoryComponent } from './category/update-category/update-category.component';
import { CreateCategoryComponent } from './category/create-category/create-category.component';
import { UpdateUserComponent } from './user/update-user/update-user.component';
import { PageModule } from '../../shared/pagemodule'
import { UserComponent } from './user/user.component';
import { CategoryComponent } from './category/category.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from '../../shared/sidebar/login/login.component'
import { RegisterComponent } from '../../shared/sidebar/register/register.component';
import { CategoryDetailComponent } from './category/category-detail/category-detail.component';
@NgModule({
  declarations: [
    HomeComponent,
    CrudComponent,
    CreateDishComponent,
    UpdateDishComponent,
    CategoryComponent,
    UserComponent,
    UpdateCategoryComponent,
    CreateCategoryComponent,
    UpdateUserComponent,
    DashboardComponent,
    LoginComponent,
    RegisterComponent,
    CategoryDetailComponent,
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    HomeRoutingModule,
    MenubarModule,
    InputTextModule,
    ButtonModule,
    MaterialModule,
    TableModule,
    CalendarModule,
		SliderModule,
		DialogModule,
		MultiSelectModule,
		ContextMenuModule,
		DropdownModule,
		ButtonModule,
		ToastModule,
    InputTextModule,
    ProgressBarModule,
    HttpClientModule,
    FileUploadModule,
    ToolbarModule,
    RatingModule,
    RadioButtonModule,
    InputNumberModule,
    ConfirmDialogModule,
    InputTextareaModule,
    NgbPaginationModule,
    NgbAlertModule,
    PanelMenuModule,
    PageModule
  ],
  providers:[MessageService, ConfirmationService],
  exports:[

  ]
})
export class HomeModule { }
