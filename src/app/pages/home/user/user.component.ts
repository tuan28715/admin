import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor(private AuthService:AuthService) { }
  users:any;
  ngOnInit(): void {
    // this.AuthService.getAllUser().then(res=>this.users = res);
  }

}
