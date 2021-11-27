import { Component, OnInit } from '@angular/core';
import { UtilsService } from '../../services/utils.service'
import { AuthService } from '../../services/auth.service'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    public UtilsService:UtilsService,
    public AuthService:AuthService
    ) { }

  ngOnInit(): void {
    this.AuthService.getMyProfile();
  }

}
