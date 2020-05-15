import { Component } from '@angular/core';

@Component({
    selector: "nav-bar",
    templateUrl: "./navbar.component.html",
    styles: [`
    .nav-div {
        margin-left: 17%; !important,
    }
    .nav-ul li {padding:0 25px;}
    .top-nav {padding-bottom: 2%;}
    .header-links {
        text-align: center;
        padding-top: 5px;
        color: orange;
    }
    .header-links:hover {
        color: blue;
        text-decoration: none;
    }
    li> a.active {color: #F97924;}
    `
    ]
})

export class NavbarComponent {

}
