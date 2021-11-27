import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { CategoryService } from '../../../services/category.service'

import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  constructor(
    private CategoryService:CategoryService
  )
  { }
  categories:any;
  selectedProducts:any;

  displayBasic:boolean;

  ngOnInit(): void {
    this.CategoryService.getAll().subscribe((res:any)=>{
      this.categories = res
    })
  }

  categoryForm = new FormGroup({
    name: new FormControl(''),
    description: new FormControl(''),
    imagePath: new FormControl('')
  });

  open(){
    this.displayBasic = true;
  }

  createCategory(){
    this.CategoryService.createCategory(this.categoryForm.value).subscribe(async (res:any)=>{
      await this.categories.push(res)
      this.displayBasic = false;
      this.categoryForm.reset()
    })
  }

  delete(id){
    this.CategoryService.deleteCategory(id).subscribe((res)=>{
      this.categories.splice(this.categories.findIndex(e => e.id === id), 1)
    })
  }

}
