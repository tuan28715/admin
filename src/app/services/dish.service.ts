import { Injectable } from '@angular/core';
import { UtilsService } from '../services/utils.service'

@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor(private UtilsService:UtilsService) { }
  async getAll(){
    return await this.UtilsService.getAll("dish");
  }

  async updateDish(dish){
    return await this.UtilsService.update("dish", dish);
  }
  
  async createDish(dish){
    return await this.UtilsService.create("dish", dish);
  }

}
