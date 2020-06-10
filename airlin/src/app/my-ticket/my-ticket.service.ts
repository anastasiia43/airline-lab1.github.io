import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenService } from '../token.service';

@Injectable({
  providedIn: 'root'
})
export class MyTicketServer {

  baseUrl = 'http://127.0.0.1:8000'

  httpHeaders = new HttpHeaders({'Content-Type': 'application/json',
  'Authorization':'Bearer '+ this.tokenService.getAccess()})

  constructor(private http: HttpClient, private tokenService: TokenService) { }

  getTaskList(): Observable<any> {
    return this.http.get(this.baseUrl + "/ticket/" , {headers: this.httpHeaders})
  }

  delete(ticket): Observable<any> {
    return this.http.delete(this.baseUrl + "/ticket/"+ticket.id +"/" ,
    {headers: this.httpHeaders})
  }

 
}