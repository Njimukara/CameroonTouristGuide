import { Component, Input } from '@angular/core';

@Component ({
    selector: 'touristic-thumbnail',
    template: `
        <div class="image">
            <a><img src={{sites.imageUrl}}></a>
        </div>
        <div class="well hoverwell thumbnaill">
            <h4>{{sites.name}}</h4>
            <div>
                <span>location: {{sites.location.Region}}</span>
                <span>&nbsp;</span>
                <span>{{sites.location.Town}}</span>
            </div>
        </div>
    `,
    styles: [`
    .thumbnail { max-height: 210px; max-width: 300px; padding-bottom: 10px}
    .well div {color: #bbb;}
    .image {height: 210px; width: 300px; margin-top: 10px;}
    .image img {
        height: 90%; 
        width: 85%;
        border-radius: 5px;
    }
    `]
})

export class TouristicThumbnailComponent {
    @Input() sites: any 

}