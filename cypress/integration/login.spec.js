// cypress/integration/login_spec.js
describe('Login Test', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should login successfully with valid credentials', () => {
    cy.get('[data-test="username"]').type(Cypress.env('standard_user'));
    cy.get('[data-test="password"]').type(Cypress.env('secret_sauce'));
    cy.get('[data-test="login-button"]').click();
    cy.url().should('include', '/inventory.html');
  });

  it('should display an error message for invalid credentials', () => {
    cy.get('[data-test="username"]').type(Cypress.env('user'));
    cy.get('[data-test="password"]').type(Cypress.env('admin'));
    cy.get('[data-test="login-button"]').click();
    cy.get('[data-test="error"]').should('be.visible');
  });
});
