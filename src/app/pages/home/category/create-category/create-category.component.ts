import { Component, OnInit } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl } from '@angular/forms';
import { AngularFireStorage } from '@angular/fire/storage'
import { map, finalize } from "rxjs/operators";
import { Observable } from 'rxjs';
import { CategoryService } from '../../../../services/category.service';
import { SupportService } from '../../../../services/support.service';
@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.scss'],
  providers: [NgbModalConfig, NgbModal]
})
export class CreateCategoryComponent implements OnInit {

  constructor(
    config: NgbModalConfig, private modalService: NgbModal,
    private af:AngularFireStorage,
    private CategoryService:CategoryService,
    private SupportService:SupportService
  ) { 
    config.backdrop = 'static';
    config.keyboard = false;
  }

  categoryForm = new FormGroup({
    name: new FormControl(''),
    description: new FormControl(''),
  })

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

  ngOnInit(): void {
  }

  async onSubmit(){
    await this.SupportService.uploadImage(this.Path, "Categories");
    setTimeout(()=>{
      let imagePath = this.SupportService.fb
      const body = {
        ...this.categoryForm.value,
        imagePath:imagePath
      }
      this.CategoryService.createCategory(body);
    },4000)
  
  }

  open(content) {
    this.modalService.open(content);
  }

}
