import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import { ItemNewsComponent } from './item-news.component';
import {RouterTestingModule} from '@angular/router/testing';

describe('ItemNewsComponent', () => {
  let component: ItemNewsComponent;
  let fixture: ComponentFixture<ItemNewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemNewsComponent ],
      imports: [HttpClientTestingModule,RouterTestingModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
