import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HEROKU_USER_URL } from '../configs/baseUrl'
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor(
    private HttpClient:HttpClient,
    private Router:Router
    ) { }

  public async get(){

  }

  public async getAll(collectionName: string){
    return this.HttpClient.get(HEROKU_USER_URL + collectionName).toPromise();
  }

  public user :any;
  public username = localStorage.getItem('user');
  public async auth(collectionName: string, data){
    return await this.HttpClient.post(HEROKU_USER_URL + collectionName, data).subscribe(async res=>{
      this.user = res;
      if(this.user.role === "admin"){
        localStorage.setItem('user', this.user.username);
        localStorage.setItem('uid', this.user._id);
        await this.Router.navigate(['home'])
        window.location.reload();
      }else{
        this.Router.navigate([''])
      }
    },(err)=>console.log(err));
  }

  public async update(){

  }

  public async delete(){

  }

}
