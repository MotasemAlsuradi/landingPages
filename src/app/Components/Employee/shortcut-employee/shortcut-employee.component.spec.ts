import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortcutEmployeeComponent } from './shortcut-employee.component';

describe('ShortcutEmployeeComponent', () => {
  let component: ShortcutEmployeeComponent;
  let fixture: ComponentFixture<ShortcutEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShortcutEmployeeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShortcutEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
