describe('Account Page', () => {
  it('should load the account page successfully', () => {
    cy.contains('Quiz').should('be.visible')
  });
  beforeEach(() => {
    cy.visit('http://localhost:5173/quiz')
  })
})
