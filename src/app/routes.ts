import { Routes } from '@angular/router';
import { HomeComponent } from './homepage/home.component';
import { SiteDetailsComponent } from './homepage/site-details.component';
import { BookingComponent } from './shared/booking.component';

export const AppRoutes:Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'sites/:id', component: SiteDetailsComponent },
    { path: 'book', component: BookingComponent},
    { path: '', redirectTo: '/home', pathMatch: 'full'},
    { path: 'region', loadChildren: './region/region.module#RegionModule'}
]