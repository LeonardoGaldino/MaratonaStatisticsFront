import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatCheckboxModule, MatSidenavModule } from '@angular/material';

@NgModule({
    imports: [
        NoopAnimationsModule,
        MatButtonModule,
        MatCheckboxModule,
        MatSidenavModule
    ],
    exports: [
        NoopAnimationsModule,
        MatButtonModule,
        MatCheckboxModule,
        MatSidenavModule  
    ]
})
export class MaterialModule { }