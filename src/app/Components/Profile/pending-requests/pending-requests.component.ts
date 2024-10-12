import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faListCheck } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { VacCardComponent } from "../../Card/card/vacCard.component";
import { IVacation } from '../../../Interfaces/ivacation';
import { VacationDataService } from '../../../Services/vacation-data.service';
import { VacPendingCardComponent } from "../../Card/vac-pending-card/vac-pending-card.component";

@Component({
  selector: 'app-pending-requests',
  standalone: true,
  imports: [
    CommonModule,
    FontAwesomeModule,
    VacCardComponent,
    VacPendingCardComponent
],
  templateUrl: './pending-requests.component.html',
  styleUrl: './pending-requests.component.css'
})
export class PendingRequestsComponent {
  faListCheck = faListCheck ;

  top2Vacations: IVacation[] = [];

  constructor(
    private router: Router,
    private vacationDataService: VacationDataService){
      this.top2Vacations = this.vacationDataService.getThe_2TopVacData();
    }

  goToVacationPage(){
    this.router.navigate(['/vacation']);
  }
}
