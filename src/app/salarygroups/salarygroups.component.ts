import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {MatTableDataSource} from '@angular/material/table';
import {CompanyLaptop} from '../common/domain/companylaptop';
import {Observable} from 'rxjs';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {SalaryGroup} from '../common/domain/salarygroup';
import {WorkingConditionsService} from '../working-conditions/working-conditions.service';
import {CompanylaptopsDialogComponent} from '../companylaptops/companylaptops-dialog/companylaptops-dialog.component';
import {SalarygroupsDialogComponent} from './salarygroups-dialog/salarygroups-dialog.component';

@Component({
  selector: 'app-salarygroups',
  templateUrl: './salarygroups.component.html',
  styleUrls: ['./salarygroups.component.css']
})
export class SalarygroupsComponent implements OnInit {

  dialogConfig = new MatDialogConfig();

  displayedColumns = ['id', 'salaryGroupCode', 'minAmount', 'maxAmount', 'actions'];

  // Table data sources
  salaryGroups: MatTableDataSource<SalaryGroup>;

  observableSalaryGroups: Observable<SalaryGroup[]>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private dialog: MatDialog,
              private workingConditionsService: WorkingConditionsService) { }

  ngOnInit(): void {
    this.dialogConfig.disableClose = true;
    this.dialogConfig.autoFocus = true;

    this.observableSalaryGroups = this.workingConditionsService.getAllSalaryGroups();

    this.observableSalaryGroups.subscribe((sgs) => {
      this.salaryGroups = new MatTableDataSource(sgs);
      this.salaryGroups.paginator = this.paginator;
      this.salaryGroups.sort = this.sort;
    });
  }

  newSalaryGroup(): SalaryGroup {
    return new SalaryGroup();
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.salaryGroups.filter = filterValue.trim().toLowerCase();

    if (this.salaryGroups.paginator) {
      this.salaryGroups.paginator.firstPage();
    }
  }

  openSgDialog(sg): void {
    this.dialogConfig.data = sg;

    const dialogRef = this.dialog.open(SalarygroupsDialogComponent, this.dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      this.ngOnInit();
    });
  }

  refresh(): void {
    this.ngOnInit();
  }

}
