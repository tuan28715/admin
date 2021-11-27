import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BASE_URL } from '../configs/baseUrl'
@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(
    private HttpClient:HttpClient
  ) { }

  getAll(){
    return this.HttpClient.get<any>(BASE_URL + "categories")
  }

  createCategory(category){
    return this.HttpClient.post(BASE_URL + "category", category);
  }

  updateCategory(category){
    return this.HttpClient.put(BASE_URL + "category", category);
  }

  deleteCategory(id){
    return this.HttpClient.delete(BASE_URL + `category?id=${id}`)
  }

}
