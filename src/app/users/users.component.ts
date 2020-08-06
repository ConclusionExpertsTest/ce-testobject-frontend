import { Component, OnInit } from '@angular/core';
import { Observable } from  "rxjs";
import { HttpClient } from  "@angular/common/http";

export class User {
  id: number; 
  firstName: string;
  lastName: string;
  address: string;
  occupation: string;
  workingConditionsId: number;
  active: boolean;
}

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  usersObservable : Observable<User[]>;

  constructor(private httpclient: HttpClient) { }

  ngOnInit(): void {

    this.usersObservable = this.httpclient
    .get<User[]>("http://localhost:8082/api/users/");

    console.log(this.usersObservable);
    
  }

}
