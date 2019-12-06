import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class JobsService {

    public totalJobs = new BehaviorSubject(473);
    public complete = new BehaviorSubject(0);

    updateJobs(ratio): void {
        this.totalJobs.next(Math.round(2000 / ratio));
    }

    updateComplete(ratio): void {
        this.complete.next(ratio * 20);
    }

}
