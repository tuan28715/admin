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

}
