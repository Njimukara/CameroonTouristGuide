import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './nav/nabar.component';
import { FooterComponent } from './nav/footer.component';
import { HomeComponent } from './homepage/home.component';
import { TouristicListComponent } from './homepage/touristic-list.component';
import { TouristicThumbnailComponent } from './homepage/touristic-thumbnail.component';
import { SiteService } from './shared/site.service';
import { SiteDetailsComponent } from './homepage/site-details.component';
import { AppBootstrapModule } from './app-bootstrap/app-bootstrap.module';
import { BookingComponent } from './shared/booking.component';
import { AppRoutes } from './routes'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    TouristicListComponent,
    SiteDetailsComponent,
    TouristicThumbnailComponent,
    FooterComponent,
    BookingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(AppRoutes),
    AppBootstrapModule
  ],
  providers: [SiteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
