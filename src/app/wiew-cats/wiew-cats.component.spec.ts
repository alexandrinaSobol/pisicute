import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WiewCatsComponent } from './wiew-cats.component';

describe('WiewCatsComponent', () => {
  let component: WiewCatsComponent;
  let fixture: ComponentFixture<WiewCatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WiewCatsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WiewCatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
