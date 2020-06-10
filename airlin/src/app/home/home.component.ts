import { Component, OnInit, AfterViewInit } from '@angular/core';
import {HomeServer} from './home.service';
import $ from 'node_modules/jquery';
import { TokenService } from '../token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
  providers: [HomeServer]
})
export class HomeComponent implements OnInit, AfterViewInit {
  ticket;

  constructor(private api: HomeServer,private token :TokenService,
    private router: Router) {
    this.ticket = [{arival:'' ,departure: '', date: '',child:false}];
   }

  ngOnInit(): void {
    this.ticket.child = false
    console.log(this.token.getAccess)


  }


  ngAfterViewInit(): void {



  }
  
  createTikcet = () => {
    console.log(this.ticket)
    this.api.createTicket(this.ticket).subscribe(
      data => {
      },
      error => {
        console.log(error);
      }
    )
    location.reload();
  }
}
