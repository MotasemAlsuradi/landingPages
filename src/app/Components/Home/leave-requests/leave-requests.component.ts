import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faListCheck } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-leave-requests',
  standalone: true,
  imports: [
    FontAwesomeModule
  ],
  templateUrl: './leave-requests.component.html',
  styleUrl: './leave-requests.component.css'
})
export class LeaveRequestsComponent {
  faListCheck = faListCheck;
}
