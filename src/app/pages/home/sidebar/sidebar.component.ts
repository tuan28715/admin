import { Component, OnInit } from '@angular/core';
import { UtilsService } from '../../../services/utils.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(
    public UtilsService:UtilsService,
    private Router:Router
    ) { }

  ngOnInit(): void {
  }

  public async logOut(){
    await localStorage.removeItem('user');
    await localStorage.removeItem('uid');
    await this.Router.navigate(['']);
    window.location.reload();
  }

}
