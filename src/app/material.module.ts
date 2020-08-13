import { NgModule } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCheckboxModule } from '@angular/material/checkbox';

let MaterialModules = [
    MatSliderModule,
    MatGridListModule,
    MatCheckboxModule
];

@NgModule({
   imports: MaterialModules,
   exports: MaterialModules,
})
export class MaterialModule {
}