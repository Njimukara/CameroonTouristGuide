import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { RegionHomeComponent } from './region-home/region-home.component';
import { regionRoutes } from './region.routes.component';

@NgModule({
  declarations: [RegionHomeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(regionRoutes)
  ]
})
export class RegionModule { }
