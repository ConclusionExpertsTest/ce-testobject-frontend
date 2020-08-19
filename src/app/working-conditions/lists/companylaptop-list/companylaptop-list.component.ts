import {Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {WorkingCondition} from '../../../common/domain/workingcondition';
import {CompanyLaptop} from '../../../common/domain/companylaptop';
import {WorkingConditionsService} from '../../working-conditions.service';
import {User} from '../../../common/domain/user';

@Component({
  selector: 'app-companylaptop-list',
  templateUrl: './companylaptop-list.component.html',
  styleUrls: ['./companylaptop-list.component.css']
})
export class CompanylaptopListComponent implements OnInit {

  observableWorkingConditions: Observable<WorkingCondition[]>;
  observableCompanyLaptop: Observable<CompanyLaptop[]>;

  @Input() user: User;

  constructor(private workingConditionsService: WorkingConditionsService) { }

  ngOnInit(): void {
    this.observableWorkingConditions = this.workingConditionsService.getWorkingconditions();
    this.observableCompanyLaptop = this.workingConditionsService.getAllCompanyLaptops();
  }

}
