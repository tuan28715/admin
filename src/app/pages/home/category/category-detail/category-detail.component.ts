import { Component, OnInit, Input } from '@angular/core';
import { CategoryService } from '../../../../services/category.service'
@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.scss']
})
export class CategoryDetailComponent implements OnInit {

  constructor(
    private CategoryService:CategoryService
  ) { }

  displayBasic:boolean;

  @Input() category:any;

  ngOnInit(): void {

  }

  open(){
    this.displayBasic = true;
  }

  update(){
    this.CategoryService.updateCategory(this.category).subscribe((res)=>{
      console.log(res)
    })
  }

}
