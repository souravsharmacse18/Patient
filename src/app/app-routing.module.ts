import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientLoginComponent } from './components/patient-login/patient-login.component';
import { PatientRegisterComponent } from './components/patient-register/patient-register.component';

const routes: Routes = [
  {
    path: 'login',
    component: PatientLoginComponent
  },
  {
    path: 'register',
    component: PatientRegisterComponent
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch : 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
