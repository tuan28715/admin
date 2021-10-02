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

}
