import { Injectable } from '@angular/core';

@Injectable()
export class SiteService {
    getSites() {
        return SITES
    }
    getSite(id:number) {
        return SITES.find(site => site.id === id)
    }
}
const SITES = [{
    id: 1,
    name: 'Botanical Garden',
    imageUrl: 'assets/images/topsites1.jpg',
    location: {
        Region: 'South West',
        Division: '',
        Town: 'Buea'
    }
},{
    id: 2,
    name: 'Botanical Garden',
    imageUrl: 'assets/images/topsites2.jpg',
    location: {
        Region: 'South West',
        Division: '',
        Town: 'Buea'
    }
},
{
    id: 3,
    name: 'Botanical Garden',
    imageUrl: 'assets/images/topsites3.jpg',
    location: {
        Region: 'South West',
        Division: '',
        Town: 'Buea'
    }
},{
    id: 4,
    name: 'Botanical Garden',
    imageUrl: 'assets/images/topsites4.jpg',
    location: {
        Region: 'South West',
        Division: '',
        Town: 'Buea'
    }
}
]
