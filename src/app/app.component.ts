import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:`
  <nav-bar></nav-bar>
  <router-outlet></router-outlet>
  <footer></footer>
  `
  })
export class AppComponent {
  title = 'internship';
}
