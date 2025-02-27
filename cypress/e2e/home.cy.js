describe('Home Page', () => {
  it('should load the home page correctly', () => {
    cy.visit('http://localhost:5173/')
    cy.contains('Your guided path to programming enlightenment').should('exist')
  })
})

describe('Home Page', () => {
  it('should load the home page correctly', () => {
    cy.visit('http://localhost:5173/')
    cy.get('button').contains('Begin Journey').should('exist')
    cy.get('img[src="/lrnr.png"]').should('exist')
  })
})
