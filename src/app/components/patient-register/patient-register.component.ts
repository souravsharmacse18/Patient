import { Component, OnInit } from '@angular/core';
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-patient-register',
  templateUrl: './patient-register.component.html',
  styleUrls: ['./patient-register.component.css']
})
export class PatientRegisterComponent implements OnInit {
  repeatPass: string = 'none';
  

  constructor() { }

  ngOnInit(): void {
  }

  registerForm = new FormGroup({
    firstname : new FormControl("",[
      Validators.required,
      Validators.minLength(2),
      Validators.pattern("[a-zA-z].*")
    ]),
    lastname : new FormControl("",[
      Validators.required,
      Validators.minLength(2),
      Validators.pattern("[a-zA-z].*")
    ]),
    email : new FormControl("",[
      Validators.required,
      Validators.email
    ]),
    age : new FormControl("",[
      Validators.required,
      Validators.pattern("[0-9]*"),
      Validators.maxLength(2)
    ]),
    mobile : new FormControl("",[
      Validators.required,
      Validators.pattern("[0-9]*"),
      Validators.maxLength(10),
      Validators.minLength(10)
    ]),
    gender : new FormControl("",[
      Validators.required
    ]),
    pwd : new FormControl("",[
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(10)
    ]),
    rpwd : new FormControl(""),
  });

  regsiterSubmited(){
    if(this.PWD.value == this.RPWD.value){
      console.log("Submitted");
    } else {
      this.repeatPass = 'inline';
    }
  }

  get FirstName() : FormControl{
    return this.registerForm.get('firstname') as FormControl;
  }
  get LastName() : FormControl{
    return this.registerForm.get('lastname') as FormControl;
  }
  get Email() : FormControl{
    return this.registerForm.get('email') as FormControl;
  }
  get Age() : FormControl{
    return this.registerForm.get('age') as FormControl;
  }
  get Mobile() : FormControl{
    return this.registerForm.get('mobile') as FormControl;
  }
  get Gender() : FormControl{
    return this.registerForm.get('gender') as FormControl;
  }
  get PWD() : FormControl{
    return this.registerForm.get('pwd') as FormControl;
  }
  get RPWD() : FormControl{
    return this.registerForm.get('rpwd') as FormControl;
  }
}
