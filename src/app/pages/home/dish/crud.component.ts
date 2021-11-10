import { Component, OnInit, Input } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { Dish } from 'src/app/models/dish';
import { DishService } from '../../../services/dish.service';
@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss'],
  styles: [`
  :host ::ng-deep .p-dialog .product-image {
      width: 150px;
      margin: 0 auto 2rem auto;
      display: block;
  }
`]
})
export class CrudComponent implements OnInit {

    products: Dish[] = []
    product: any;
    dishes: any;
    categories:any;
    constructor(
        private messageService: MessageService,
        private confirmationService: ConfirmationService,
        private DishService:DishService,
        ) { }

    ngOnInit() {
        this.DishService.getAll().subscribe((res)=>{
            this.products = res;
        })
    }

    updateDish(dish){
        this.DishService.updateDish(dish);
    }

    deleteProduct(dish: Dish) {
        this.confirmationService.confirm({
            message: 'Are you sure you want to delete ' + dish.name + '?',
            header: 'Confirm',
            icon: 'pi pi-exclamation-triangle',
            accept: async () => {
                // this.products = this.products.filter(val => val.id !== product.id);
                // this.product = {};
                await this.DishService.delete(dish);
                this.messageService.add({severity:'success', summary: 'Successful', detail: 'Xóa thành công!', life: 5000});
            }
        });
    }
    
    findIndexById(id: string): number {
        let index = -1;
        for (let i = 0; i < this.products.length; i++) {
            if (this.products[i].id === id) {
                index = i;
                break;
            }
        }
        return index;
    }
}
