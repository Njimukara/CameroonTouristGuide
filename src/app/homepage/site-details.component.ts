import { Component } from '@angular/core';
import { SiteService } from '../shared/site.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    templateUrl:'./site-details.component.html',
    styles:[`
    .image-class img {width: 100%;
         height: 100%;}
    .site-info {margin-right: 15px;
    margin-left: 5%;}
    .describtion {padding-top: 2%;}
    #site-details {padding-top: 2%;}
    `]
})

export class SiteDetailsComponent {
    site: any
    constructor (private siteService: SiteService, private route:ActivatedRoute) {

    }
    ngOnInit() {
        this.site = this.siteService.getSite(+this.route.snapshot.params['id'])
    }
}
