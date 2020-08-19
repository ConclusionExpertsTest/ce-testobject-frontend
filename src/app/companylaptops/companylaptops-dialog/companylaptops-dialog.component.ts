import {Component, Inject, OnInit} from '@angular/core';
import {WorkingConditionsService} from '../../working-conditions/working-conditions.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {CompanyLaptop} from '../../common/domain/companylaptop';
import {Operatingsystems} from '../../common/enums/operatingsystems.enum';

@Component({
  selector: 'app-companylaptops-dialog',
  templateUrl: './companylaptops-dialog.component.html',
  styleUrls: ['./companylaptops-dialog.component.css']
})
export class CompanylaptopsDialogComponent implements OnInit {

  operatingSystems = Operatingsystems;
  operatingSystemsOptions = [];

  companyLaptopForm: FormGroup;

  constructor(private workingConditionsService: WorkingConditionsService,
              private fb: FormBuilder,
              @Inject(MAT_DIALOG_DATA) public companyLaptop: CompanyLaptop) { }

  ngOnInit(): void {
    this.operatingSystemsOptions = Object.keys(this.operatingSystems);

    this.companyLaptopForm = this.fb.group({
      companyLaptopTypes: [this.companyLaptop.companyLaptopTypes, [Validators.required]],
      available: [this.companyLaptop.available, [Validators.required]],
      brandAndType: [this.companyLaptop.brandAndType, [Validators.required]],
      memory: [this.companyLaptop.memory, [Validators.required]],
      diskspace: [this.companyLaptop.diskspace, [Validators.required]],
      firstOperatingSystem: [this.companyLaptop.firstOperatingSystem, [Validators.required]],
      secondOperatingSystem: [this.companyLaptop.secondOperatingSystem]
    });
  }

  updateCompanyLaptop(): void {
    this.companyLaptop.companyLaptopTypes = this.companyLaptopForm.value.companyLaptopTypes;
    this.companyLaptop.available = this.companyLaptopForm.value.available;
    this.companyLaptop.brandAndType = this.companyLaptopForm.value.brandAndType;
    this.companyLaptop.memory = this.companyLaptopForm.value.memory;
    this.companyLaptop.diskspace = this.companyLaptopForm.value.diskspace;
    this.companyLaptop.firstOperatingSystem = this.companyLaptopForm.value.firstOperatingSystem;
    this.companyLaptop.secondOperatingSystem = this.companyLaptopForm.value.secondOperatingSystem;

    this.workingConditionsService.updateCompanyLaptop(this.companyLaptop.companyLaptopTypes, this.companyLaptop)
      .subscribe(
        response => {
          console.log(response);
        },
        error => {
          console.log(error);
        });
  }

}
