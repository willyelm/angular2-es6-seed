/* eslint-env protractor, jasmine */
'use strict'

describe('my app', () => {
  // Home Component
  describe('home', () => {
    beforeEach(() => {
      browser.get('#/home')
    })

    it('should render view1 when user navigates to /home', () => {
      let homeElement = element.all(by.css('home p')).first()
      expect(homeElement.getText()).toMatch(/Welcome to Angular Seed/)
    })
  })
  // About Component
  describe('about', () => {
    beforeEach(() => {
      browser.get('#/about')
    })

    it('should render view2 when user navigates to /about', () => {
      let aboutElement = element.all(by.css('about p')).first()
      expect(aboutElement.getText()).toMatch(/This is the about component!/)
    })
  })
})
