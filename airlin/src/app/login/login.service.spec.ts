import { TestBed } from '@angular/core/testing';

import { LoginServer } from './login.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import {AuthModel} from '../authModel';
import { UserModel } from '../UserModels';
import { Component } from '@angular/core';

describe('LoginService', () => {
  let service: LoginServer;
  let httpTestingController: HttpTestingController;
  let httpClient: HttpClient;
  const homeUrl = 'http://localhost:8000/login/token/';

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoginServer],
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(LoginServer);
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('#loginUser', () => {
    let expectedData: AuthModel;
    let user: UserModel;

    beforeEach(() => {
      expectedData = {
        refresh: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTU5NDEzNDY4OCwianRpIjoiNjEyOWY1OGIwZWQ4NGVlNDgxZDQ0YTkzYWZmNWZlYWUiLCJ1c2VyX2lkIjo1fQ.fKI6PBV6Y2HJnkxbviBpDrILs-Y18BJT2eDfvQWCsg4',
        access: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNTkxNTQ2Mjg4LCJqdGkiOiI0NTQwZWFiZWIzNjM0MzllYjVmZTg0OTI2YTY1MzViNCIsInVzZXJfaWQiOjV9.VO-LlM98CedVIM3E1FJiZuwcjia4_fgbGc5r_V07RG8'
      } as AuthModel;
      user = {
        email: 'email@gmail.com',
        password: '12345678'
      } as UserModel;
    });

    it('should return expected tokens by calling once', () => {
      service.loginUser(user).subscribe(
        data => expect(data).toEqual(expectedData, 'should return expected tokens'),
        fail
      );

      const req = httpTestingController.expectOne(homeUrl);
      expect(req.request.method).toEqual('POST');

      req.flush(expectedData);
    });

  });
});