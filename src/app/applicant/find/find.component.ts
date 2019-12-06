import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JobsService } from '../../jobs.service';

@Component({
    templateUrl: './find.component.html',
    styleUrls: [ './find.component.scss' ],
})
export class FindComponent implements OnInit {

    public index: number;
    public question: string;
    public nextStep: string;

    private selections = new Set();

    constructor(
        private route: ActivatedRoute,
        private jobService: JobsService,
    ) { }


    toggleActive(idx: number) {
        if (this.selections.has(idx)) {
            this.selections.delete(idx);
        } else if (this.selections.size < 5) {
            this.selections.add(idx);
        }
    }

    isActive(idx: number): boolean {
        return this.selections.has(idx);
    }

    ngOnInit(): void {
        this.index = this.route.snapshot.data.index;
        this.question = this.route.snapshot.data.title;
        this.nextStep = this.route.snapshot.data.next;

        this.jobService.updateJobs((this.index + 1) * 4.26);
        this.jobService.updateComplete(this.index);
    }
}
