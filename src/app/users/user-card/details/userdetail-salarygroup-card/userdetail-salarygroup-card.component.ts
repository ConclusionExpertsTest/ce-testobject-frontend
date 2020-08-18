import { Component, OnInit, Input } from '@angular/core';
import { SalaryGroup } from 'src/app/working-conditions/classes/salarygroup';

@Component({
  selector: 'app-userdetail-salarygroup-card',
  templateUrl: './userdetail-salarygroup-card.component.html',
  styleUrls: ['./userdetail-salarygroup-card.component.css']
})
export class UserdetailSalarygroupCardComponent implements OnInit {

  @Input() salaryGroup: SalaryGroup;

  constructor() { }

  ngOnInit(): void {
  }

}
