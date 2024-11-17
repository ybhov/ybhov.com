/// <reference types="cypress" />

describe('Navigation', () => {
    it('can navigate between pages', () => {
      cy.visit('/')
      cy.contains('Employment').should('be.visible')
      // cy.contains('Projects').click()
      // cy.url().should('include', '/projects')
      cy.contains('Employment').click()
      cy.url().should('not.include', '/projects')
      cy.contains('Software Engineer Team Lead').should('be.visible')
    })
  
    it('displays correct content on Employment page', () => {
      cy.visit('/')
      cy.contains('Software Engineer Team Lead').should('be.visible')
      cy.contains('Sharpen').should('be.visible')
      cy.contains('June 2024 - Current').should('be.visible')
    })
  
    it('displays social media links', () => {
      cy.visit('/')
      cy.get('a[href="https://github.com/ybhov"]').should('be.visible')
      cy.get('a[href="https://twitter.com/ybhov19"]').should('be.visible')
      cy.get('a[href="https://linkedin.com/in/ianhovde"]').should('be.visible')
    })
  })