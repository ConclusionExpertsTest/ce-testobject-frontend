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

  displayedColumns = ["id", "firstName", "lastName", "address", "occupation", "workingConditionsId", "active"]; 

  newMode: boolean = false;

  users : User[];

  usersObservable : Observable<User[]>;

  constructor(private usersService: UsersService) {  }

  ngOnInit(): void {
    this.usersObservable = this.usersService.getAll();

    this.usersObservable.subscribe((usersInObs:User[]) => {
      this.users = usersInObs;
    });
  }

  refresh(): void {
    this.ngOnInit();
  }

}
