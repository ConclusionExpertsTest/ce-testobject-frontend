import { Component, OnInit, Input } from '@angular/core';
import { User } from '../user';
import { WorkingConditionsService } from 'src/app/working-conditions/working-conditions.service';
import { WorkingCondition } from '../../working-conditions/classes/workingcondition';
import { Observable } from 'rxjs';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UsersService } from '../users-service.service';
import { UsersComponent } from '../users.component';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {

  observableWorkingConditions: Observable<WorkingCondition[]>;

  userForm: FormGroup;

  viewDetails = false;
  editMode = false;
  allDetailsMode = false;

  @Input() user: User;

  constructor(private workingConditionsService: WorkingConditionsService,
              private usersService: UsersService,
              private fb: FormBuilder,
              private usersComponent: UsersComponent) { }

  ngOnInit(): void {
    this.observableWorkingConditions = this.workingConditionsService.getWorkingconditions();

    this.userForm = this.fb.group({
      firstName: [this.user.firstName, [Validators.required]],
      lastName: [this.user.lastName, [Validators.required]],
      address: [this.user.address, [Validators.required]],
      occupation: [this.user.occupation, [Validators.required]],
      workingConditionsId: [this.user.workingConditionsId, [Validators.required]],
      active: [this.user.active, [Validators.required]]
    });
  }

  updateUser(): void {
    this.user.firstName = this.userForm.value.firstName,
      this.user.lastName = this.userForm.value.lastName,
      this.user.address = this.userForm.value.address,
      this.user.occupation = this.userForm.value.occupation,
      this.user.workingConditionsId = this.userForm.value.workingConditionsId,
      this.user.active = this.userForm.value.active;

    this.usersService.update(this.user.id, this.user)
      .subscribe(
        response => {
          console.log(response);
          this.editMode = false;
          this.usersComponent.ngOnInit();
        },
        error => {
          console.log(error);
        });
  }

  deleteUser(): void {
    this.usersService.delete(this.user.id)
      .subscribe(
        response => {
          console.log(response);
          this.editMode = false;
          this.usersComponent.ngOnInit();
        },
        error => {
          console.log(error);
        });
  }
}
