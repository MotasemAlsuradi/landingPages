import { Component, Input } from '@angular/core';
import { IVacation } from '../../../Interfaces/ivacation';

@Component({
  selector: 'app-vac-pending-card',
  standalone: true,
  imports: [],
  templateUrl: './vac-pending-card.component.html',
  styleUrl: './vac-pending-card.component.css'
})
export class VacPendingCardComponent {
  @Input() vacation!: IVacation;
}
