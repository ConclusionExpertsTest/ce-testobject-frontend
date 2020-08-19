import {Component, Inject, OnInit} from '@angular/core';
import {WorkingConditionsService} from '../../working-conditions/working-conditions.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {SalaryGroup} from '../../common/domain/salarygroup';

@Component({
  selector: 'app-salarygroups-dialog',
  templateUrl: './salarygroups-dialog.component.html',
  styleUrls: ['./salarygroups-dialog.component.css']
})
export class SalarygroupsDialogComponent implements OnInit {

  salaryGroupForm: FormGroup;

  constructor(private workingConditionsService: WorkingConditionsService,
              private fb: FormBuilder,
              @Inject(MAT_DIALOG_DATA) public salaryGroup: SalaryGroup) {
  }

  ngOnInit(): void {
    this.salaryGroupForm = this.fb.group({
      minAmount: [this.salaryGroup.minAmount, [Validators.required]],
      maxAmount: [this.salaryGroup.maxAmount, [Validators.required]]
    });
  }

  updateSalaryGroup(): void {
    this.salaryGroup.minAmount = this.salaryGroupForm.value.minAmount;
    this.salaryGroup.maxAmount = this.salaryGroupForm.value.maxAmount;

    this.workingConditionsService.updateSalaryGroup(this.salaryGroup.salaryGroupCode, this.salaryGroup)
      .subscribe(
        response => {
          console.log(response);
        },
        error => {
          console.log(error);
        });
  }

}
