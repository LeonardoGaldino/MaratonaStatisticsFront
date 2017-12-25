import { Component, AfterViewInit } from '@angular/core';

import { LocationService } from '../Services/location.service';

import { Locations } from '../enums';

import { Utils } from '../utils';
import { TabColors } from '../colors';

@Component ({
    selector: 'sidenav-component',
    templateUrl: 'sidenavComponent.html',
    styleUrls: ['sidenavComponent.css']
}) export class SidenavComponent implements AfterViewInit {

    constructor(private locationService: LocationService) { }

    public navigationLinks = [{
       'url': '',
       'displayName': 'Início' 
    }, {
        'url': 'stats/codeforces',
        'displayName': 'Codeforces'
    }];

    private currentLocation = null;

    updateTabBackgroundColor(tabId, on): void {
        let node = document.getElementById(`location${tabId}`);
        node.style.backgroundColor = (on ? TabColors.backgroundOn : TabColors.backgroundOff);
        node.style.color = (on ? TabColors.fontOn : TabColors.fontOff);
    }

    ngAfterViewInit(): void {
        this.locationService.$currentLocation.subscribe( (newLocation) => {
            if(this.currentLocation != null)
                this.updateTabBackgroundColor(this.currentLocation, false);
            this.updateTabBackgroundColor(newLocation, true);
            this.currentLocation = newLocation;
        })
    }

}