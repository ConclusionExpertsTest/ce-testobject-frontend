import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserdetailSalarygroupCardComponent } from './userdetail-salarygroup-card.component';

describe('SalarygroupComponent', () => {
  let component: UserdetailSalarygroupCardComponent;
  let fixture: ComponentFixture<UserdetailSalarygroupCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserdetailSalarygroupCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserdetailSalarygroupCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
