import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VacPendingCardComponent } from './vac-pending-card.component';

describe('VacPendingCardComponent', () => {
  let component: VacPendingCardComponent;
  let fixture: ComponentFixture<VacPendingCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VacPendingCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VacPendingCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
