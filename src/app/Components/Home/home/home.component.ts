import { Component } from '@angular/core';
import { WelcomTextComponent } from "../welcom-text/welcom-text.component";
import { NewRequestButtonComponent } from "../new-request-button/new-request-button.component";
import { VacRequestsComponent } from '../vac-requests/vac-requests.component';
import { LeaveRequestsComponent } from '../leave-requests/leave-requests.component';
import { ImageSliderComponent } from '../image-slider/image-slider.component';
import { VacRequestHomeComponent } from '../vac-request-home/vac-request-home.component';
import { ShortcutEmployeeComponent } from "../../Employee/shortcut-employee/shortcut-employee.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    WelcomTextComponent,
    NewRequestButtonComponent,
    VacRequestsComponent,
    LeaveRequestsComponent,
    ImageSliderComponent,
    VacRequestHomeComponent,
    ShortcutEmployeeComponent
],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {}
