import { Component, OnInit, Input } from '@angular/core';
import { CompanyLaptop } from '../classes/companylaptop';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { WorkingConditionsComponent } from '../working-conditions.component';
import { WorkingConditionsService } from '../working-conditions.service';
import { Observable } from 'rxjs';
import { Operatingsystems } from './operatingsystems.enum'

@Component({
  selector: 'app-companylaptop-card',
  templateUrl: './companylaptop-card.component.html',
  styleUrls: ['./companylaptop-card.component.css']
})
export class CompanylaptopCardComponent implements OnInit {

  operatingSystems = Operatingsystems;
  operatingSystemsOptions = [];

  observableCompanyLaptop: Observable<CompanyLaptop[]>;

  companyLaptopForm: FormGroup;

  viewDetails: boolean = false;
  editMode: boolean = false;

  @Input() companyLaptop: CompanyLaptop;

  constructor(private workingConditionsComponent: WorkingConditionsComponent,
    private workingConditionsService: WorkingConditionsService,
    private fb: FormBuilder) { }

  ngOnInit(): void {
    this.operatingSystemsOptions = Object.keys(this.operatingSystems);

    this.companyLaptopForm = this.fb.group({
      available: [this.companyLaptop.available, [Validators.required]],
      brandAndType: [this.companyLaptop.brandAndType, [Validators.required]],
      memory: [this.companyLaptop.memory, [Validators.required]],
      diskspace: [this.companyLaptop.diskspace, [Validators.required]],
      firstOperatingSystem: [this.companyLaptop.firstOperatingSystem, [Validators.required]],
      secondOperatingSystem: [this.companyLaptop.secondOperatingSystem, [Validators.required]]
    });
  }

  updateCompanyLaptop(): void {
    this.companyLaptop.available = this.companyLaptopForm.value.available,
    this.companyLaptop.brandAndType = this.companyLaptopForm.value.brandAndType
    this.companyLaptop.memory = this.companyLaptopForm.value.memory,
    this.companyLaptop.diskspace = this.companyLaptopForm.value.diskspace,
    this.companyLaptop.firstOperatingSystem = this.companyLaptopForm.value.firstOperatingSystem,
    this.companyLaptop.secondOperatingSystem = this.companyLaptopForm.value.secondOperatingSystem

    this.workingConditionsService.updateCompanyLaptop(this.companyLaptop.companyLaptopTypes, this.companyLaptop)
      .subscribe(
        response => {
          console.log(response);
          this.editMode = false;
          this.workingConditionsComponent.ngOnInit();
        },
        error => {
          console.log(this.companyLaptop);
          console.log(error);
        });
  }

}
