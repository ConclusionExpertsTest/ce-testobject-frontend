import {Component, OnInit, ViewChild} from '@angular/core';
import {Observable} from 'rxjs';
import {UsersService} from './users-service.service';
import {User} from '../common/domain/user';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {UserDialogComponent} from './user-dialog/user-dialog.component';
import {DeleteDialogComponent} from '../common/delete-dialog/delete-dialog.component';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {UserDetailDialogComponent} from './user-detail-dialog/user-detail-dialog.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  dialogConfig = new MatDialogConfig();

  displayedColumns = ['id', 'firstName', 'lastName', 'address', 'occupation', 'workingConditionsId', 'active', 'actions'];

  user: User;
  users: MatTableDataSource<User>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  usersObservable: Observable<User[]>;

  constructor(private dialog: MatDialog,
              private usersService: UsersService) {
  }

  ngOnInit(): void {
    this.dialogConfig.disableClose = true;
    this.dialogConfig.autoFocus = true;

    this.usersObservable = this.usersService.getAll();

    this.usersObservable.subscribe((usersInObs) => {
      this.users = new MatTableDataSource(usersInObs);
      this.users.paginator = this.paginator;
      this.users.sort = this.sort;
    });

  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.users.filter = filterValue.trim().toLowerCase();

    if (this.users.paginator) {
      this.users.paginator.firstPage();
    }
  }

  newUser(): User {
    return this.user = new User();
  }

  openUserDialog(user): void {
    this.dialogConfig.data = user;

    const dialogRef = this.dialog.open(UserDialogComponent, this.dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      this.ngOnInit();
    });
  }

  openUserDetailDialog(user): void {
    this.dialogConfig.data = user;

    const dialogRef = this.dialog.open(UserDetailDialogComponent, this.dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      this.ngOnInit();
    });
  }

  openDeleteDialog(id): void {
    this.dialogConfig.data = 'Do you really wish to delete the user?';

    const dialogRef = this.dialog.open(DeleteDialogComponent, this.dialogConfig);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.deleteUser(id);
      }
    });

  }

  deleteUser(id): void {
    this.usersService.delete(id)
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
