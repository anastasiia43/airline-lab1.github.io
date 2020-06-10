import { TestBed } from '@angular/core/testing';

import { HomeServer } from './home.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import {TicketModels,TicketModelsReturn, TicketModelsSend} from '../TicketModels';
import { UserModel } from '../UserModels';

describe('LoginService', () => {
  let service: HomeServer;
  let httpTestingController: HttpTestingController;
  let httpClient: HttpClient;
  const homeUrl = 'http://127.0.0.1:8000/ticket/create/';

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HomeServer],
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(HomeServer);
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
    let expectedData: TicketModelsReturn;
    let ticket: TicketModelsSend;

    beforeEach(() => {
      expectedData = {
        arival: "Lviv",
        departure: "Dania",
        date: "2020-06-21",
        child: true
    }as TicketModelsReturn;
      ticket = {
            arival: "Lviv",
            departure: "Dania",
            date: "2020-06-21",
            child: true,
            user: 5
    } as TicketModelsSend;
    });

    it('should return expected tokens by calling once', () => {
      service.createTicket(ticket).subscribe(
        data => expect(data).toEqual(expectedData, 'should return expected tokens'),
        fail
      );

      const req = httpTestingController.expectOne(homeUrl);
      expect(req.request.method).toEqual('POST');

      req.flush(expectedData);
    });
  });
});