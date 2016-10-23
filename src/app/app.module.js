import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import {RouterModule} from '@angular/router'
import {FormsModule} from '@angular/forms'
import {HttpModule} from '@angular/http'
import {LocationStrategy, HashLocationStrategy} from '@angular/common'

import {rootRouterConfig} from './app.routes'
import {AppComponent} from './app'
import {Github} from './github/shared/github'
import {About} from './about/about'
import {Home} from './home/home'
import {RepoBrowser} from './github/repo-browser/repo-browser'
import {RepoList} from './github/repo-list/repo-list'
import {RepoDetail} from './github/repo-detail/repo-detail'

@NgModule({
  declarations: [AppComponent, About, RepoBrowser, RepoList, RepoDetail, Home],
  imports: [BrowserModule, FormsModule, HttpModule, RouterModule.forRoot(rootRouterConfig)],
  providers: [Github, {provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule {

}
