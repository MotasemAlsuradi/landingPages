import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCircleUser, faUser, faChartSimple } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shortcut-employee',
  standalone: true,
  imports: [
    FontAwesomeModule
  ],
  templateUrl: './shortcut-employee.component.html',
})
export class ShortcutEmployeeComponent {
  faCircleUser = faCircleUser;
  faUser = faUser;
  faChartSimple = faChartSimple;

  constructor(private router: Router){}

  goToProfilesPage(){
    this.router.navigate(['/profiles']);
  }
}
