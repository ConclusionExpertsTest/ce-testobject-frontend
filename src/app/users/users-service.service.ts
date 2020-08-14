import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ 
  providedIn: 'root'
})
export class UsersService {

  BASE_URL = 'http://localhost:8082/api/users/'; 

  constructor(private httpclient: HttpClient) { }

  getAll(): Observable<any> {
    return this.httpclient.get(this.BASE_URL);
  }

  get(id): Observable<any> {
    return this.httpclient.get(`${this.BASE_URL}/${id}`);
  }

  create(data): Observable<any> {
    return this.httpclient.post(this.BASE_URL, data);
  }

  update(id, data): Observable<any> {
    return this.httpclient.put(`${this.BASE_URL}/${id}`, data);
  }

  delete(id): Observable<any> {
    return this.httpclient.delete(`${this.BASE_URL}/${id}`);
  }
}
