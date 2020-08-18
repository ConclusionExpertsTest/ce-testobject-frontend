import { Component, OnInit } from '@angular/core';
import {WorkingConditionsComponent} from '../working-conditions.component';
import {WorkingConditionsService} from '../working-conditions.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs';
import {CompanyLaptop} from '../classes/companylaptop';
import {SalaryGroup} from '../classes/salarygroup';
import {WorkingCondition} from '../classes/workingcondition';

@Component({
  selector: 'app-create-workingconditions-dialog',
  templateUrl: './create-workingconditions-dialog.component.html',
  styleUrls: ['./create-workingconditions-dialog.component.css']
})
export class CreateWorkingconditionsDialogComponent implements OnInit {

  workingConditionForm: FormGroup;

  observableCompanyLaptop: Observable<CompanyLaptop[]>;
  observableSalaryGroup: Observable<SalaryGroup[]>;

  workingCondition = new WorkingCondition();

  constructor(private workingConditionsService: WorkingConditionsService,
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
        },
        error => {
          console.log(error);
        });
  }

}
