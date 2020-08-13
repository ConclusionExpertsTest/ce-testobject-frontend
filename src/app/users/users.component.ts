import { Component, OnInit } from '@angular/core';
import { Observable } from  "rxjs";
import { UsersService } from './users-service.service';
import { User } from './user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  newMode: boolean = false;

  usersObservable : Observable<User[]>;

  constructor(private usersService: UsersService) {  }

  ngOnInit(): void {
    this.usersObservable = this.usersService.getAll();
  }

}
