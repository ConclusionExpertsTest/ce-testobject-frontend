import {Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {WorkingCondition} from '../../classes/workingcondition';
import {SalaryGroup} from '../../classes/salarygroup';
import {WorkingConditionsService} from '../../working-conditions.service';
import {User} from '../../../users/user';

@Component({
  selector: 'app-salarygroup-list',
  templateUrl: './salarygroup-list.component.html',
  styleUrls: ['./salarygroup-list.component.css']
})
export class SalarygroupListComponent implements OnInit {

  observableWorkingConditions: Observable<WorkingCondition[]>;
  observableSalaryGroup: Observable<SalaryGroup[]>;

  @Input() user: User;

  constructor(private workingConditionsService: WorkingConditionsService) { }

  ngOnInit(): void {
    this.observableWorkingConditions = this.workingConditionsService.getWorkingconditions();
    this.observableSalaryGroup = this.workingConditionsService.getAllSalaryGroups();
  }

}
