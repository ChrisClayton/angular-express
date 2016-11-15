import { RouterModule, Route } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { OnboardComponent } from './onboard.component';

const routes: Route[] = [
  {
    path: '',
    component: OnboardComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
