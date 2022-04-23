import { Component, Input, OnInit } from '@angular/core';
import { SessionService } from 'src/app/services/session.service';

@Component({
  selector: 'app-saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.scss']
})
export class SaludoComponent implements OnInit {

  @Input() page = '';

  constructor(
    private sessionService: SessionService
  ) { }

  mail = '';

  ngOnInit(): void {
    this.mail = this.sessionService.getUserMail();
  }

  
  closeSession() {
    this.sessionService.closeSession();
  }

}
