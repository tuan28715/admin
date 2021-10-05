import { Injectable } from '@angular/core';
import { UtilsService } from '../services/utils.service'
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private UtilsService:UtilsService) { }

  async login(data){
    return await this.UtilsService.auth("user/login", data);
  }

  async getAllUser(){
    return await this.UtilsService.getAll("user");
  }

  async updateUser(data){
    return await this.UtilsService.updateUser("user", data);
  }

}
