import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  public login(user: any): Promise<any> {
    return this.http.post(environment.API_URL + '/api/auth/login', user)
      .toPromise()
      .then((response: any) => {
          localStorage.setItem('token', String(response));
          return true;
      });
  }

  public signUp(data: any): Promise<any> {
    return this.http.post(environment.API_URL + '/api/auth/signup', data)
      .toPromise()
      .then((response: any) => {
          localStorage.setItem('token', String(response));
          return true;
      });
  }

}
