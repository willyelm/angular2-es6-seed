/* eslint-env jasmine */
import {
  async,
  inject,
  TestComponentBuilder
} from '@angular/core/testing'

import {Home} from './home'

describe('Home Component', () => {
  let builder
  beforeEach(inject([TestComponentBuilder], (tcb) => {
    builder = tcb
  }))

  it('should include a header with "Home" title', async(() => {
    builder
      .createAsync(Home)
      .then((fixture) => {
        fixture.detectChanges()
        let element = fixture.debugElement.nativeElement
        let title = element.querySelector('h3')
        expect(element.innerHTML).toContain('Welcome to Angular Seed')
        expect(title.innerHTML).toMatch(/Home Component/)
      })
  }))
})
