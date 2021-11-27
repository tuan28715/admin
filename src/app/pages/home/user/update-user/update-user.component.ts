import { Component, Input, OnInit } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from '../../../../services/auth.service';
@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss'],
  providers: [NgbModalConfig, NgbModal]

})
export class UpdateUserComponent implements OnInit {
  @Input() user:any;
  constructor(
    config: NgbModalConfig,
    private modalService: NgbModal,
    private AuthService:AuthService
  ) {
    config.backdrop = 'static';
    config.keyboard = false;
   }

  ngOnInit(): void {
  }

  open(content) {
    this.modalService.open(content);
  }

  save(){
    // this.AuthService.updateUser(this.user);
  }

}
