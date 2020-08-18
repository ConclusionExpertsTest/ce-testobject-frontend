import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs';
import {CompanyLaptop} from '../classes/companylaptop';
import {SalaryGroup} from '../classes/salarygroup';
import {WorkingConditionsComponent} from '../working-conditions.component';
import {WorkingConditionsService} from '../working-conditions.service';
import {WorkingCondition} from '../classes/workingcondition';

@Component({
  selector: 'app-new-workingconditions-card',
  templateUrl: './new-workingconditions-card.component.html',
  styleUrls: ['./new-workingconditions-card.component.css']
})
export class NewWorkingconditionsCardComponent implements OnInit {

  newMode = true;

  workingConditionForm: FormGroup;

  observableCompanyLaptop: Observable<CompanyLaptop[]>;
  observableSalaryGroup: Observable<SalaryGroup[]>;

  workingCondition = new WorkingCondition();

  constructor(private workingConditionsComponent: WorkingConditionsComponent,
              private workingConditionsService: WorkingConditionsService,
              private fb: FormBuilder) { }

  ngOnInit(): void {
    this.observableSalaryGroup = this.workingConditionsService.getAllSalaryGroups();
    this.observableCompanyLaptop = this.workingConditionsService.getAllCompanyLaptops();

    this.workingConditionForm = this.fb.group({
      salaryGroup: [this.workingCondition.salaryGroup, [Validators.required]],
      companyCar: [this.workingCondition.companyCar, [Validators.required]],
      companyLaptop: [this.workingCondition.companyLaptop, [Validators.required]]
    });
  }
  addWorkingCondition(): void {
    this.workingCondition.salaryGroup = this.workingConditionForm.value.salaryGroup;
    this.workingCondition.companyCar = this.workingConditionForm.value.companyCar;
    this.workingCondition.companyLaptop = this.workingConditionForm.value.companyLaptop;

    this.workingConditionsService.createWorkingcondition(this.workingCondition)
      .subscribe(
        response => {
          console.log(response);
          this.newMode = false;
          this.workingConditionsComponent.ngOnInit();
        },
        error => {
          console.log(error);
        });
  }

  addAnother(): void {
    this.workingConditionForm.reset('');
    this.newMode = true;
  }

  doneAdding(): void {
    this.cancel();
  }

  cancel(): void {
    window.location.reload();
  }

}
