import { Component, OnInit, Input } from '@angular/core';
import { WorkingConditionsService } from 'src/app/working-conditions/working-conditions.service';
import { WorkingCondition } from 'src/app/working-conditions/classes/workingcondition';
import { SalaryGroup } from 'src/app/working-conditions/classes/salarygroup';
import { CompanyLaptop } from 'src/app/working-conditions/classes/companylaptop';
import { User } from '../../user';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
 
  observableWorkingConditions: Observable<WorkingCondition[]>;
  observableSalaryGroup: Observable<SalaryGroup[]>;
  observableCompanyLaptop: Observable<CompanyLaptop[]>;

  @Input() user: User;

  constructor(private workingConditionsService: WorkingConditionsService) { }

  ngOnInit(): void {
    this.observableWorkingConditions = this.workingConditionsService.getWorkingconditions();
    this.observableSalaryGroup = this.workingConditionsService.getAllSalaryGroups();
    this.observableCompanyLaptop = this.workingConditionsService.getAllCompanyLaptops();
  }

}
