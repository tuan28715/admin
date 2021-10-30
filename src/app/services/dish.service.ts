import { Injectable } from '@angular/core';
import { UtilsService } from '../services/utils.service'
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore'
import { Observable } from 'rxjs';
import { Dish } from '../models/dish';

@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor(
    private UtilsService:UtilsService,
    private readonly afs: AngularFirestore
    ) { }

  getAll(): Observable<any>{
    return this.afs.collection<any>('dishes').valueChanges()
  }

  updateDish(dish: Dish){
    return this.afs.collection<Dish>('dishes').doc(dish.id).update(dish)
  }
  
  createDish(dish: Dish): Promise<any>{
    return this.afs.collection<any>('dishes').doc(Date.now().toString()).set(dish)
  }

}
