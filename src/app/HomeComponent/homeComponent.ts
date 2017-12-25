import { Component, OnInit } from '@angular/core';

import { LocationService } from '../Services/location.service';

import { Locations } from '../enums';

@Component ({
    selector: 'home-component',
    templateUrl: 'homeComponent.html',
    styleUrls: ['homeComponent.css']
}) export class HomeComponent implements OnInit {

    constructor(private locationService: LocationService) { }

    ngOnInit(): void {
        this.locationService.setLocation(Locations.HOME);
    }

}