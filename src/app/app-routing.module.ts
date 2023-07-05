import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { SignupPageComponent } from './signup-page/signup-page.component';

import { NavbarComponent } from './navbar/navbar.component';
import { SubmissionsComponent } from './submissions/submissions.component';
import { InterviewsComponent } from './interviews/interviews.component';
import { HomeComponent } from './home/home.component';
import { SettingsComponent } from './settings/settings.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { AssignmentsComponent } from './assignments/assignments.component';

const routes: Routes = [
  
  { path: 'signup', component: SignupPageComponent },
  { path: 'login', component: LoginPageComponent },

 
  {path:'navbar',component:NavbarComponent},
  {
    path:'submission',component:SubmissionsComponent
  },
  {
    path:'interviews',component:InterviewsComponent
  },
  {
    path:'home',component:HomeComponent
  },
  {
    path:'settings',component:SettingsComponent
  },
  {
    path:'dashboard',component:DashboardComponent
  },
  {
    path:'profile',component:ProfileComponent
  },
  {
    path:'assignments',component:AssignmentsComponent
  }

  
  // Redirect to login page for any other routes

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
