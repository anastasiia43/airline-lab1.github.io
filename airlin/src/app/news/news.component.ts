import { Component, OnInit, AfterViewInit } from '@angular/core';
import {NewsServer} from './news.service';
import { TokenService } from '../token.service';
import { Router } from '@angular/router';
import $ from 'node_modules/jquery';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.sass'],
  providers: [NewsServer]
})
export class NewsComponent implements OnInit, AfterViewInit {

  url = "item-news/"

  constructor(private api: NewsServer,private token :TokenService,
    private router: Router) {
    this.getTask();
   }

  ngOnInit(): void {


  }

  ngAfterViewInit(): void {

    $('#active-log').on('click', ()=> {
      this.token.logout();
      location.reload();
  })
  }

  news = [{id: 0,title:"Title",text: 'text',date: '2020-05-28',photo: ""},];

  getTask = () => {
    this.api.getTaskList().subscribe(
      data => {
        this.news = data;
      },
      error => {
        console.log(error)
      }
    )
  }

}

