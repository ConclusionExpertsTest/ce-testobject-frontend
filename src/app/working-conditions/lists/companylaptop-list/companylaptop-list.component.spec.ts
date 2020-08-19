import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanylaptopListComponent } from './companylaptop-list.component';

describe('CompanylaptopListComponent', () => {
  let component: CompanylaptopListComponent;
  let fixture: ComponentFixture<CompanylaptopListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanylaptopListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanylaptopListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
