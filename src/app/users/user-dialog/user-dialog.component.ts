import {Component, Inject, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {WorkingCondition} from '../../common/domain/workingcondition';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {User} from '../../common/domain/user';
import {UsersService} from '../users-service.service';
import {WorkingConditionsService} from '../../working-conditions/working-conditions.service';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-create-user-dialog',
  templateUrl: './user-dialog.component.html',
  styleUrls: ['./user-dialog.component.css']
})
export class UserDialogComponent implements OnInit {

  newMode = false;

  observableWorkingConditions: Observable<WorkingCondition[]>;

  userForm: FormGroup;

  constructor(private fb: FormBuilder,
              private usersService: UsersService,
              private workingConditionsService: WorkingConditionsService,
              @Inject(MAT_DIALOG_DATA) public user: User,
  ) { }

  ngOnInit(): void {
    this.observableWorkingConditions = this.workingConditionsService.getWorkingconditions();

    if (!this.user.firstName) {
      this.newMode = true;
    }

    this.userForm = this.fb.group({
      firstName: [this.user.firstName, [Validators.required]],
      lastName: [this.user.lastName, [Validators.required]],
      address: [this.user.address, [Validators.required]],
      occupation: [this.user.occupation, [Validators.required]],
      workingConditionsId: [this.user.workingConditionsId, [Validators.required]],
      active: [this.user.active, [Validators.required]]
    });
  }

  addUser(): void {
    this.setValues();

    this.usersService.create(this.user)
      .subscribe(
        response => {
          console.log(response);
        },
        error => {
          console.log(error);
        });
  }

  updateUser(): void {
    this.setValues();

    this.usersService.update(this.user.id, this.user)
      .subscribe(
        response => {
          console.log(response);
        },
        error => {
          console.log(error);
        });
  }

  setValues(): void {
    this.user.firstName = this.userForm.value.firstName;
    this.user.lastName = this.userForm.value.lastName;
    this.user.address = this.userForm.value.address;
    this.user.occupation = this.userForm.value.occupation;
    this.user.workingConditionsId = this.userForm.value.workingConditionsId;
    this.user.active = this.userForm.value.active;
  }

}
