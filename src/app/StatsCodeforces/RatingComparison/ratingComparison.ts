import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

import { DataRepository } from '../../Services/data.repository';

import { Chart } from 'chart.js';
import { Data } from '@angular/router/src/config';

@Component ({
    selector: 'rating-comparison-cf',
    templateUrl: 'ratingComparison.html',
    styleUrls: ['ratingComparison.css']
}) export class RatingComparisonCF implements OnInit {

    public componentTitle = 'Codeforces Ratings'; 

    private data = [];
    private chart;
    private startDate;
    private endDate;
    private colors = ['#734488', '#492645','#9FEBEB', 
                        '#9FEBEB', '#D5EEFF', '#78BBE6', '#1B435D',
                        '#302939', '#50595C', '#E99B9B', '#FFD8D8'];

    constructor(private dataRepo: DataRepository) { }

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

    extractDateString(parseDate): string {
        let dd = parseDate.getDate();
        let mm = parseDate.getMonth()+1;
        let yyyy = parseDate.getFullYear();
        if(dd < 10)
            dd = '0'+dd;
        if(mm < 10)
            mm = '0'+mm;
        return dd+'/'+mm+'/'+yyyy;
    }

    updateDates(mini, maxi): void {
        let dateMin = new Date(mini*1000);
        let dateMax = new Date(maxi*1000);
        let startNode: any = document.getElementById('pickerStartInput');
        let endNode: any = document.getElementById('pickerEndInput');
        startNode.value = this.extractDateString(dateMin);
        endNode.value = this.extractDateString(dateMax);

        this.startDate = new Date(dateMin);
        this.endDate = new Date(dateMax);
    }

    parseData(filterRankings): any {
        let maxi = 0;
        let mini = Number.MAX_SAFE_INTEGER;
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
                maxi = Math.max(maxi, parseInt(contestResult.date));
                mini = Math.min(mini, parseInt(contestResult.date));
                return {
                    'x': new Date(parseInt(contestResult.date)*1000),
                    'y': contestResult.rating
                }
            });
            return {
                'label': compData.handle,
                borderColor: this.colors[((idx)%this.colors.length)],
                fill: false,
                data: data
            };
        });
        if(!filterRankings)
            this.updateDates(mini, maxi);
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
        let fetchedData: any = await this.dataRepo.getCompetitors();
        fetchedData.forEach( async (comp) => {
            let competitorData: any = await this.dataRepo.getCompetitorRatings(comp.handle);
            this.data.push(competitorData);
            this.buildChart(false);
        });
    }

    ngOnInit() {
        this.fetchData();
    }
}