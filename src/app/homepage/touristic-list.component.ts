import { Component, OnInit } from '@angular/core';
import { SiteService} from '../shared/site.service';

@Component ({
    selector: 'touristic-list',
    template:`
        <div class="container">
            <h2 class="header-top-sites display-4">Top Sites</h2>
            <hr/>
            <div class="row">
                <div *ngFor="let site of sites" class="col-md-3">
                    <touristic-thumbnail  [sites]="site"></touristic-thumbnail>
                </div>
            </div>
        </div>
        <div class="container">
            <h2 class="header-top-sites display-4">Other Sites</h2>
            <hr/>
            <div class="row">
                <div *ngFor="let site of sites" class="col-md-3">
                    <touristic-thumbnail [sites]="site"></touristic-thumbnail>
                </div>
            </div>
        </div>
    `,
    styles:[`
        .header-top-sites { font-size: 2.6em;}
        .container {padding-top: 2%;}
    `]
})

export class TouristicListComponent implements OnInit{
    sites:any[]
    constructor(private siteService: SiteService) {
    }
    ngOnInit() {
        this.sites = this.siteService.getSites()
    }
}
