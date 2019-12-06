import { Component, OnInit } from '@angular/core';
import { JobsService } from '../jobs.service';

@Component({
    templateUrl: './applicant.component.html',
    styleUrls: ['./applicant.component.scss']
})
export class ApplicantComponent implements OnInit {

    public totalJobs: number;
    public profileProgress: number;

    constructor(
        private jobService: JobsService
    ) { }

    ngOnInit(): void {
        this.jobService.totalJobs.subscribe((total) => this.totalJobs = total);
        this.jobService.complete.subscribe((profile) => this.profileProgress = profile);
    }

}
