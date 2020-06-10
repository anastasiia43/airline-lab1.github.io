import { TestBed } from '@angular/core/testing';

import { TokenService } from './token.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import {AuthModel} from './authModel';
import { UserModel } from './UserModels';


describe('LoginService', () => {
  let service: TokenService;
  let httpTestingController: HttpTestingController;
  let httpClient: HttpClient;
  const homeUrl = 'http://localhost:8000/login/refresh/';
  const homeUrl1 = 'http://localhost:8000/login/verify/';

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TokenService],
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(TokenService);
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('#refreshToken', () => {
    let expectedData: AuthModel;

    beforeEach(() => {
      expectedData = {
        access: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNTkxNTQ2Mjg4LCJqdGkiOiI0NTQwZWFiZWIzNjM0MzllYjVmZTg0OTI2YTY1MzViNCIsInVzZXJfaWQiOjV9.VO-LlM98CedVIM3E1FJiZuwcjia4_fgbGc5r_V07RG8'
        
      } as AuthModel;
    });

    it('should return expected tokens by calling once', () => {
      service.refreshToken().subscribe(
        data => expect(data).toEqual(expectedData, 'should return expected tokens'),
        fail
      );

      const req = httpTestingController.expectOne(homeUrl);
      expect(req.request.method).toEqual('POST');

      req.flush(expectedData);
    });
  });

  describe('#verifyToken', () => {
    let expectedData;

    beforeEach(() => {
      expectedData = {};
    });

    it('should return expected tokens by calling once', () => {
      service.verifyToken().subscribe(
        data => expect(data).toEqual(expectedData, 'should return expected tokens'),
        fail
      );

      const req = httpTestingController.expectOne(homeUrl1);
      expect(req.request.method).toEqual('POST');

      req.flush(expectedData);
    });
  });
  describe('#setCookie', () => {
    let expectedData: AuthModel;

    beforeEach(() => {
      expectedData = {access: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNTkxNTQ2Mjg4LCJqdGkiOiI0NTQwZWFiZWIzNjM0MzllYjVmZTg0OTI2YTY1MzViNCIsInVzZXJfaWQiOjV9.VO-LlM98CedVIM3E1FJiZuwcjia4_fgbGc5r_V07RG8',
      refresh: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTU5NDE0NTQ4OCwianRpIjoiZWRjN2FmY2I5NjA3NGFjZmI5OTg0YzA5YWViODVmZGQiLCJ1c2VyX2lkIjo1fQ.FrUr5XfCdkISwWUGoh2wJQJQgUvsIhliKJst0UPFC0Q"} as AuthModel;
    });

    it('should return expected tokens by calling once', () => {
      service.setCookie(expectedData)
    });
    });
    describe('#logout', () => {
       
    
        it('should return expected tokens by calling once', () => {
          service.logout()
        });
        });
});