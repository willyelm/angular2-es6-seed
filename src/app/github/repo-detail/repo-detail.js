import {Component} from '@angular/core'
import {ROUTER_DIRECTIVES, ActivatedRoute, Router} from '@angular/router'
import {Github} from 'app/github/shared/github'

@Component({
  selector: 'repo-detail',
  pipes: [],
  providers: [],
  directives: [ROUTER_DIRECTIVES],
  template: require('./repo-detail.html')
})

@Reflect.metadata('design:paramtypes', [Github, Router, ActivatedRoute])

export class RepoDetail {

  constructor (github, router, route) {
    this.github = github
    this.router = router
    this.route = route
    this.repoDetails = {}
  }

  ngOnInit () {
    this.route.params.subscribe(params => {
      this.org = this.router.routerState.parent(this.route).snapshot.params['org']
      this.repo = params['repo'] || ''
      if (this.repo) {
        this
          .github
          .getRepoForOrg(this.org, this.repo)
          .subscribe(repoDetails => {
            this.repoDetails = repoDetails
          })
      }
    })
  }
}