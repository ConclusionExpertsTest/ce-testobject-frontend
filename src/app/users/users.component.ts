import {Component, Inject, OnInit} from '@angular/core';
import { Observable } from  'rxjs';
import { UsersService } from './users-service.service';
import { User } from './user';
import {MAT_DIALOG_DATA, MatDialog, MatDialogConfig, MatDialogRef} from '@angular/material/dialog';
import { UserDialogComponent } from './user-dialog/user-dialog.component';
import { DeleteDialogComponent } from '../common/delete-dialog/delete-dialog.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  displayedColumns = ['firstName', 'lastName', 'address', 'occupation', 'workingConditionsId', 'active', 'actions'];

  user: User;
  users: User[];

  usersObservable: Observable<User[]>;

  constructor(private dialog: MatDialog,
              private usersService: UsersService) {  }

  ngOnInit(): void {
    this.usersObservable = this.usersService.getAll();

    this.usersObservable.subscribe((usersInObs) => {
      this.users = usersInObs;
    });
  }

  newUser(): User {
    return this.user = new User();
  }

  openUserDialog(user): void {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '400px';
    dialogConfig.data = user;

    const dialogRef = this.dialog.open(UserDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      this.ngOnInit();
    });
  }

  openDeleteDialog(id): void {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '400px';
    dialogConfig.data = 'Do you really wish to delete the user?';

    const dialogRef = this.dialog.open(DeleteDialogComponent, dialogConfig);
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
