import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(public AuthService:AuthService, private Router:Router) { }

  ngOnInit(): void {
  }

  async login(){
    const body = {
      "username":"ductrong",
      "password":"123456"
    }
    await this.AuthService.login(body);
  }

}
