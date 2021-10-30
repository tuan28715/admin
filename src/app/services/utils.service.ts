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
  private date = Date.now().toString();
  public async getAll(collectionName: string){
    return this.HttpClient.get(HEROKU_USER_URL + collectionName).toPromise();
  }

  public async create(collectionName: string, data){
    const metadata = {
      "actor":this.username,
      "created":this.date,
      "updated":this.date
    }
    const body = {...data, metadata}
    return this.HttpClient.post(HEROKU_USER_URL + collectionName, body).subscribe(async (res)=>{
      window.location.reload();
    })
  }

  public async update(collectionName: string, data){
    data.metadata.actor = this.username;
    data.metadata.updated = this.date;
    return this.HttpClient.put(HEROKU_USER_URL + collectionName, data).subscribe(async(res)=>{
      window.location.reload();
    },(err)=>{console.log(err)})
  }

  public async delete(){

  }

  public user :any;
  public username = 'test';
  public async auth(collectionName: string, data){
    return await this.HttpClient.post(HEROKU_USER_URL + collectionName, data).subscribe(async res=>{
      this.user = res;
      if(this.user.role === "admin" || this.user.role === "staff"){
        localStorage.setItem('user', this.user.username);
        localStorage.setItem('uid', this.user._id);
        await this.Router.navigate([''])
        window.location.reload();
      }else{
        this.Router.navigate([''])
      }
   
    },(err)=>console.log(err));
  }

  public updateUser(collectionName: string, data){
    data.metadata.updated = this.date;
    return this.HttpClient.put(HEROKU_USER_URL + collectionName, data).subscribe(async(res)=>{
      window.location.reload();
    },(err)=>{console.log(err)})
  }
}
