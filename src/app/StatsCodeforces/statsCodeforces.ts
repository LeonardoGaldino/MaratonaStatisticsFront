import { Component } from '@angular/core';

import { LocationService } from '../Services/location.service';

import { Section } from '../Section';

import { Locations } from '../enums';

@Component ({
    selector: 'stats-codeforces',
    templateUrl: 'statsCodeforces.html',
    styleUrls: ['statsCodeforces.css']
}) export class StatsCodeforces extends Section {

    public sectionTitle = 'Estatísticas Codeforces';

    constructor(private locationService: LocationService) {
        super(locationService, Locations.CODEFORCES);
    }

}