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
            return this.competitors;
        }
        let data = await this.API.getCompetitors();
        this.saveCompetitors(data);
        return data;
    }

    public async getCompetitorRatings(handle) {
        if(this.competitorRatingsStatus[handle] == DataStatus.READY) {
            return this.competitorRatings[handle];
        }
        let data = await this.API.getCompetitorRatings(handle);
        this.saveCompetitorRatings(handle, data);
        return data;
    }

}