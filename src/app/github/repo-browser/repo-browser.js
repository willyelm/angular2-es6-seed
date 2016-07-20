import { Component } from '@angular/core'
import { Router, ROUTER_DIRECTIVES } from '@angular/router'
import { Github } from 'app/github/shared/github'

@Component({
  selector: 'repo-browser',
  pipes: [],
  providers: [ Github ],
  directives: [ ROUTER_DIRECTIVES ],
  template: require('./repo-browser.html')
})

@Reflect.metadata('design:paramtypes', [Router, Github])

export class RepoBrowser {
  constructor (router, github) {
    this.router = router
    this.github = github
  }

  searchForOrg (orgName) {
    this
      .github
      .getOrg(orgName)
      .subscribe(({name}) => {
        this.router.navigate(['/github', orgName])
      })
  }
}
