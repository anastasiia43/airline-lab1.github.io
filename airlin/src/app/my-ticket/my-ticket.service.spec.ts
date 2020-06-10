import { TestBed } from '@angular/core/testing';
import {NewsModels} from '../NewsModels'
import { MyTicketServer } from './my-ticket.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';

describe('HomeService', () => {
  let service: MyTicketServer;
  let httpTestingController: HttpTestingController;
  let httpClient: HttpClient;
  const homeUrl = 'http://127.0.0.1:8000/ticket/12/';

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MyTicketServer],
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(MyTicketServer);
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('#getPlaylists', () => {
    let expectedData: string;
    let ticket = {id:12}

    beforeEach(() => {
      expectedData = "Ticket deleted";
    });

    it('should return expected news by calling once', () => {
      service.delete(ticket).subscribe(
        data => expect(data).toEqual(expectedData, 'should return expected news'),
        fail
      );

      const req = httpTestingController.expectOne(homeUrl);
      expect(req.request.method).toEqual('DELETE');

      req.flush(expectedData);
    });
  });

});