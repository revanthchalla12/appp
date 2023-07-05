import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { SignupPageComponent } from './signup-page/signup-page.component';

import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { SubmissionsComponent } from './submissions/submissions.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { InterviewsComponent } from './interviews/interviews.component';
import { AssignmentsComponent } from './assignments/assignments.component';


@NgModule({
  declarations: [												
    AppComponent,
      LoginPageComponent,
      SignupPageComponent,
      NavbarComponent,
      SubmissionsComponent,
      HomeComponent,
      ProfileComponent,
      DashboardComponent,
      SettingsComponent,
      InterviewsComponent,
      AssignmentsComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
