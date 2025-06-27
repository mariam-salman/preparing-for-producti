describe('Form Tests', () => {
  beforeEach(() => {
    cy.visit('http://localhost:1235');
  });

  it('Submits Create Set form with valid input', () => {
    cy.get('[data-cy="cardset-link"]').click();
    cy.get('#cardset-page').should('have.class', 'active');

    cy.get('[data-cy="set-name-input"]').type('My New Set');
    cy.get('[data-cy="create-set-submit"]').click();

    cy.contains('Set created', { timeout: 5000 }).should('exist');
  });

  it('Submits Create Set form with empty input (unhappy path)', () => {
    cy.get('[data-cy="cardset-link"]').click();
    cy.get('#cardset-page').should('have.class', 'active');

    cy.get('[data-cy="set-name-input"]').clear();
    cy.get('[data-cy="create-set-submit"]').click();

    cy.get('[data-cy="set-name-error"]', { timeout: 10000 })
      .should('be.visible')
      .and('contain', 'Error');

    
  });
});
