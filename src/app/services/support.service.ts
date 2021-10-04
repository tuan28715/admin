import { Injectable } from '@angular/core';
import { AuthService } from '../services/auth.service'
import { CategoryService } from '../services/category.service'
import { DishService } from '../services/dish.service'
import { UtilsService } from '../services/utils.service'
import { AngularFireStorage } from '@angular/fire/storage'
import { Observable } from 'rxjs';
import { map, finalize } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class SupportService {

  constructor(
    private AuthService:AuthService,
    private CategoryService:CategoryService,
    private DishService:DishService,
    private UtilsService:UtilsService,
    private af:AngularFireStorage
  ) { }

  selectedFile: File = null;
  public fb;
  downloadURL: Observable<string>;
  public async uploadImage(Path, Folder: String){
    var n = Date.now();
    const filePath = `${Folder}/${n}`;
    const fileRef = this.af.ref(filePath);
    const task = this.af.upload(`${Folder}/${n}`, Path);
    task
    .snapshotChanges()
    .pipe(
      finalize(() => {
        this.downloadURL = fileRef.getDownloadURL();
        this.downloadURL.subscribe(url => {
          if (url) {
            this.fb = url;
          }
        });
      })
    )
    .subscribe(url => {
      if (url) {
        console.log(url)
      }
    });
  }

}
