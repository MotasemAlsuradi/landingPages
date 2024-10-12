import { Component, Input } from '@angular/core';
import { IHistory } from '../../../Interfaces/ihistory';

@Component({
  selector: 'app-history-card',
  standalone: true,
  imports: [],
  templateUrl: './history-card.component.html',
  styleUrl: './history-card.component.css'
})
export class HistoryCardComponent {
  @Input() record!: IHistory;
}
