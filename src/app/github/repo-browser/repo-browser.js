import { Component } from '@angular/core'
import { Router } from '@angular/router'
import { Github } from 'app/github/shared/github'

@Component({
  selector: 'repo-browser',
  pipes: [],
  providers: [ Github ],
  template: require('./repo-browser.html')
})

@Reflect.metadata('design:paramtypes', [Router, Github])

export class RepoBrowser {
  constructor (router, github) {
    this.router = router
    this.github = github
  }

  searchForUser (userName) {
    this
      .github
      .getUser(userName)
      .subscribe(({name}) => {
        this.router.navigate(['/github', userName])
      })
  }
}
