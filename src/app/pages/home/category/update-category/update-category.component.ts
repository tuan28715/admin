import { Component, Input, OnInit } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Category } from 'src/app/models/category';
import { CategoryService } from '../../../../services/category.service';
import { SupportService } from '../../../../services/support.service';

@Component({
  selector: 'app-update-category',
  templateUrl: './update-category.component.html',
  styleUrls: ['./update-category.component.scss'],
  providers: [NgbModalConfig, NgbModal]

})
export class UpdateCategoryComponent  {

  @Input() category: Category;
  constructor(
    config: NgbModalConfig,
    private modalService: NgbModal,
    private CategoryService:CategoryService,
    private SupportService:SupportService
  ) { 
    config.backdrop = 'static';
    config.keyboard = false;
  }

  open(content) {
    this.modalService.open(content, { size: 'lg' });
  }

  Path: string;
  processFile(e){
    this.Path = e.target.files[0];
  }

  async save(){
    if(!this.Path){
        this.CategoryService.updateCategory(this.category)
    }else{
      await this.SupportService.uploadImage(this.Path, "Update Category");
      setTimeout(async ()=>{
        const body = {
          ...this.category,
          imagePath:this.SupportService.fb
        }
        console.log(body);
        this.CategoryService.updateCategory(body)
      },4000)
    }
  }

}
