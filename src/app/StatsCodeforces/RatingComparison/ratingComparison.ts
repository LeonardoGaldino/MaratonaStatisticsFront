import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

import { APIService } from '../../Services/api.service';

import { Chart } from 'chart.js';

@Component ({
    selector: 'rating-comparison-cf',
    templateUrl: 'ratingComparison.html',
    styleUrls: ['ratingComparison.css']
}) export class RatingComparisonCF implements OnInit {
    @ViewChild('pickerStart') pickerStart: ElementRef;
    @ViewChild('pickerEnd') pickerEnd: ElementRef;

    private data = [];
    private chart;
    private startDate;
    private endDate;

    private colors = ['rgb(255, 99, 132)', 'rgb(0, 99, 132)',
                        'rgb(44, 132, 111)', 'rgb(255, 0, 11)']

    constructor(private API: APIService) { }

    updateStartDate(event): void {
        this.startDate = (event.value ? new Date(event.value) : null);
        this.validateDates();
    }

    updateEndDate(event): void {
        this.endDate = (event.value ? new Date(event.value) : null);
        this.validateDates();
    }

    validateDates(): void {
        if(this.startDate && this.endDate && (this.startDate < this.endDate)) {
            this.buildChart(true);
        }
    }

    parseData(filterRankings): any {
        let datasets = this.data.map( (compData, idx) => {
            let temp;
            if(filterRankings) {
                temp = compData.data.filter( (ranking)=> {
                    let curDate = new Date(parseInt(ranking.date)*1000);
                    return (curDate.getTime() >= this.startDate.getTime() && 
                            curDate.getTime() <= this.endDate.getTime());
                });
            }
            else
                temp = compData.data;
            let data = temp.map( (contestResult) => {
                return {
                    'x': new Date(parseInt(contestResult.date)*1000),
                    'y': contestResult.rating
                }
            });
            return {
                'label': compData.handle,
                borderColor: this.colors[idx],
                fill: false,
                data: data
            };
        });

        return datasets;
    }

    buildChart(filterRankings): void {
        let canvasNode: any = document.getElementById('chart-canvas');
        var ctx = canvasNode.getContext('2d');

        let datasets = this.parseData(filterRankings);

        if(this.chart)
            this.chart.destroy();
            
        this.chart = new Chart(ctx, {
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

    async fetchData() {
        let fetchedData: any = await this.API.getCompetitors();
        fetchedData.forEach( async (comp) => {
            let competitorData: any = await this.API.getCompetitorRatings(comp.handle);
            this.data.push(competitorData);
            this.buildChart(false);
        });
    }

    ngOnInit() {
        this.fetchData();
    }
}