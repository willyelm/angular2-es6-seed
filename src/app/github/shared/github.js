import { Injectable } from '@angular/core'
import { Http, URLSearchParams } from '@angular/http'
import 'rxjs/add/operator/map'

@Injectable()
@Reflect.metadata('design:paramtypes', [Http])
export class Github {
  constructor (http) {
    this.http = http
  }

  getUser (userName) {
    return this.makeRequest(`users/${userName}`)
  }

  getReposForUser (userName) {
    return this.makeRequest(`users/${userName}/repos`)
  }

  getRepoForUser (userName, repo) {
    return this.makeRequest(`repos/${userName}/${repo}`)
  }

  makeRequest (path) {
    let params = new URLSearchParams()
    params.set('per_page', '100')
    let url = `https://api.github.com/${path}`
    return this
      .http
      .get(url, {search: params})
      .map((res) => res.json())
  }
}
