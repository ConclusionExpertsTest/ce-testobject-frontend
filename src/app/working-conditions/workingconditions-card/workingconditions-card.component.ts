import { Component, OnInit, Input } from '@angular/core';
import { WorkingCondition } from '../classes/workingcondition';
import { Observable } from 'rxjs';
import { CompanyLaptop } from '../classes/companylaptop';
import { SalaryGroup } from '../classes/salarygroup';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { WorkingConditionsService } from '../working-conditions.service';
import { WorkingConditionsComponent } from '../working-conditions.component';

@Component({
  selector: 'app-workingconditions-card',
  templateUrl: './workingconditions-card.component.html',
  styleUrls: ['./workingconditions-card.component.css']
})
export class WorkingconditionsCardComponent implements OnInit {

  workingConditionForm: FormGroup;

  viewDetails = false;
  editMode = false;

  @Input() workingCondition: WorkingCondition;
  observableCompanyLaptop: Observable<CompanyLaptop[]>;
  observableSalaryGroup: Observable<SalaryGroup[]>;

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

  updateWorkingCondition(): void {
    this.workingCondition.salaryGroup = this.workingConditionForm.value.salaryGroup,
      this.workingCondition.companyCar = this.workingConditionForm.value.companyCar,
      this.workingCondition.companyLaptop = this.workingConditionForm.value.companyLaptop

    this.workingConditionsService.updateWorkingcondition(this.workingCondition.id, this.workingCondition)
      .subscribe(
        response => {
          console.log(response);
          this.editMode = false;
          this.workingConditionsComponent.ngOnInit();
        },
        error => {
          console.log(error);
        });
  }

  deleteWorkingCondition(): void {
    this.workingConditionsService.deleteWorkingcondition(this.workingCondition.id)
      .subscribe(
        response => {
          console.log(response);
          this.editMode = false;
          this.workingConditionsComponent.ngOnInit();
        },
        error => {
          console.log(error);
        });
  }

}
