import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenService } from '../token.service';


@Injectable({
  providedIn: 'root'
})
export class HomeServer {
  baseUrl = 'http://127.0.0.1:8000'

  httpHeaders = new HttpHeaders({'Content-Type': 'application/json',
  'Authorization':'Bearer '+ this.tokenService.getAccess()})

  constructor(private http: HttpClient, private tokenService: TokenService) { }

  createTicket(ticket): Observable<any> {
    const body = {arival:ticket.arival,departure:ticket.departure,date:ticket.date,child:ticket.child};
    return this.http.post(this.baseUrl + "/ticket/create/" ,body, {headers: this.httpHeaders})
  }
 
}