import { Component } from '@angular/core';

import { APIService } from '../Services/api.service';

import { Chart } from 'chart.js';

@Component ({
    selector: 'stats-codeforces',
    templateUrl: 'statsCodeforces.html',
    styleUrls: ['statsCodeforces.css']
}) export class StatsCodeforces {

    public sectionTitle = 'Estatísticas Codeforces';

}