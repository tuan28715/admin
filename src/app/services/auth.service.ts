import { Injectable } from '@angular/core';
import { UtilsService } from '../services/utils.service'
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore'
import { User } from '../models/user';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private UtilsService:UtilsService,
    private readonly afs: AngularFirestore
  ) { }
  private usersRef = this.afs.collection<User>('users')

  async authLogin(username: string, password: string){
    console.log(this.isExits(username))
  }

  async getAllUser(){
    return await this.UtilsService.getAll("user");
  }

  async updateUser(data){
    return await this.UtilsService.updateUser("user", data);
  }

  async isExits(username: string){
  }

  async createAccount(user: User){
    try {
      return this.afs.collection('users').add(user)
    } catch (error) {
      throwError(error)
    }
  }

}
