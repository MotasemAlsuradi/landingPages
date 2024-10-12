import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewRequestButtonComponent } from './new-request-button.component';

describe('NewRequestButtonComponent', () => {
  let component: NewRequestButtonComponent;
  let fixture: ComponentFixture<NewRequestButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewRequestButtonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewRequestButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
