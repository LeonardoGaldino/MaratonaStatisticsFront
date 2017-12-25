import { Injectable } from '@angular/core';

import { Locations } from '../enums';

import { BehaviorSubject } from 'rxjs';

@Injectable()
export class LocationService {

    constructor() { }

    public $currentLocation = new BehaviorSubject(Locations.HOME);

    public setLocation(newLocation) {
        this.$currentLocation.next(newLocation);
    }

}