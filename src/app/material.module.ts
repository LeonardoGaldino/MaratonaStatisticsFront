import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MatButtonModule, 
         MatCheckboxModule, 
         MatSidenavModule,
         MatDatepickerModule,
         MatFormFieldModule,
         MatNativeDateModule,
         MatInputModule } from '@angular/material';

@NgModule({
    exports: [
        NoopAnimationsModule,
        MatButtonModule,
        MatCheckboxModule,
        MatSidenavModule,
        MatDatepickerModule,
        MatFormFieldModule,
        MatNativeDateModule,
        MatInputModule
    ]
})
export class MaterialModule { }