import {Home} from './home/home'
import {About} from './about/about'
import {RepoBrowser} from './github/repo-browser/repo-browser'
import {RepoList} from './github/repo-list/repo-list'
import {RepoDetail} from './github/repo-detail/repo-detail'

export const rootRouterConfig = [{
  path: '',
  redirectTo: 'home',
  pathMatch: 'full'
}, {
  path: 'home',
  component: Home
}, {
  path: 'about',
  component: About
}, {
  path: 'github',
  component: RepoBrowser,
  children: [{
    path: '',
    component: RepoList
  }, {
    path: ':userName',
    component: RepoList,
    children: [
      {
        path: '',
        component: RepoDetail
      }, {
        path: ':repo',
        component: RepoDetail
      }
    ]
  }]
}]
