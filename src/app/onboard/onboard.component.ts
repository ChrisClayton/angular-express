import { Component } from '@angular/core';

@Component({
  selector: 'app-onboard',
  templateUrl: 'onboard.component.html',
  styles: [':host {display: block; width: 100%; height: 100%; top: 0; position: absolute; color: white; background-color: white; }']
})
export class OnboardComponent {
    showSignup = false;

    showSignupPanel() {
        this.showSignup = (this.showSignup) ? false : true;
     }
}
