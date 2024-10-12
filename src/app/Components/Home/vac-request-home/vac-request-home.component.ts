import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faListCheck, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { VacationDataService } from '../../../Services/vacation-data.service';
import { IVacation } from '../../../Interfaces/ivacation';
import { VacCardComponent } from '../../Card/card/vacCard.component';
import { SearchDirective } from '../../../Dierctives/search.directive';

@Component({
  selector: 'app-vac-request-home',
  standalone: true,
  imports: [
    CommonModule,
    FontAwesomeModule,
    VacCardComponent,
    SearchDirective,
  ],
  templateUrl: './vac-request-home.component.html',
  styleUrls: ['./vac-request-home.component.css']
})
export class VacRequestHomeComponent {
  faListCheck = faListCheck;
  faMagnifyingGlass = faMagnifyingGlass;

  topVacations: IVacation[] = [];
  filteredVacations: IVacation[] = [];

  constructor(
    private vacationDataService: VacationDataService,
    private router: Router
  ) {
    this.topVacations = this.vacationDataService.getThe_4TopVacData();
    this.filteredVacations = this.topVacations;
  }

  goToVacationPage() {
    this.router.navigate(['/vacation']);
  }

  onSearch(searchTerm: string) {
    if (!searchTerm) {
      this.filteredVacations = this.topVacations;
    } else {
      this.filteredVacations = this.topVacations.filter(vacation =>
        vacation.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
  }
}
