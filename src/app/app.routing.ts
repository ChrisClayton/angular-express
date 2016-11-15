import { RouterModule, Route } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

const routes: Route[] = [
  { path: '', pathMatch: 'full', redirectTo: 'onboard'},
  { loadChildren: 'app/onboard/onboard.module#OnboardModule', path: 'onboard' },
  { loadChildren: 'app/dashboard/dashboard.module#DashboardModule', path: 'dashboard' },
  { loadChildren: 'app/profile/profile.module#ProfileModule', path: 'profile' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(
  routes,
  {
    useHash: true
  }
);
