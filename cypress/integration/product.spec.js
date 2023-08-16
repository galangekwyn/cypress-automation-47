// cypress/integration/product_spec.js
describe('Product Management Test', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.get('[data-test="username"]').type(Cypress.env('standard_user'));
    cy.get('[data-test="password"]').type(Cypress.env('secret_sauce'));
    cy.get('[data-test="login-button"]').click();
    cy.url().should('include', '/inventory.html');
  });

  it('should add a product to the cart successfully', () => {
    cy.get(`[data-test="add-to-cart-${Cypress.env('Sample Product')}"]`).click();
    cy.get('[data-test="shopping-cart"]').click();
    cy.url().should('include', '/cart.html');
    cy.get('.cart_item').should('have.length', 1);
  });

  it('should display an error when adding an invalid product code to the cart', () => {
    cy.get('[data-test="add-to-cart"]').type(Cypress.env('123'));
    cy.get('[data-test="add-to-cart-button"]').click();
    cy.get('.error-message-container').should('be.visible');
  });
});
