// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { LandingComponent } from './landing/landing.component';
import { SignupFollowUpComponent } from './signup-follow-up/signup-follow-up.component';
import { DashboardComponent } from './dashboard/dashboard.component';


export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./signup/signup.component').then((m) => m.SignupComponent),
  },
  {
    path: 'signin',
    loadComponent: () =>
      import('./signin/signin.component').then((m) => m.SigninComponent),
  },
  {
    path: 'forgot-password',
    loadComponent: () =>
      import('./forgot-password/forgot-password.component').then(
        (m) => m.ForgotPasswordComponent
      ), // Load the ForgotPasswordComponent
  },
  {
    path: 'signup-follow-up',
    component: SignupFollowUpComponent,
  },
  {
    path: 'reset',
    component: ResetPasswordComponent,
  },
  {
    path: 'landing',
    component: LandingComponent,
  },
  {
    path: 'reset-password/:token',
    loadComponent: () =>
      import('./reset-password/reset-password.component').then(
        (m) => m.ResetPasswordComponent
      ),
  },
  // { path: 'feed', component: FeedComponent },
  // { path: 'cards', component: CardsComponent },
  // { path: 'decks', component: DecksComponent },
  // { path: 'logout', component: LogoutComponent },
  { 
    path: 'dashboard', 
    component: DashboardComponent 
  },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
];
