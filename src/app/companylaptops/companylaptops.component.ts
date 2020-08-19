import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {MatTableDataSource} from '@angular/material/table';
import {WorkingCondition} from '../common/domain/workingcondition';
import {CompanyLaptop} from '../common/domain/companylaptop';
import {Observable} from 'rxjs';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {WorkingConditionsService} from '../working-conditions/working-conditions.service';
import {WorkingconditionsDialogComponent} from '../working-conditions/workingconditions-dialog/workingconditions-dialog.component';
import {DeleteDialogComponent} from '../common/delete-dialog/delete-dialog.component';
import {CompanylaptopsDialogComponent} from './companylaptops-dialog/companylaptops-dialog.component';

@Component({
  selector: 'app-companylaptops',
  templateUrl: './companylaptops.component.html',
  styleUrls: ['./companylaptops.component.css']
})
export class CompanylaptopsComponent implements OnInit {

  dialogConfig = new MatDialogConfig();

  displayedColumns = ['id', 'companyLaptopTypes', 'available', 'brandAndType', 'memory',
    'diskspace', 'firstOperatingSystem', 'secondOperatingSystem', 'actions'];

  // Table data sources
  companyLaptops: MatTableDataSource<CompanyLaptop>;

  observableCompanyLaptops: Observable<CompanyLaptop[]>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private dialog: MatDialog,
              private workingConditionsService: WorkingConditionsService) { }

  ngOnInit(): void {
    this.dialogConfig.disableClose = true;
    this.dialogConfig.autoFocus = true;

    this.observableCompanyLaptops = this.workingConditionsService.getAllCompanyLaptops();

    this.observableCompanyLaptops.subscribe((cls) => {
      this.companyLaptops = new MatTableDataSource(cls);
      this.companyLaptops.paginator = this.paginator;
      this.companyLaptops.sort = this.sort;
    });
  }

  newCompanyLaptop(): CompanyLaptop {
    return new CompanyLaptop();
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.companyLaptops.filter = filterValue.trim().toLowerCase();

    if (this.companyLaptops.paginator) {
      this.companyLaptops.paginator.firstPage();
    }
  }

  openClDialog(cl): void {
    this.dialogConfig.data = cl;

    const dialogRef = this.dialog.open(CompanylaptopsDialogComponent, this.dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      this.ngOnInit();
    });
  }

  refresh(): void {
    this.ngOnInit();
  }

}
