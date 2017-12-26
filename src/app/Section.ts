import { LocationService } from './Services/location.service';

export class Section {

    private location

    constructor(private locationService: LocationService, location) {
        this.location = location;
        this.locationService.setLocation(this.location);
    }

}