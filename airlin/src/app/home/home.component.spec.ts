import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {HomeServer} from './home.service';
import {Observable, of} from 'rxjs';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import { HomeComponent } from './home.component';
import {RouterTestingModule} from '@angular/router/testing';


describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,RouterTestingModule],
      declarations: [ HomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
