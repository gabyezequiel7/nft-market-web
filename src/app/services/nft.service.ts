import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NftService {

  constructor(
    private http: HttpClient
  ) { }

  public getAllNFTs(user: any) {
    return this.http.get(environment.API_URL + '/api/auth/login', user)
      .toPromise()
      .then((response: any) => {
          return true;
          // return this.setToken(response.token);
      });
  }

  public getMyNFTs(data: any) {
    return this.http.get(environment.API_URL + '/api/auth/signup', data)
      .toPromise()
      .then((response) => {
        return true;
      });
  }

  public getNFT(data: any) {
    return this.http.get(environment.API_URL + '/api/auth/signup', data)
      .toPromise()
      .then((response) => {
        return true;
      });
  }

  public submitNFT(data: any) {
    return this.http.post(environment.API_URL + '/api/create-asset', data)
      .toPromise()
      .then((response) => {
        return true;
      });
  }
}
