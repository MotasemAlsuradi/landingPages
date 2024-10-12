import { Component, Input } from '@angular/core';
import { IVacation } from '../../../Interfaces/ivacation';

@Component({
  selector: 'app-vacCard',
  standalone: true,
  imports: [],
  templateUrl: './vacCard.component.html',
  styleUrl: './vacCard.component.css'
})
export class VacCardComponent {
  @Input() vacation!: IVacation;
}
