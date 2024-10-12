import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCircleUser, faUser, faChartSimple, faHourglassHalf, faPrescriptionBottleMedical } from '@fortawesome/free-solid-svg-icons';
import { faPagelines } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [
    FontAwesomeModule
  ],
  templateUrl: './employee.component.html'
})
export class EmployeeComponent {
  faCircleUser = faCircleUser;
  faUser = faUser;
  faChartSimple = faChartSimple;
  faHourglassHalf = faHourglassHalf;
  faPagelines = faPagelines;
  faPrescriptionBottleMedical = faPrescriptionBottleMedical;
}
