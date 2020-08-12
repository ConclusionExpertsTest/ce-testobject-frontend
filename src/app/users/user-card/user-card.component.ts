import { Component, OnInit, Input } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {

  editMode: boolean = false;

  @Input() user: User;

  constructor() { }

  ngOnInit(): void {
  
  };

}
