import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { tap, catchError, map} from 'rxjs/operators';
import { User } from '../users/user';

@Injectable({ 
  providedIn: 'root'
})
export class UsersService {

  BASE_URL = 'http://localhost:8082/api/users/';

  headers = new HttpHeaders().set('Content-Type', 'application/json').set('Accept', '*/*');
  httpOptions = {
    headers: this.headers
  };

  constructor(private httpclient: HttpClient) { }

  private handleError(error: any) {
    console.log(error);
    return throwError(error);
  }

  getUsers(): Observable<User[]> {
    return this.httpclient.get<User[]>(this.BASE_URL).pipe(
      tap(data => console.log(data)),
      catchError(this.handleError)
    );
  }
}
