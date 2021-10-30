import { Component, OnInit } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../../../../services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [NgbModalConfig, NgbModal]

})
export class LoginComponent implements OnInit {

  constructor(
    config: NgbModalConfig,
    private modalService: NgbModal,
    private AuthService:AuthService) { }

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
    await this.AuthService.authLogin(this.userForm.value.username, this.userForm.value.password);
  }

}
