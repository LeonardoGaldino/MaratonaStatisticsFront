import { Injectable } from '@angular/core';

import { APIService } from './api.service';

import { DataStatus } from '../enums';

@Injectable()
export class DataRepository {

    public competitors = [];

    public competitorRatings = { };

    public competitorRatingsStatus = { };

    constructor(private API: APIService) { }

    public saveCompetitorRatings(handle, data) {
        this.competitorRatings[handle] = data;
        this.competitorRatingsStatus[handle] = DataStatus.READY;
    }

    public saveCompetitors(competitors) {
        this.competitors = competitors;
    }

    public async getCompetitors() {
        if(this.competitors.length > 0) {
            console.log('avoided 2');
            return this.competitors;
        }
        console.log('fetching 2');
        let data = await this.API.getCompetitors();
        this.saveCompetitors(data);
        return data;
    }

    public async getCompetitorRatings(handle) {
        if(this.competitorRatingsStatus[handle] == DataStatus.READY) {
            console.log('avoided 1');
            return this.competitorRatings[handle];
        }
        console.log('fetching 1');
        let data = await this.API.getCompetitorRatings(handle);
        this.saveCompetitorRatings(handle, data);
        return data;
    }

}