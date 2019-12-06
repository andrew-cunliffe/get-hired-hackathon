import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule, MatIconModule, MatListModule, MatStepperModule } from '@angular/material';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ApplicantComponent } from './applicant/applicant.component';
import { CompleteComponent } from './applicant/complete/complete.component';
import { FindComponent } from './applicant/find/find.component';
import { JobsComponent } from './applicant/jobs/jobs.component';

import { RoutingModule } from './routing.module';

@NgModule({
    declarations: [
        AppComponent,
        ApplicantComponent,
        CompleteComponent,
        HomeComponent,
        FindComponent,
        JobsComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        RoutingModule,
        MatButtonModule,
        MatIconModule,
        MatStepperModule,
        MatListModule,
    ],
    bootstrap: [ AppComponent ],
})
export class AppModule {
}
