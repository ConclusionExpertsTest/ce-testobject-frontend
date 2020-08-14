import { Component, OnInit, Input } from '@angular/core';
import { CompanyLaptop } from 'src/app/working-conditions/classes/companylaptop';

@Component({
  selector: 'app-userdetail-companylaptop-card',
  templateUrl: './userdetail-companylaptop-card.component.html',
  styleUrls: ['./userdetail-companylaptop-card.component.css']
})
export class UserdetailCompanylaptopCardComponent implements OnInit {

  @Input() companyLaptop: CompanyLaptop;

  constructor() { }

  ngOnInit(): void {
  }

}
