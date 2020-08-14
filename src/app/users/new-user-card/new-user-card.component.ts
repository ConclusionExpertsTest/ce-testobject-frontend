import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users-service.service';
import { Observable } from 'rxjs';
import { WorkingConditionsService } from 'src/app/working-conditions/working-conditions.service';
import { WorkingCondition } from 'src/app/working-conditions/classes/workingcondition';
import { User } from '../user';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UsersComponent } from '../users.component';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-new-user-card',
  templateUrl: './new-user-card.component.html',
  styleUrls: ['./new-user-card.component.css']
})
export class NewUserCardComponent implements OnInit {

  newMode: boolean = true;

  observableWorkingConditions : Observable<WorkingCondition[]>;

  userForm: FormGroup;

  user = new User()

  constructor(private usersComponent: UsersComponent,
    private fb: FormBuilder, 
    private usersService: UsersService, 
    private workingConditionsService: WorkingConditionsService,
    private appComponent: AppComponent) { }

  ngOnInit(): void {
    this.observableWorkingConditions = this.workingConditionsService.getWorkingconditions();
    
    this.userForm = this.fb.group({
      firstName: [null, [Validators.required]],
      lastName: [null, [Validators.required]],
      address: [null, [Validators.required]],
      occupation: [null, [Validators.required]],
      workingConditionsId: [0, [Validators.required]],
      active: [true, [Validators.required]]
     });
  }

  addUser(): void {
      this.user.firstName = this.userForm.value.firstName,
      this.user.lastName = this.userForm.value.lastName,
      this.user.address = this.userForm.value.address,
      this.user.occupation = this.userForm.value.occupation,
      this.user.workingConditionsId = this.userForm.value.workingConditionsId,
      this.user.active = this.userForm.value.active

    this.usersService.create(this.user)
      .subscribe(
        response => {
          console.log(response);
          this.newMode = false;
          this.usersComponent.ngOnInit();
        },
        error => {
          console.log(error);
        });
  }

  addAnother(): void {
    this.userForm.reset('');
    this.newMode = true;
  }

  doneAdding(): void {
    this.cancel();
  }

  cancel(): void {
    window.location.reload();
  }

}
 