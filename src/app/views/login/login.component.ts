import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(): void {
    this.loginForm = new FormGroup({
      mail: new FormControl({value: '', disabled: false}, [Validators.required]),
      pwd: new FormControl({value: '', disabled: false}, [Validators.required])
    });
  }

  login(): void {
    console.log('test');    
    this.router.navigate(['/home']);
  }

}
