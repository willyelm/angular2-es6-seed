import { Component } from '@angular/core'
import { ROUTER_DIRECTIVES } from '@angular/router'

@Component({
  selector: 'app',
  pipes: [],
  providers: [],
  directives: [ ROUTER_DIRECTIVES ],
  template: require('./app.html'),
  styles: [require('./app.css')]
})
export class App {
  // constructor() {}
}
