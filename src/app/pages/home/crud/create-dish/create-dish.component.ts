import { Component, OnInit } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-create-dish',
  templateUrl: './create-dish.component.html',
  styleUrls: ['./create-dish.component.scss'],
  providers: [NgbModalConfig, NgbModal]
})
export class CreateDishComponent {

  constructor(config: NgbModalConfig, private modalService: NgbModal) {
    // customize default values of modals used by this component tree
    config.backdrop = 'static';
    config.keyboard = false;
  }

  dishForm = new FormGroup({
    name: new FormControl(''),
    price: new FormControl(''),
    description: new FormControl(''),
    imagePath: new FormControl(''),
    supportImagePath: new FormControl(''),
    ingredients: new FormControl(''),
    size: new FormControl(''),
    options: new FormControl(''),
    type: new FormControl(''),
    status: new FormControl(''),
    reviews: new FormControl(''),
  });

  processFile(i){
    console.log(i);
  }

  onSubmit(){
    console.log(this.dishForm.value);
  }

  open(content) {
    this.modalService.open(content);
  }

}
