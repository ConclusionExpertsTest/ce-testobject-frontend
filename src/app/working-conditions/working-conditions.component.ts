import {Component, OnInit, ViewChild} from '@angular/core';
import {WorkingConditionsService} from './working-conditions.service';
import {Observable} from 'rxjs';
import {WorkingCondition} from '../common/domain/workingcondition';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {WorkingconditionsDialogComponent} from './workingconditions-dialog/workingconditions-dialog.component';
import {UserDialogComponent} from '../users/user-dialog/user-dialog.component';
import {UserDetailDialogComponent} from '../users/user-detail-dialog/user-detail-dialog.component';
import {DeleteDialogComponent} from '../common/delete-dialog/delete-dialog.component';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {CompanyLaptop} from '../common/domain/companylaptop';

@Component({
  selector: 'app-working-conditions',
  templateUrl: './working-conditions.component.html',
  styleUrls: ['./working-conditions.component.css']
})
export class WorkingConditionsComponent implements OnInit {

  dialogConfig = new MatDialogConfig();

  displayedColumns = ['id', 'salaryGroup', 'companyCar', 'companyLaptop', 'actions'];

  // Table data sources
  workingConditions: MatTableDataSource<WorkingCondition>;

  observableWorkingConditions: Observable<WorkingCondition[]>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private dialog: MatDialog,
              private workingConditionsService: WorkingConditionsService) {
  }

  ngOnInit(): void {
    this.dialogConfig.disableClose = true;
    this.dialogConfig.autoFocus = true;

    this.observableWorkingConditions = this.workingConditionsService.getWorkingconditions();

    this.observableWorkingConditions.subscribe((wcs) => {
      this.workingConditions = new MatTableDataSource(wcs);
      this.workingConditions.paginator = this.paginator;
      this.workingConditions.sort = this.sort;
    });
  }

  newWorkingCondition(): WorkingCondition {
    return new WorkingCondition();
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.workingConditions.filter = filterValue.trim().toLowerCase();

    if (this.workingConditions.paginator) {
      this.workingConditions.paginator.firstPage();
    }
  }

  openWcDialog(wc): void {
    this.dialogConfig.data = wc;

    const dialogRef = this.dialog.open(WorkingconditionsDialogComponent, this.dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      this.ngOnInit();
    });
  }

  openDeleteDialog(id): void {
    this.dialogConfig.data = 'Do you really wish to delete the user?';

    const dialogRef = this.dialog.open(DeleteDialogComponent, this.dialogConfig);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.deleteWorkingCondition(id);
      }
    });

  }

  deleteWorkingCondition(id): void {
    this.workingConditionsService.deleteWorkingcondition(id)
      .subscribe(
        response => {
          console.log(response);
          this.ngOnInit();
        },
        error => {
          console.log(error);
        });
  }

  refresh(): void {
    this.ngOnInit();
  }

}
