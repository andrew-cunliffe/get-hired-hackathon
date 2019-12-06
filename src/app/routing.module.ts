import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ApplicantComponent } from './applicant/applicant.component';
import { FindComponent } from './applicant/find/find.component';
import { JobsComponent } from './applicant/jobs/jobs.component';
import { CompleteComponent } from './applicant/complete/complete.component';

const routes: Routes = [
    {
        path: 'applicant',
        component: ApplicantComponent,
        children: [
            {
                path: 'question-one',
                component: FindComponent,
                data: {
                    index: 0,
                    title: 'What are your core strengths?',
                    next: 'question-two',
                }
            },
            {
                path: 'question-two',
                component: FindComponent,
                data: {
                    index: 1,
                    title: 'Which of the following do you enjoy doing?',
                    next: 'question-three',
                }
            },
            {
                path: 'question-three',
                component: FindComponent,
                data: {
                    index: 2,
                    title: 'Describe the environment you are most effective in...',
                    next: 'jobs',
                }
            },
            {
                path: 'jobs',
                component: JobsComponent,
                data: {
                    index: 3,
                }
            },
            {
                path: 'complete',
                component: CompleteComponent,
                data: {
                    index: 4,
                }
            },
        ]
    },
    {
        path: '',
        component: HomeComponent
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes),
    ],
    exports: [
        RouterModule,
    ],
})
export class RoutingModule {
}
