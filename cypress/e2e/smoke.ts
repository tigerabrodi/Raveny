it('should allow a typical user flow', () => {
  cy.visit('/')

  cy.findByRole('main').within(() => {
    cy.findByRole('link', { name: /search/i }).click()
  })

  cy.findByLabelText(/search recipes/i).type('chicken')

  cy.findByRole('button', { name: /Search/i }).click()

  cy.findAllByRole('link').should('have.length', 14)

  cy.scrollTo('bottom')

  cy.findAllByRole('link').should('have.length', 22)

  cy.findByRole('link', { name: /baked chicken/i }).click()

  cy.findByRole('heading', { name: /baked chicken/i, level: 1 }).should('exist')

  cy.findByRole('heading', { name: /225 Calories/i, level: 2 }).should('exist')
})
