import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MatButtonModule, 
         MatCheckboxModule, 
         MatSidenavModule,
         MatDatepickerModule,
         MatFormFieldModule,
         MatNativeDateModule,
         MatInputModule,
         MatCardModule,
         MAT_DATE_LOCALE } from '@angular/material';

@NgModule({
    exports: [
        NoopAnimationsModule,
        MatButtonModule,
        MatCheckboxModule,
        MatSidenavModule,
        MatDatepickerModule,
        MatFormFieldModule,
        MatNativeDateModule,
        MatInputModule,
        MatCardModule
    ]
})
export class MaterialModule { }