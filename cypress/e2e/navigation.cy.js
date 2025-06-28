describe('Navigation Tests', () => {
  beforeEach(() => {
    cy.visit('http://localhost:1240'); 
  });

  it('Navigates to Home page', () => {
    cy.get('[data-cy="home-link"]').click();
    cy.get('#home-page').should('be.visible');
  });

  it('Navigates to Card Set page', () => {
    cy.get('[data-cy="cardset-link"]').click();
    cy.get('#cardset-page').should('be.visible');
  });

  it('Navigates to About page', () => {
    cy.get('[data-cy="about-link"]').click();
    cy.get('#about-page').should('be.visible');
  });
});
