import { Component, OnInit, Input } from '@angular/core';
import { SalaryGroup } from '../classes/salarygroup';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { WorkingConditionsComponent } from '../working-conditions.component';
import { WorkingConditionsService } from '../working-conditions.service';

@Component({
  selector: 'app-salarygroup-card',
  templateUrl: './salarygroup-card.component.html',
  styleUrls: ['./salarygroup-card.component.css']
})
export class SalarygroupCardComponent implements OnInit {

  salaryGroupForm: FormGroup;

  viewDetails: boolean = false;
  editMode: boolean = false;

  @Input() salaryGroup: SalaryGroup;

  constructor(private workingConditionsComponent: WorkingConditionsComponent,
    private workingConditionsService: WorkingConditionsService, 
    private fb: FormBuilder) { }

  ngOnInit(): void {
    this.salaryGroupForm = this.fb.group({
      minAmount: [this.salaryGroup.minAmount, [Validators.required]],
      maxAmount: [this.salaryGroup.maxAmount, [Validators.required]]
    });
  }

  updateSalaryGroup(): void {
      this.salaryGroup.minAmount = this.salaryGroupForm.value.minAmount,
      this.salaryGroup.maxAmount = this.salaryGroupForm.value.maxAmount

    this.workingConditionsService.updateSalaryGroup(this.salaryGroup.salaryGroupCode, this.salaryGroup)
      .subscribe(
        response => {
          console.log(response);
          this.editMode = false;
          this.workingConditionsComponent.ngOnInit();
        },
        error => {
          console.log(error);
        });
  }

}
