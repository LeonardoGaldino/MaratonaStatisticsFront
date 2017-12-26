import { Component, AfterViewInit, OnDestroy } from '@angular/core';

import { LocationService } from '../Services/location.service';

import { Locations, IconTypes } from '../enums';

import { TabColors } from '../colors';

@Component ({
    selector: 'sidenav-component',
    templateUrl: 'sidenavComponent.html',
    styleUrls: ['sidenavComponent.css']
}) export class SidenavComponent implements AfterViewInit, OnDestroy {

    constructor(private locationService: LocationService) { }

    public navigationLinks = [{
       'url': '',
       'displayName': 'Início',
       'iconName': 'home',
       'iconType': IconTypes.MATERIAL_ICONS
    }, {
        'url': 'stats/codeforces',
        'displayName': 'Codeforces',
        'iconName': 'codeforces_icon.png',
        'iconType': IconTypes.ASSET
    }];

    private currentLocation = null;
    private locationSubscription = null;

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

    ngOnDestroy(): void {
        if(this.locationSubscription)
            this.locationSubscription.unsubscribe();
    }

}