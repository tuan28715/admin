import { Component, Input, OnInit } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DishService } from '../../../../services/dish.service';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-update-dish',
  templateUrl: './update-dish.component.html',
  styleUrls: ['./update-dish.component.scss'],
  providers: [NgbModalConfig, NgbModal,MessageService]

})
export class UpdateDishComponent {
  @Input() dish:any;
  constructor(
    config: NgbModalConfig,
    private modalService: NgbModal,
    private DishService:DishService,
    private messageService:MessageService
    ) {
    // customize default values of modals used by this component tree
    config.backdrop = 'static';
    config.keyboard = false;
  }
  ngOnInit(): void {
  }
  open(content) {
    // console.log(this.dish)
    this.modalService.open(content, { size: 'lg' });
  }

  async save(){
    this.DishService.updateDish(this.dish).then(async (res)=>{
      await this.modalService.dismissAll(res)
      await this.messageService.add({severity:'info', summary: 'Info', detail: 'Cập nhật thành công!'});
    },async (err)=>{
      await this.modalService.dismissAll(err)
      await this.messageService.add({severity:'error', summary: 'Error', detail: 'Cập nhật thất bại!'});
    })
  }

}
