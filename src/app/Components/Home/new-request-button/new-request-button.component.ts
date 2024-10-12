import { Component } from '@angular/core';

@Component({
  selector: 'app-new-request-button',
  standalone: true,
  imports: [],
  template:`
    <button
      type="button"
      name="new request"
      id="new-request"
      class="btn btn-main text-capitalize"
    >
      new request
    </button>
  `
})
export class NewRequestButtonComponent {

}
