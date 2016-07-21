/* eslint-env jasmine */
import {
  async,
  inject,
  TestComponentBuilder
} from '@angular/core/testing'

import {About} from './about'

describe('About Component', () => {
  let builder
  beforeEach(inject([TestComponentBuilder], (tcb) => {
    builder = tcb
  }))

  it('should include a header with "About" title', async(() => {
    builder
      .createAsync(About)
      .then((fixture) => {
        fixture.detectChanges()
        let element = fixture.debugElement.nativeElement
        let title = element.querySelector('h3')
        expect(element.innerHTML).toContain('This is the about component!')
        expect(title.innerHTML).toMatch(/About Component/)
      })
  }))
})
