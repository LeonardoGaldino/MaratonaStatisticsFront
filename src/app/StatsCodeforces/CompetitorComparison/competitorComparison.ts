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

        this.data.sort( (comp1, comp2) => {
            return (comp1.rating - comp2.rating);
        });

        let dataSet = this.data.map( (competitor, idx) => {
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
        this.data = competitors;
        this.buildChart();
    }

    ngOnInit() {
        this.fetchData();
    }
}