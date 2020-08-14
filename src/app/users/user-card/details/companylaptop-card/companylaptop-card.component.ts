import { Component, OnInit, Input } from '@angular/core';
import { CompanyLaptop } from 'src/app/working-conditions/classes/companylaptop';

@Component({
  selector: 'app-companylaptop-card',
  templateUrl: './companylaptop-card.component.html',
  styleUrls: ['./companylaptop-card.component.css']
})
export class CompanylaptopCardComponent implements OnInit {

  @Input() companyLaptop: CompanyLaptop;

  constructor() { }

  ngOnInit(): void {
  }

}
