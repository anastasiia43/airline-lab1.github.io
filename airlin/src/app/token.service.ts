import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  baseUrl = 'http://localhost:8000';

  constructor(private http: HttpClient, private cookieService: CookieService) { }

  logout(): any {
    this.cookieService.delete('access');
    this.cookieService.delete('refresh');
  }
  
  refreshToken(): Observable<any> {
    const body = { refresh: this.cookieService.get('refresh') };
    const url = this.baseUrl + '/login/refresh/';

    const httpHeadersWithToken = { headers : new HttpHeaders({'Content-Type': 'application/json'})};
    return this.http.post(url, body, httpHeadersWithToken);
  }

  refreshTokenSubs(): any {
    return new Promise((resolve) => {
      this.refreshToken().subscribe(
        data => {
          this.setCookie({access: data.access, refresh: data.refresh});
          resolve();
        },
        error => {
          console.log(error);
        }
      );
    });
  }

  verifyToken(): Observable<any> {
    const body = { token: this.cookieService.get('refresh') };
    const url = this.baseUrl + '/login/verify/';

    const httpHeadersWithToken = { headers : new HttpHeaders({'Content-Type': 'application/json'})};
    return this.http.post(url, body, httpHeadersWithToken);
  }
  
  verifyTokenSubs(): any {
    return new Promise((resolve) => {
      this.verifyToken().subscribe(
        data => {
          resolve();
        },
        error => {
          console.log(error);
        }
      );
    });
  }

  setCookie(data): void {
    this.cookieService.set('access', data.access);
    if (data.refresh){
      this.cookieService.set('refresh', data.refresh);
    }
  }

  getAccess(): any {
    return this.cookieService.get('access');
  }
  getRefresh(): any {
    return this.cookieService.get('refresh');
  }
}
