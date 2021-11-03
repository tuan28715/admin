import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { CategoryService } from '../../../services/category.service'

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  constructor(
    private CategoryService:CategoryService
  ) { }
  categories:Category[] = [];
  selectedProducts:any;
  ngOnInit(): void {
    this.CategoryService.getAll().then((res: Category[])=>{
      this.categories = res
    });
  }

}
