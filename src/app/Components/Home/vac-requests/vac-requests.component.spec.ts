import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VacRequestsComponent } from './vac-requests.component';

describe('VacRequestsComponent', () => {
  let component: VacRequestsComponent;
  let fixture: ComponentFixture<VacRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VacRequestsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VacRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
