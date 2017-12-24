import { Component, OnInit } from '@angular/core';

import { APIService } from '../Services/api.service';

import { Chart } from 'chart.js';

@Component ({
    selector: 'stats-codeforces',
    templateUrl: 'statsCodeforces.html',
    styleUrls: ['statsCodeforces.css']
}) export class StatsCodeforces implements OnInit {

    private data = [];

    private colors = ['rgb(255, 99, 132)', 'rgb(0, 99, 132)',
                        'rgb(44, 132, 111)', 'rgb(255, 0, 11)']

    constructor(private API: APIService) { }

    buildChart(): void {
        let canvasNode: any = document.getElementById('chart-canvas');
        var ctx = canvasNode.getContext('2d');

        let datasets = this.data.map( (compData, idx) => {
            let data = compData.data.map( (contestResult) => {
                return {
                    'x': new Date(parseInt(contestResult.date)*1000),
                    'y': contestResult.rating
                }
            });
            return {
                'label': compData.handle,
                borderColor: this.colors[idx],
                data: data
            };
        });
        new Chart(ctx, {
            type: 'line',
            data: {
                datasets: datasets
            },
            options: {
                scales: {
                    xAxes: [{
                        type: 'time',
                        time: {
                            displayFormats: {
                                quarters: 'MMM YYYY',
                            },
                            unit: 'month'
                        }
                    }]
                }
            }
        });
    }

    async ngOnInit() {
        let fetchedData: any = await this.API.getCompetitors();
        fetchedData.forEach( async (comp) => {
            let competitorData: any = await this.API.getCompetitorRatings(comp.handle);
            this.data.push(competitorData);
            this.buildChart();
        });
    }
}