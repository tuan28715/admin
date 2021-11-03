import { Component, OnInit } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl } from '@angular/forms';
import { AngularFireStorage } from '@angular/fire/storage'
import { map, finalize } from "rxjs/operators";
import { Observable } from 'rxjs';
import { DishService } from '../../../../services/dish.service';
import { CategoryService } from '../../../../services/category.service';
import { SupportService } from '../../../../services/support.service';
import { Dish } from 'src/app/models/dish';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-create-dish',
  templateUrl: './create-dish.component.html',
  styleUrls: ['./create-dish.component.scss'],
  providers: [NgbModalConfig, NgbModal,MessageService]
})
export class CreateDishComponent implements OnInit{

  constructor(
    config: NgbModalConfig, private modalService: NgbModal,
    private af:AngularFireStorage,
    private DishService:DishService,
    private CategoryService:CategoryService,
    private SupportService:SupportService,
    private messageService:MessageService
    ) {
    // customize default values of modals used by this component tree
    config.backdrop = 'static';
    config.keyboard = false;
  }
  categories:any
  ngOnInit(): void {
    this.CategoryService.getAll().then(res=>{
      // console.log(res)
      this.categories = res;
    });
  }

  dishForm = new FormGroup({
    name: new FormControl(''),
    price: new FormControl(''),
    description: new FormControl(''),
    type: new FormControl(''),
    status: new FormControl(''),
  });

  filePath: string[] = []; 
  Path: String;
  processFile(e){
    this.Path = e.target.files[0];
    const reader = new FileReader();
    reader.onload = () =>{
       this.filePath.push(reader.result as string);
    }
    reader.readAsDataURL((e.target as HTMLInputElement).files[0])
  }

  async onSubmit(){
    await this.SupportService.create(this.Path, 'dishes', this.dishForm.value);
    await this.modalService.dismissAll()
    await this.messageService.add({severity:'success', summary: 'Success', detail: 'Thêm thành công!'});
  }

  open(content) {
    this.modalService.open(content);
  }

}

