import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomTextComponent } from './welcom-text.component';

describe('WelcomTextComponent', () => {
  let component: WelcomTextComponent;
  let fixture: ComponentFixture<WelcomTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WelcomTextComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WelcomTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
