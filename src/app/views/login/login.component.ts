import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SessionService } from 'src/app/services/session.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;

  constructor(
    private router: Router,
    private sessionService: SessionService
  ) { }

  ngOnInit(): void {
    this.createForm();
    console.log('v.0.3');
  }

  createForm(): void {
    this.loginForm = new FormGroup({
      mail: new FormControl({value: '', disabled: false}, [Validators.required]),
      pwd: new FormControl({value: '', disabled: false}, [Validators.required])
    });
  }

  login(): void {
    if(this.loginForm.valid) {
      const mail = this.loginForm.get('mail')?.value;
      this.sessionService.setUserMail(mail);
      console.log('test');    
      this.router.navigate(['/private/home']);  
    } else {
      this.loginForm.markAllAsTouched();
    }
  }

}
