import { Component, OnInit } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
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
    email: new FormControl(''),
    password: new FormControl(''),
  });

  open(content) {
    this.modalService.open(content);
  }
  async register(){
    await this.AuthService.createUser(this.userForm.value);
  }
}
