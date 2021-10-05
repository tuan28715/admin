import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-ads',
  templateUrl: './ads.component.html',
  styleUrls: ['./ads.component.scss']
})
export class AdsComponent implements OnInit {
  uploadedFiles: any[] = [];
  constructor(
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
  }
  onUpload(event) {
    for(let file of event.files) {
        this.uploadedFiles.push(file);
    }
    // this.messageService.add({severity: 'info', summary: 'File Uploaded', detail: ''});
    console.log(this.uploadedFiles)
  }
}
