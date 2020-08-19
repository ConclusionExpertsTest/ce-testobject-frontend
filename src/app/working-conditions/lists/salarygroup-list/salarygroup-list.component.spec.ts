import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalarygroupListComponent } from './salarygroup-list.component';

describe('SalarygroupListComponent', () => {
  let component: SalarygroupListComponent;
  let fixture: ComponentFixture<SalarygroupListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalarygroupListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalarygroupListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
