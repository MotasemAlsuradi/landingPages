import { Component } from '@angular/core';

@Component({
  selector: 'app-welcom-text',
  standalone: true,
  imports: [],
  template:`
    <h1
      class="text-capitalize fw-semibold fs-2 my-0 lh-base"
      >
      Welcome Back <span id="user-name">Hazem</span> Here are your latest
      updates.
    </h1>
  `
})
export class WelcomTextComponent {}
