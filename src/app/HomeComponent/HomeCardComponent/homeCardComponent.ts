import { Component, Input } from '@angular/core';

@Component ({
    selector: 'home-card-component',
    templateUrl: 'homeCardComponent.html',
    styleUrls: ['homeCardComponent.css']
}) export class HomeCardComponent {

    constructor() { }

    @Input() public cardTitleText;
    @Input() public cardContentText;
    @Input() public cardDate;

}