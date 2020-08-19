import {Component, Inject, OnInit} from '@angular/core';
import {WorkingConditionsComponent} from '../working-conditions.component';
import {WorkingConditionsService} from '../working-conditions.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs';
import {CompanyLaptop} from '../../common/domain/companylaptop';
import {SalaryGroup} from '../../common/domain/salarygroup';
import {WorkingCondition} from '../../common/domain/workingcondition';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {User} from '../../common/domain/user';

@Component({
  selector: 'app-create-workingconditions-dialog',
  templateUrl: './workingconditions-dialog.component.html',
  styleUrls: ['./workingconditions-dialog.component.css']
})
export class WorkingconditionsDialogComponent implements OnInit {

  newMode = false;

  workingConditionForm: FormGroup;

  observableCompanyLaptop: Observable<CompanyLaptop[]>;
  observableSalaryGroup: Observable<SalaryGroup[]>;

  constructor(private workingConditionsService: WorkingConditionsService,
              private fb: FormBuilder,
              @Inject(MAT_DIALOG_DATA) public workingCondition: WorkingCondition) {
  }

  ngOnInit(): void {
    if (!this.workingCondition.id) {
      this.newMode = true;
    }

    this.observableSalaryGroup = this.workingConditionsService.getAllSalaryGroups();
    this.observableCompanyLaptop = this.workingConditionsService.getAllCompanyLaptops();

    this.workingConditionForm = this.fb.group({
      salaryGroup: [this.workingCondition.salaryGroup, [Validators.required]],
      companyCar: [this.workingCondition.companyCar, [Validators.required]],
      companyLaptop: [this.workingCondition.companyLaptop, [Validators.required]]
    });
  }

  addWorkingCondition(): void {
    this.setValues();

    this.workingConditionsService.createWorkingcondition(this.workingCondition)
      .subscribe(
        response => {
          console.log(response);
        },
        error => {
          console.log(error);
        });
  }

  updateWorkingCondition(): void {
    this.setValues();

    this.workingConditionsService.updateWorkingcondition(this.workingCondition.id, this.workingCondition)
      .subscribe(
        response => {
          console.log(response);
        },
        error => {
          console.log(error);
        });
  }

  setValues(): void {
    this.workingCondition.salaryGroup = this.workingConditionForm.value.salaryGroup;
    this.workingCondition.companyCar = this.workingConditionForm.value.companyCar;
    this.workingCondition.companyLaptop = this.workingConditionForm.value.companyLaptop;
  }

}
