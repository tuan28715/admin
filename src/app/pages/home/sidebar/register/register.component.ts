import { Component, OnInit } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../../../../services/auth.service';
import { User } from 'src/app/models/user';
import {MessageService} from 'primeng/api';
import { PrimeNGConfig } from 'primeng/api';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers: [NgbModalConfig, NgbModal,MessageService]

})
export class RegisterComponent implements OnInit {

  constructor(
    config: NgbModalConfig,
    private modalService: NgbModal,
    private AuthService:AuthService,
    private messageService: MessageService,
    private primengConfig: PrimeNGConfig
  ) { }

  ngOnInit(): void {
  }

  userForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  open(content) {
    this.modalService.open(content);
  }
  async register(){
    let user: User = {
      uid: null,
      email: null,
      imagePath: null,
      isAdmin: false,
      metadata:{
          created: Date.now().toString(),
          update: Date.now().toString(),
      },
      username: this.userForm.value.username,
      password: this.userForm.value.password,
    }
    this.AuthService.createAccount(user).then(async (res)=>{
      await this.modalService.dismissAll(res);
      await this.messageService.add({severity:'success', summary: 'Success', detail: 'Đăng ký thành công!'});
    },async (err)=>{
      await this.modalService.dismissAll(err);
      await this.messageService.add({severity:'error', summary: 'Error', detail: 'Đăng ký thất bại!'});
    })
  }

}
