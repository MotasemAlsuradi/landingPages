import { Component } from '@angular/core';
import { EmployeeComponent } from "../../Employee/employee/employee.component";
import { HistoryComponent } from "../history/history.component";
import { PendingRequestsComponent } from "../pending-requests/pending-requests.component";

@Component({
  selector: 'app-profiles',
  standalone: true,
  imports: [
    EmployeeComponent,
    HistoryComponent,
    PendingRequestsComponent
  ],
  templateUrl: './profiles.component.html'
})
export class ProfilesComponent {

}
