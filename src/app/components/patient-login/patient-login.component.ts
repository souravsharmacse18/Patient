import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-patient-login',
  templateUrl: './patient-login.component.html',
  styleUrls: ['./patient-login.component.css']
})
export class PatientLoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  loginForm = new FormGroup({
    email: new FormControl("",[
      Validators.required,
      Validators.email
    ]),
    pwd: new FormControl("",[
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(15)
    ])
  });

  get Email(): FormControl{
    return this.loginForm.get('email') as FormControl;
  }
  get PWD(): FormControl{
    return this.loginForm.get('pwd') as FormControl;
  }
  loginSubmited(){
    
  }

}
