import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalarygroupCardComponent } from './salarygroup-card.component';

describe('SalarygroupComponent', () => {
  let component: SalarygroupCardComponent;
  let fixture: ComponentFixture<SalarygroupCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalarygroupCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalarygroupCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
