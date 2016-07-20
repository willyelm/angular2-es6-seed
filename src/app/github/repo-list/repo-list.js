import {Component} from '@angular/core'
import {Github} from 'app/github/shared/github'
// import {Observable} from 'rxjs/Observable'
import {ROUTER_DIRECTIVES, ActivatedRoute} from '@angular/router'

@Component({
  selector: 'repo-list',
  pipes: [],
  providers: [],
  directives: [ ROUTER_DIRECTIVES ],
  template: require('./repo-list.html')
})

@Reflect.metadata('design:paramtypes', [Github, ActivatedRoute])

export class RepoList {
  constructor (github, route) {
    this.github = github
    this.route = route
  }

  ngOnInit () {
    this.route.params.subscribe(params => {
      this.org = params['org']
      if (this.org) {
        this.repos = this.github.getReposForOrg(this.org)
      }
    })
  }
}
