import { Component, OnInit } from '@angular/core';

import { LocationService } from '../Services/location.service';

import { Section } from '../Section';
import { Cards } from './Cards';

import { Locations } from '../enums';

@Component ({
    selector: 'home-component',
    templateUrl: 'homeComponent.html',
    styleUrls: ['homeComponent.css']
}) export class HomeComponent extends Section {

    public cards = [];

    constructor(private locationService: LocationService) {
        super(locationService, Locations.HOME, 'Página Inicial');
        this.cards = Cards;
    }

}