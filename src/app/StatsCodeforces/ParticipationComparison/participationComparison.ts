import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

import { DataRepository } from '../../Services/data.repository';

import { Chart } from 'chart.js';
import { ChartColors } from '../../colors';

@Component ({
    selector: 'participation-comparison-cf',
    templateUrl: 'participationComparison.html',
    styleUrls: ['participationComparison.css']
}) export class ParticipationComparisonCF implements OnInit {

    public componentTitle = 'Participações Codeforces';
    public canvasId = 'cf-participation-canvas';

    private data = [];
    private chart;

    constructor(private dataRepo: DataRepository) { }

    buildChart(): void {
        let canvasNode: any = document.getElementById(this.canvasId);
        var ctx = canvasNode.getContext('2d');

        if(this.chart)
            this.chart.destroy();

        this.data.sort( (comp1, comp2) => {
            return (comp1.participations - comp2.participations);
        });

        let dataSet = this.data.map( (competitor, idx) => {
            return {
                label: competitor.handle,
                data: [competitor.participations],
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
        competitors.forEach( async (comp) => {
            let participations: any = await this.dataRepo.getCompetitorParticipations(comp.handle);
            this.data.push(participations);
            this.buildChart();
        });
    }

    ngOnInit() {
        this.fetchData();
    }
}