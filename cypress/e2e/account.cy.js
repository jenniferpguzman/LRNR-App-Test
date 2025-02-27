describe('Account Page', () => {
  it('should load the account page successfully', () => {
    cy.contains('Account').should('be.visible')
  });
  beforeEach(() => {
    cy.visit('http://localhost:5173/account')
  })
})
