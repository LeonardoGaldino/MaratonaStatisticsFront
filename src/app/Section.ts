import { LocationService } from './Services/location.service';

export class Section {

    public sectionTitle;

    private location;

    constructor(locationService, location, title) {
        this.location = location;
        this.sectionTitle = title;
        locationService.setLocation(this.location);
    }

}