import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faListCheck } from '@fortawesome/free-solid-svg-icons';
import { HistoryCardComponent } from "../../Card/history-card/history-card.component";
import { IHistory } from '../../../Interfaces/ihistory';
import { HistoryDataService } from '../../../Services/history-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-history',
  standalone: true,
  imports: [
    CommonModule,
    FontAwesomeModule,
    HistoryCardComponent,
  ],
  templateUrl: './history.component.html',
  styleUrl: './history.component.css'
})
export class HistoryComponent {
  faListCheck = faListCheck;

  historyData: IHistory[] = [];

  constructor(
    private router: Router,
    private historyDtatService: HistoryDataService
  ){
    this.historyData = this.historyDtatService.getAllHistoryData();
  }

  goToVacationPage(){
    this.router.navigate(['/vacation']);
  }
}
