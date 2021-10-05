import { Injectable } from '@angular/core';
import { UtilsService } from '../services/utils.service'

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private UtilsService:UtilsService) { }

  async getAll(){
   return await this.UtilsService.getAll("category");
  }

  async createCategory(category){
    return await this.UtilsService.create("category", category);
  }

  async updateCategory(category){
    return await this.UtilsService.update("category", category);
  }

}
