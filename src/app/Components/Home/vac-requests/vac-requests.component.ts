import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faListCheck } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-vac-requests',
  standalone: true,
  imports: [
    FontAwesomeModule
  ],
  templateUrl: './vac-requests.component.html',
  styleUrl: './vac-requests.component.css'
})
export class VacRequestsComponent {
  faListCheck = faListCheck;
}
