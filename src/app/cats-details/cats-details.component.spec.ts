import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatsDetailsComponent } from './cats-details.component';

describe('CatsDetailsComponent', () => {
  let component: CatsDetailsComponent;
  let fixture: ComponentFixture<CatsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatsDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
