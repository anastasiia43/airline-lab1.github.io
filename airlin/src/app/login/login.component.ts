import { Component, OnInit, Input } from '@angular/core';
import {LoginServer} from './login.service';
import { Router } from '@angular/router';
import { FormControl, ValidatorFn, FormGroup } from '@angular/forms';
import { TokenService } from '../token.service';
import ValidateServ from '../services/ValidateServ';
import  {loginUser}  from './loginService'
import $ from 'node_modules/jquery'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass'],
  providers: [LoginServer]
})
export class LoginComponent implements OnInit {



  
  @Input() myvalidator:ValidatorFn;
  loginForm : any;
  email: FormControl;
  password: FormControl;
  
  constructor(private api: LoginServer, private token :TokenService,
    private router: Router) { }

  ngOnInit(): void {
    this.initFormControl()



  }




  initFormControl(): void {
    this.email =  new FormControl('', ValidateServ.validateEmail)
    this.password  = new FormControl('', ValidateServ.validatePassword)

    this.loginForm = new FormGroup({
      inputGroup: new FormGroup({
        email: this.email,
        password: this.password
      })
    })
  }


  loginUser(): any {
    var data = {
      "email" : this.email.value,
      "password": this.password.value
    }
    return loginUser(this.api, this.token, data, this.router)
  }
}