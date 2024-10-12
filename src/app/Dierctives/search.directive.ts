import { Directive, Output, Input, EventEmitter, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appSearch]',
  standalone: true
})
export class SearchDirective {
  @Output() search: EventEmitter<string> = new EventEmitter();
  @Input() textColor: string = '#247f3e';
  @Input() fontWeight: string = '500'
  @Input() highlightColor: string = '#f1f8ff';

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  @HostListener('input', ['$event.target.value']) onInput(value: string): void {
    this.search.emit(value);
    this.styleSearchText(value);
  }

  private styleSearchText(value: string) {
    const inputElement = this.el.nativeElement;
    this.renderer.setStyle(inputElement, 'color', this.textColor);
    this.renderer.setStyle(inputElement, 'fontWeight', this.fontWeight);

    if (value) {
      this.renderer.setStyle(inputElement, 'backgroundColor', this.highlightColor);
    } else {
      this.renderer.removeStyle(inputElement, 'backgroundColor');
    }
  }
}
