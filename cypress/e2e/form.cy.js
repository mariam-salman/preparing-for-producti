describe('Form Tests', () => {
  beforeEach(() => {
    cy.visit('http://localhost:1240'); 
    cy.get('[data-cy="cardset-link"]').click();
    cy.get('#cardset-page').should('have.class', 'active');
  });

  it('✅ Submits Create Set form with valid input (happy path)', () => {
    cy.get('[data-cy="set-name-input"]').type('My New Set');
    cy.get('[data-cy="create-set-submit"]').click();

    cy.get('[data-cy="set-success"]').should('be.visible').and('contain', 'Set created');
  });

  it('❌ Shows error message when submitting empty input (unhappy path)', () => {
    cy.get('[data-cy="set-name-input"]').clear();
    cy.get('[data-cy="create-set-submit"]').click();

    cy.get('[data-cy="set-name-error"]').should('be.visible').and('contain', 'Error');
  });
});
