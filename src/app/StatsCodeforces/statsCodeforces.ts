import { Component, OnInit } from '@angular/core';

import { APIService } from '../Services/api.service';

@Component ({
    selector: 'stats-codeforces',
    templateUrl: 'statsCodeforces.html',
    styleUrls: ['statsCodeforces.css']
}) export class StatsCodeforces implements OnInit {

    constructor(private API: APIService) { }

    async ngOnInit() {
        let c:any = await this.API.getCompetitors();
        c.content.forEach( async (comp) => {
            let x = await this.API.getCompetitorRatings(comp.handle);
            console.log(x);
        });
    }
}