import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faListCheck, faMagnifyingGlass, faFilter, faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { HorizontalCardComponent } from "../../Card/horizontal-card/horizontal-card.component";
import { VacationDataService } from '../../../Services/vacation-data.service';
import { IVacation } from '../../../Interfaces/ivacation';

@Component({
  selector: 'app-vacation',
  standalone: true,
  imports: [
    FontAwesomeModule,
    CommonModule,
    HorizontalCardComponent,
  ],
  templateUrl: './vacation.component.html',
  styleUrls: ['./vacation.component.css']
})
export class VacationComponent {
  faListCheck = faListCheck;
  faMagnifyingGlass = faMagnifyingGlass;
  faFilter = faFilter;
  faAngleLeft = faAngleLeft;
  faAngleRight = faAngleRight;

  private currentPage = 1;
  private itemsPerPage = 12;
  private allVacations: IVacation[] = [];
  private displayedVacations: IVacation[] = [];

  selectedVacationIds: Set<number> = new Set();
  searchTerm: string = '';

  constructor(private vacationDataService: VacationDataService) {
    this.loadAllVacations();
  }

  getCurrentPage(): number {
    return this.currentPage;
  }

  getDisplayedVacations(){
    return this.displayedVacations;
  }

  loadAllVacations() {
    this.allVacations = this.vacationDataService.getAllVacData();
    this.updateDisplayedVacations();
  }

  updateDisplayedVacations() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.displayedVacations = this.allVacations
      .filter(vacation => vacation.name.toLowerCase().includes(this.searchTerm.toLowerCase()))
      .slice(startIndex, endIndex);
  }

  get totalPages(): number {
    return Math.ceil(this.allVacations.length / this.itemsPerPage);
  }

  goToPage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.updateDisplayedVacations();
    }
  }

  goToNextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.updateDisplayedVacations();
    }
  }

  goToPreviousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updateDisplayedVacations();
    }
  }

  // Handle the search input
  onSearch(event: Event) {
    const input = event.target as HTMLInputElement;
    this.searchTerm = input.value;
    this.updateDisplayedVacations();
  }

  // Handle selection of individual vacations
  toggleVacationSelection(vacationId: number) {
    if (this.selectedVacationIds.has(vacationId)) {
      this.selectedVacationIds.delete(vacationId);
    } else {
      this.selectedVacationIds.add(vacationId);
    }
  }

  toggleSelectAll(event: Event) {
    const isChecked = (event.target as HTMLInputElement).checked;

    if (isChecked) {
      this.allVacations.forEach(vacation =>
        this.selectedVacationIds.add(vacation.id));
    } else {
      this.allVacations.forEach(vacation =>
        this.selectedVacationIds.delete(vacation.id));
    }
  }

  isAllSelected(): boolean {
    return this.allVacations.every(vacation =>
      this.selectedVacationIds.has(vacation.id));
  }
}
