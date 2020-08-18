import { Component, OnInit } from '@angular/core';
import { WorkingConditionsService } from './working-conditions.service';
import { Observable } from 'rxjs';
import { WorkingCondition } from './classes/workingcondition';
import { SalaryGroup } from './classes/salarygroup';
import { CompanyLaptop } from './classes/companylaptop';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CreateWorkingconditionsDialogComponent } from './create-workingconditions-dialog/create-workingconditions-dialog.component';

@Component({
  selector: 'app-working-conditions',
  templateUrl: './working-conditions.component.html',
  styleUrls: ['./working-conditions.component.css']
})
export class WorkingConditionsComponent implements OnInit {

  newMode = false;

  observableWorkingConditions: Observable<WorkingCondition[]>;
  observableSalaryGroup: Observable<SalaryGroup[]>;
  observableCompanyLaptop: Observable<CompanyLaptop[]>;

  constructor(private dialog: MatDialog,
              private workingConditionsService: WorkingConditionsService) { }

  ngOnInit(): void {
    this.observableWorkingConditions = this.workingConditionsService.getWorkingconditions();
    this.observableSalaryGroup = this.workingConditionsService.getAllSalaryGroups();
    this.observableCompanyLaptop = this.workingConditionsService.getAllCompanyLaptops();
  }

  openDialog(): void {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    const dialogRef = this.dialog.open(CreateWorkingconditionsDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      this.ngOnInit();
    });
  }

}
