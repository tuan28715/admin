import { Component, OnInit } from '@angular/core';
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
  categories:any;
  selectedProducts:any;
  ngOnInit(): void {
    this.CategoryService.getAll().then(res=>{
      this.categories = res
      console.log(res);
    });
  }

}
