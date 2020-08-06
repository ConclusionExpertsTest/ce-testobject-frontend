import { Component, OnInit, Input } from '@angular/core';
import { Observable } from  "rxjs";
import { HttpClient } from '@angular/common/http';
import { User } from '../users.component';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {

  editMode: boolean = false;

  @Input() user: User;

  constructor(private httpclient: HttpClient) { }

  ngOnInit(): void {
  }

  updateUser(putUser: User): Observable<User> {
    console.log(putUser);
    
    return this.httpclient.put<User>("http://localhost:8082/api/users/" + putUser.id, putUser);
  };

}
