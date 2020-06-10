import { Component, OnInit, AfterViewInit } from '@angular/core';
import {MyTicketServer} from './my-ticket.service';
import { TokenService } from '../token.service';
import { Router } from '@angular/router';
import $ from 'node_modules/jquery';

@Component({
  selector: 'app-my-ticket',
  templateUrl: './my-ticket.component.html',
  styleUrls: ['./my-ticket.component.sass'],
  providers: [MyTicketServer]
})
export class MyTicketComponent implements OnInit, AfterViewInit {

  constructor(private api: MyTicketServer,private token :TokenService,
    private router: Router) {
    this.getTask();
   }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {



}

  tasks = [{id: 0,arival:"Lviv",departure: 'London',date: '2020-05-28',child: false},];

  getTask = () => {
    this.api.getTaskList().subscribe(
      data => {
        this.tasks = data;
      },
      error => {
        console.log(error)
      }
    )
  }

  delete = (task) =>{
    this.api.delete(task).subscribe(
      // @ts-ignore
      data => {
        this.tasks = data;
        this.getTask()
      },
      error => {
        console.log(error)
      }
      
    )
    
  }
}
