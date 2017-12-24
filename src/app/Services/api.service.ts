import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { API_ROUTES } from './services.configs';

@Injectable()
export class APIService {

    constructor(private http: HttpClient) { }

    public async getCompetitors() {
        let data: any = await this.http.get(API_ROUTES.allCompetitors).toPromise();
        return data.content;
    }

    public async getCompetitorData(handle) {
        let data: any = await this.http.get(API_ROUTES.singleCompetitor(handle)).toPromise();
        return data.content;
    }

    public async getCompetitorRatings(handle) {
        let data: any = await this.http.get(API_ROUTES.competitorRatings(handle)).toPromise();
        return {
            'data': data.content,
            'handle': handle
        };
    }

}