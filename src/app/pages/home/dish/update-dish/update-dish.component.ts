import { Component, Input, OnInit } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DishService } from '../../../../services/dish.service';
@Component({
  selector: 'app-update-dish',
  templateUrl: './update-dish.component.html',
  styleUrls: ['./update-dish.component.scss'],
  providers: [NgbModalConfig, NgbModal]

})
export class UpdateDishComponent {
  @Input() dish:any;
  constructor(
    config: NgbModalConfig,
    private modalService: NgbModal,
    private DishService:DishService,
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
    console.log(this.dish);
    this.DishService.updateDish(this.dish)
  }

}
