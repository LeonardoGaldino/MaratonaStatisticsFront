import { Component, OnInit } from '@angular/core';

import { LocationService } from '../Services/location.service';

import { Locations } from '../enums';

@Component ({
    selector: 'stats-codeforces',
    templateUrl: 'statsCodeforces.html',
    styleUrls: ['statsCodeforces.css']
}) export class StatsCodeforces implements OnInit {

    public sectionTitle = 'Estatísticas Codeforces';

    constructor(private locationService: LocationService) { }

    ngOnInit(): void {
        this.locationService.setLocation(Locations.CODEFORCES);
    }

}