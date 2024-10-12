import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IVacation } from '../../../Interfaces/ivacation';

@Component({
  selector: 'app-horizontal-card',
  standalone: true,
  templateUrl: './horizontal-card.component.html',
  styleUrls: ['./horizontal-card.component.css']
})
export class HorizontalCardComponent {
  @Input() vacation!: IVacation;
  @Input() isSelected: boolean = false;
  @Output() selectionChange: EventEmitter<number> = new EventEmitter<number>();

  onCheckboxChange() {
    this.selectionChange.emit(this.vacation.id);
  }
}

