import { Routes } from '@angular/router';

import { HomeComponent } from './HomeComponent/homeComponent';
import { StatsCodeforces } from './StatsCodeforces/statsCodeforces';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'stats', children: [
        {path: 'codeforces', component: StatsCodeforces },
    ]},
];