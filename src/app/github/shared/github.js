import { Injectable } from '@angular/core'
import { Http, URLSearchParams } from '@angular/http'
import 'rxjs/add/operator/map'

@Injectable()
@Reflect.metadata('design:paramtypes', [Http])
export class Github {
  constructor (http) {
    this.http = http
  }

  getOrg (org) {
    return this.makeRequest(`orgs/${org}`)
  }

  getReposForOrg (org) {
    return this.makeRequest(`orgs/${org}/repos`)
  }

  getRepoForOrg (org, repo) {
    return this.makeRequest(`repos/${org}/${repo}`)
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
