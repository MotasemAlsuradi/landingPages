import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VacCardComponent } from './vacCard.component';

describe('CardComponent', () => {
  let component: VacCardComponent;
  let fixture: ComponentFixture<VacCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VacCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VacCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
