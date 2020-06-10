import { Component, AfterViewInit, OnInit } from '@angular/core';
import $ from 'node_modules/jquery'
import {translate} from '../services/StringResourses'
import { ActivatedRoute } from '@angular/router';
import {ItemNewsServer} from './item-news.service'
import { from } from 'rxjs';
import { TokenService } from '../token.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-task-info',
  templateUrl: './item-news.component.html',
  styleUrls: ['./item-news.component.sass'],
  providers: [ItemNewsServer]
})
export class ItemNewsComponent implements OnInit, AfterViewInit{
  isChild = false
  id;
  news;

  ngOnInit(): void{

  }
  
  constructor(private route: ActivatedRoute, private api: ItemNewsServer,private token :TokenService,private router: Router) {
    this.id = this.route.snapshot.paramMap.get("id")
    this.getOneNews();
    this.news={id:-1,title:"" ,about:"",photo1:"",photo2:""}
  }
  ngAfterViewInit(): void {



}


  getOneNews = () => {
    this.api.getTask(this.id).subscribe(
      data => {
        this.news=data
        console.log(this.news)
      },
      error => {
        console.log(error)
      }
    )
    console.log(this.news)
  }
}

