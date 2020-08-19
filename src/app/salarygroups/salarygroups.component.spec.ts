import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalarygroupsComponent } from './salarygroups.component';

describe('SalarygroupsComponent', () => {
  let component: SalarygroupsComponent;
  let fixture: ComponentFixture<SalarygroupsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalarygroupsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalarygroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
