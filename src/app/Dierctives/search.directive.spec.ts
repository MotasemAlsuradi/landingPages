import { SearchDirective } from './search.directive';
import { ElementRef, Renderer2 } from '@angular/core';

describe('SearchDirective', () => {
  let elementRef: ElementRef;
  let renderer: Renderer2;

  beforeEach(() => {
    elementRef = new ElementRef(document.createElement('input'));

    renderer = jasmine.createSpyObj('Renderer2', ['setStyle', 'removeStyle']);
  });

  it('should create an instance', () => {
    const directive = new SearchDirective(elementRef, renderer);
    expect(directive).toBeTruthy();
  });
});
