import {Component, Inject, OnInit} from '@angular/core';
import {WorkingConditionsService} from '../../working-conditions/working-conditions.service';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {User} from '../../common/domain/user';
import {Observable} from 'rxjs';
import {WorkingCondition} from '../../common/domain/workingcondition';
import {SalaryGroup} from '../../common/domain/salarygroup';
import {CompanyLaptop} from '../../common/domain/companylaptop';

@Component({
  selector: 'app-user-detail-dialog',
  templateUrl: './user-detail-dialog.component.html',
  styleUrls: ['./user-detail-dialog.component.css']
})
export class UserDetailDialogComponent implements OnInit {

  observableWorkingConditions: Observable<WorkingCondition[]>;
  observableSalaryGroup: Observable<SalaryGroup[]>;
  observableCompanyLaptop: Observable<CompanyLaptop[]>;

  constructor(private workingConditionsService: WorkingConditionsService,
              @Inject(MAT_DIALOG_DATA) public user: User) { }

  ngOnInit(): void {
    this.observableWorkingConditions = this.workingConditionsService.getWorkingconditions();
    this.observableSalaryGroup = this.workingConditionsService.getAllSalaryGroups();
    this.observableCompanyLaptop = this.workingConditionsService.getAllCompanyLaptops();
  }

}
