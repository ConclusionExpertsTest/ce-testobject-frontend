import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../users.component';
import { Observable } from  "rxjs";
import { HttpClient } from '@angular/common/http';

export class WorkingConditions {
  id: number;
  salaryGroup: string;
  companyCar: boolean;
  companyLaptop: string;
}

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  @Input() user: User;

  observableWorkingConditions : Observable<WorkingConditions[]>;

  constructor(private httpclient: HttpClient) { }

  ngOnInit(): void {

    this.observableWorkingConditions = this.httpclient
    .get<WorkingConditions[]>("http://localhost:8083/api/workingconditions/");

    console.log(this.observableWorkingConditions); 

  }

}
