import { Component, OnInit, Input } from '@angular/core';
import {RegisterServer} from './register.service';
import { Router } from '@angular/router';
import { FormControl, ValidatorFn, FormGroup } from '@angular/forms';
import { TokenService } from '../token.service';
import ValidateServ from '../services/ValidateServ';
import $ from 'node_modules/jquery'
import  {registerNewUser}  from './registrationService'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass'],
  providers: [RegisterServer]
})
export class RegisterComponent implements OnInit {

  
  @Input() myvalidator:ValidatorFn;
  registrationForm : any;
  username: FormControl;
  email: FormControl;
  password: FormControl;
  confirmPassword: FormControl;
  
  constructor(private api: RegisterServer, private token :TokenService,
    private router: Router) { }

  ngOnInit(): void {
    this.initFormControl()

    
  }

  initFormControl(): void {
    this.username = new FormControl('', ValidateServ.validateUsername)
    this.email =  new FormControl('', ValidateServ.validateEmail)
    this.password  = new FormControl('', ValidateServ.validatePassword)
    this.confirmPassword = new FormControl('', ValidateServ.validatePassword)

    this.registrationForm = new FormGroup({
      inputGroup: new FormGroup({
        username: this.username,
        email: this.email,
        password: this.password,
        confirmPassword: this.confirmPassword
      })
    })
  }


  registerNewUser(): any {
    var data = {
      "username" : this.username.value,
      "email" : this.email.value,
      "password": this.password.value
    }
    return registerNewUser(this.api, this.token, data, this.router)
    
  }
}


