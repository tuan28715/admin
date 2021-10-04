import { Component, Input, OnInit } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-update-category',
  templateUrl: './update-category.component.html',
  styleUrls: ['./update-category.component.scss'],
  providers: [NgbModalConfig, NgbModal]

})
export class UpdateCategoryComponent  {

  @Input() category:any;
  constructor(
    config: NgbModalConfig,
    private modalService: NgbModal,
  ) { 
    config.backdrop = 'static';
    config.keyboard = false;
  }

  open(content) {
    // console.log(this.dish)
    this.modalService.open(content);
  }

  async save(){
 
  }

}
