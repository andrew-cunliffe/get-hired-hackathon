import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JobsService } from '../../jobs.service';

@Component({
    templateUrl: './jobs.component.html',
    styleUrls: ['./jobs.component.scss']
})
export class JobsComponent implements OnInit {

    public index: number;

    public listOfJobs = [
        { title: 'Database & Inventory Officer', skill: ['Excellence', 'Honesty', 'Respect'], percent: 98 },
        { title: 'Events Coordinator', skill: ['Arts Collaboration', 'Community', 'Creativity'], percent: 97 },
        { title: 'Positive Behaviour Support Worker', skill: ['Social Care', 'Creativity'], percent: 93 },
        { title: 'Camden & Islington Floating Support Workers', skill: ['Voluntary', 'Community'], percent: 88 },
        { title: 'Events Coordinator', skill: ['Charity', 'Community'], percent: 87 },
        { title: 'Fundraising Coordinator', skill: ['Arts Collaboration', 'Community', 'Creativity'], percent: 83 },
    ];

    constructor(
        private route: ActivatedRoute,
        private jobService: JobsService,
    ) { }

    ngOnInit(): void {
        this.index = this.route.snapshot.data.index;

        this.jobService.updateJobs((this.index + 1) * 4.26 * 3);
        this.jobService.updateComplete(this.index);
    }

}
