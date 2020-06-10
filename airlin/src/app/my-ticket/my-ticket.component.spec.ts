import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import { MyTicketComponent } from './my-ticket.component';
import {RouterTestingModule} from '@angular/router/testing';
import {TicketModels} from '../TicketModels'
import {MyTicketServer} from './my-ticket.service'
import { Observable } from 'rxjs';

describe('MyTicketComponent', () => {
  let component: MyTicketComponent;
  let fixture: ComponentFixture<MyTicketComponent>;

  const testData: any = [
    {
      id: 8,
      arival: "Lviv",
      departure: "London",
      date: "2020-06-28",
      child: false,
      user: 5
  },
  {
      id: 12,
      arival: "Lviv",
      departure: "Dania",
      date: "2020-06-21",
      child: true,
      user: 5
  }
  ];

  class MockHomeService extends MyTicketServer {
    getTaskList(): Observable<any> {
      return testData;
    }
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyTicketComponent ],
      imports: [HttpClientTestingModule,RouterTestingModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  describe('#loginUser', () => {
    let ticket = {id:12}

    it('should return expected news by calling once', () => {
      component.delete(ticket);

    });
  });
});

