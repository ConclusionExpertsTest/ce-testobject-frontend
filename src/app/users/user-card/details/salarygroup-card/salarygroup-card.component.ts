import { Component, OnInit, Input } from '@angular/core';
import { SalaryGroup } from 'src/app/working-conditions/classes/salarygroup';

@Component({
  selector: 'app-salarygroup-card',
  templateUrl: './salarygroup-card.component.html',
  styleUrls: ['./salarygroup-card.component.css']
})
export class SalarygroupCardComponent implements OnInit {

  @Input() salaryGroup: SalaryGroup;

  constructor() { }

  ngOnInit(): void {
  }

}
