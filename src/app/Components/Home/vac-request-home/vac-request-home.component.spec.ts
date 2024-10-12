import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VacRequestHomeComponent } from './vac-request-home.component';

describe('VacRequestHomeComponent', () => {
  let component: VacRequestHomeComponent;
  let fixture: ComponentFixture<VacRequestHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VacRequestHomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VacRequestHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
