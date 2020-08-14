import { Component, OnInit } from '@angular/core';
import { WorkingConditionsService } from './working-conditions.service';
import { Observable } from 'rxjs';
import { WorkingCondition } from './classes/workingcondition';
import { SalaryGroup } from './classes/salarygroup';
import { CompanyLaptop } from './classes/companylaptop';

@Component({
  selector: 'app-working-conditions',
  templateUrl: './working-conditions.component.html',
  styleUrls: ['./working-conditions.component.css']
})
export class WorkingConditionsComponent implements OnInit {

  observableWorkingConditions: Observable<WorkingCondition[]>;
  observableSalaryGroup: Observable<SalaryGroup[]>;
  observableCompanyLaptop: Observable<CompanyLaptop[]>;

  constructor(private workingConditionsService: WorkingConditionsService) { }

  ngOnInit(): void {
    this.observableWorkingConditions = this.workingConditionsService.getWorkingconditions();
    this.observableSalaryGroup = this.workingConditionsService.getAllSalaryGroups();
    this.observableCompanyLaptop = this.workingConditionsService.getAllCompanyLaptops();
  }

}
