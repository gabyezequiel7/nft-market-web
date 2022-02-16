import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  constructor(
    private http: HttpClient
  ) { }

  public submitFile(file: any) {
    const data = new FormData();
    data.append('file', file);
    return this.http.post(environment.API_URL + '/api/create-file', data)
      .toPromise()
      .then((response: any) => {
          return response;
      });
  }
}
