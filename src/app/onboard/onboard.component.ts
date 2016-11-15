import { Component } from '@angular/core';

@Component({
  selector: 'app-onboard',
  templateUrl: 'onboard.component.html',
  styles: [':host {display: block; top: 0; position: absolute; color: white; background-color: white; }']
})
export class OnboardComponent {
    showSignup = false;

    showSignupPanel() {
        this.showSignup = (this.showSignup) ? false : true;
        console.log("toggle signup")
     }
}
