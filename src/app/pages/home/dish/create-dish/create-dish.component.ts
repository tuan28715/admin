import { Component, OnInit } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl } from '@angular/forms';
import { AngularFireStorage } from '@angular/fire/storage'
import { map, finalize } from "rxjs/operators";
import { Observable } from 'rxjs';
import { DishService } from '../../../../services/dish.service';
import { CategoryService } from '../../../../services/category.service';
@Component({
  selector: 'app-create-dish',
  templateUrl: './create-dish.component.html',
  styleUrls: ['./create-dish.component.scss'],
  providers: [NgbModalConfig, NgbModal]
})
export class CreateDishComponent implements OnInit{

  constructor(
    config: NgbModalConfig, private modalService: NgbModal,
    private af:AngularFireStorage,
    private DishService:DishService,
    private CategoryService:CategoryService
    ) {
    // customize default values of modals used by this component tree
    config.backdrop = 'static';
    config.keyboard = false;
  }
  categories:any
  ngOnInit(): void {
    this.CategoryService.getAll().then(res=>{
      // console.log(res)
      this.categories = res;
    });
  }

  dishForm = new FormGroup({
    name: new FormControl(''),
    price: new FormControl(''),
    description: new FormControl(''),
    supportImagePath: new FormControl(''),
    ingredients: new FormControl(''),
    size: new FormControl(''),
    options: new FormControl(''),
    type: new FormControl(''),
    status: new FormControl(''),
    reviews: new FormControl(''),
  });

  filePath: string[] = []; 
  Path: String;
  processFile(e){
    this.Path = e.target.files[0];
    const reader = new FileReader();
    reader.onload = () =>{
       this.filePath.push(reader.result as string);
    }
    reader.readAsDataURL((e.target as HTMLInputElement).files[0])
  }
  title = "cloudsSorage";
  selectedFile: File = null;
  fb;
  downloadURL: Observable<string>;
  onSubmit(event){
    var n = Date.now();
    const filePath = `Dishes/${n}`;
    const fileRef = this.af.ref(filePath);
    const task = this.af.upload(`Dishes/${n}`, this.Path);
    task
      .snapshotChanges()
      .pipe(
        finalize(() => {
          this.downloadURL = fileRef.getDownloadURL();
          this.downloadURL.subscribe(url => {
            if (url) {
              this.fb = url;
            }
            console.log(this.fb);
            const body = {
              ...this.dishForm.value,
              imagePath: this.fb
            }
            this.DishService.createDish(body);
          });
        })
      )
      .subscribe(url => {
        if (url) {
          console.log(url);
        }
      });
  }

  open(content) {
    this.modalService.open(content);
  }

}

