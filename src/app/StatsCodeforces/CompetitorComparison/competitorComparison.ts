import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

import { DataRepository } from '../../Services/data.repository';

import { Chart } from 'chart.js';
import { ChartColors } from '../../colors';

@Component ({
    selector: 'competitor-comparison-cf',
    templateUrl: 'competitorComparison.html',
    styleUrls: ['competitorComparison.css']
}) export class CompetitorComparisonCF implements OnInit {

    public componentTitle = 'Competidores Codeforces';
    public canvasId = 'cf-competitors-canvas';

    private data;
    private chart;

    constructor(private dataRepo: DataRepository) { }

    buildChart(): void {
        let canvasNode: any = document.getElementById(this.canvasId);
        var ctx = canvasNode.getContext('2d');

        if(this.chart)
            this.chart.destroy();
        let labels = [];
        let dataSet = this.data.map( (competitor, idx) => {
            labels.push(competitor.handle);
            return {
                label: competitor.handle,
                data: [competitor.rating],
                backgroundColor: ChartColors[(idx%ChartColors.length)],
                hoverBackgroundColor: ChartColors[(idx%ChartColors.length)]
            }
        });

        this.chart = new Chart(ctx, {
            type: 'bar',
            data: {
                datasets: dataSet
            }
        });
    }

    async fetchData() {
        let competitors: any = await this.dataRepo.getCompetitors();
        this.data = competitors
        this.buildChart();
    }

    ngOnInit() {
        this.fetchData();
    }
}