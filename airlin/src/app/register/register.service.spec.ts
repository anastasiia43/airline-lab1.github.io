import { TestBed } from '@angular/core/testing';

import { RegisterServer } from "./register.service";
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import {AuthModel} from '../authModel';
import { UserModel } from '../UserModels';

describe('RegistrationService', () => {
  let service: RegisterServer;
  let httpTestingController: HttpTestingController;
  let httpClient: HttpClient;
  const homeUrl = 'http://localhost:8000/user/';

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RegisterServer],
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(RegisterServer);
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('#registerUser', () => {
    let expectedData: AuthModel;
    let user: UserModel;

    beforeEach(() => {
      expectedData = {
        refresh: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTU5Mzk2MDc1MiwianRpIjoiM2Q0OTJhMGNiNzBlNGIwMmIzZTlhM2RlYmQ5YTk2MmQiLCJ1c2VyX2lkIjoxfQ.gyN_zI2Lzptncwpnw-MO5V1-qQEdtmL2E3H2JJ56u1U',
        access: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNTkxNDU1MTUyLCJqdGkiOiI1MjcxN2NhMGMzNTc0NmU0ODI1MDYzZTczNGY4MDZjZiIsInVzZXJfaWQiOjF9.wZQQ7a3fC1PUWfifYcegrJqAP7SVxt1EwVj8v4l9gN4'
      } as AuthModel;
      user = {
        email: 'email@gmail.com',
        username: 'username',
        password: '12345678'
      } as UserModel;
    });

    it('should return expected tokens by calling once', () => {
      service.registerNewUser(user).subscribe(
        data => expect(data).toEqual(expectedData, 'should return expected tokens'),
        fail
      );

      const req = httpTestingController.expectOne(homeUrl);
      expect(req.request.method).toEqual('POST');

      req.flush(expectedData);
    });
  });
});