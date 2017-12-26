import { Component, OnInit } from '@angular/core';

import { LocationService } from '../Services/location.service';

import { Section } from '../Section';

import { Locations } from '../enums';

@Component ({
    selector: 'home-component',
    templateUrl: 'homeComponent.html',
    styleUrls: ['homeComponent.css']
}) export class HomeComponent extends Section {

    constructor(private locationService: LocationService) {
        super(locationService, Locations.HOME);
    }

}