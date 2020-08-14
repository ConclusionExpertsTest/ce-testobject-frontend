import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanylaptopCardComponent } from './companylaptop-card.component';

describe('CompanylaptopComponent', () => {
  let component: CompanylaptopCardComponent;
  let fixture: ComponentFixture<CompanylaptopCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanylaptopCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanylaptopCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
