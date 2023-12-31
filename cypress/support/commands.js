// cypress/support/commands.js
Cypress.Commands.add('login', () => {
    cy.visit('/');
    cy.get('[data-test="username"]').type(Cypress.env('validUsername'));
    cy.get('[data-test="password"]').type(Cypress.env('validPassword'));
    cy.get('[data-test="login-button"]').click();
    cy.url().should('include', '/inventory.html');
  });
  