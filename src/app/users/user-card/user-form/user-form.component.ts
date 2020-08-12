import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../user';
import { WorkingConditionsService, WorkingCondition } from '../../../working-conditions/working-conditions.service';
import { Observable } from  "rxjs";

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  @Input() user: User;

  observableWorkingConditions : Observable<WorkingCondition[]>;

  constructor(private workingConditionsService: WorkingConditionsService) { }

  ngOnInit(): void {

    this.observableWorkingConditions = this.workingConditionsService.getWorkingconditions();

    console.log(this.observableWorkingConditions); 

  }

}
