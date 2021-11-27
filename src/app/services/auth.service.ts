import { Injectable } from '@angular/core';
import { UtilsService } from '../services/utils.service'
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore'
import { catchError } from 'rxjs/internal/operators/catchError';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private UtilsService:UtilsService,
    private readonly afs: AngularFirestore
  ) {
    this.id = localStorage.getItem('_id')
  }
  private id;
  public currentUser:User;
  async getMyProfile(){
    if(this.id == null || this.id == undefined){
      return;
    }
    return await this.afs.collection('users').doc(this.id).valueChanges()
    .subscribe((res:any)=>{
      this.currentUser = res.email;
      }
    )
  }
  async login(email: string, password: string){
    return await this.afs.collection('users',
    ref => ref
      .where('email', '==', email)
      .where('password', '==', password)
      ).valueChanges()
  }
  private async isExits(email){
    return await this.afs.collection('users', ref => ref.where('email', '==', email)).valueChanges()
  }
  private n = Date.now().toString();
  async createUser(user:any){
    (await this.isExits(user.email))
    .subscribe(async (res)=>{
      if(res.length ===0){
        const data = {
          ...user,
          isAdmin:"false",
          id: this.n
        }
        return await this.afs.collection<any>('users').doc(this.n).set(data)
      }else{
        return;
      }
    })
  }
}
