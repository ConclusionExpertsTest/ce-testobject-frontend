import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanylaptopsComponent } from './companylaptops.component';

describe('CompanylaptopsComponent', () => {
  let component: CompanylaptopsComponent;
  let fixture: ComponentFixture<CompanylaptopsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanylaptopsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanylaptopsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
