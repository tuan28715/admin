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

}
