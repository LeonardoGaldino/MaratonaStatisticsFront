import { Component } from '@angular/core';

@Component ({
    selector: 'sidenav-component',
    templateUrl: 'sidenavComponent.html',
    styleUrls: ['sidenavComponent.css']
}) export class SidenavComponent {

    navigationLinks = [{
       'url': '',
       'displayName': 'Início' 
    }, {
        'url': 'stats/codeforces',
        'displayName': 'Codeforces'
    }, {
        'url': 'stats/codepitStats',
        'displayName': 'Codepit'        
    }]

}