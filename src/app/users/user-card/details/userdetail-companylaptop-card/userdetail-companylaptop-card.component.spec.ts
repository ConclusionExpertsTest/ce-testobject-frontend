import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserdetailCompanylaptopCardComponent } from './userdetail-companylaptop-card.component';

describe('CompanylaptopComponent', () => {
  let component: UserdetailCompanylaptopCardComponent;
  let fixture: ComponentFixture<UserdetailCompanylaptopCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserdetailCompanylaptopCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserdetailCompanylaptopCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
