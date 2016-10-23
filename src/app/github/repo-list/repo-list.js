import {Component} from '@angular/core'
import {Github} from 'app/github/shared/github'
// import {Observable} from 'rxjs/Observable'
import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'repo-list',
  pipes: [],
  providers: [],
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
      this.userName = params['userName']
      if (this.userName) {
        this.repos = this.github.getReposForUser(this.userName)
      }
    })
  }
}
