import { Component, OnInit } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import {MessageService} from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [NgbModalConfig, NgbModal, MessageService]

})
export class LoginComponent implements OnInit {

  constructor(
    config: NgbModalConfig,
    private modalService: NgbModal,
    private AuthService:AuthService,
    private messageService: MessageService,
    private Router:Router
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
  async login(){
    await (await this.AuthService.login(this.userForm.value.username, this.userForm.value.password)).subscribe(async (res:any)=>{
      if(res.length === 0){
        await this.modalService.dismissAll();
        await this.messageService.add({severity:'error', summary: 'Error', detail: 'Sai tài khoản hoặc mật khẩu!'});
        await this.userForm.reset()
        return;
      }
      await this.userForm.reset()
      await this.modalService.dismissAll()
      await localStorage.setItem('_id', res[0].id);
      await this.Router.navigate(['/dishes'])
    })
  }

}
