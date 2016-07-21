import {provideRouter} from '@angular/router'
import {Home} from './home/home'
import {About} from './about/about'
import {RepoBrowser} from './github/repo-browser/repo-browser'
import {RepoList} from './github/repo-list/repo-list'
import {RepoDetail} from './github/repo-detail/repo-detail'

const routes = [
  { path: '', redirectTo: 'home', terminal: true },
  { path: 'home', component: Home },
  { path: 'about', component: About },
  { path: 'github', component: RepoBrowser, children: [
    { path: ':userName', component: RepoList, children: [
      { path: ':repo', component: RepoDetail },
      { path: '', component: RepoDetail }
    ]},
    { path: '', component: RepoList }
  ]}
]

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
]
