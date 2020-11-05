/// <reference types="cypress" />
describe('page', () => {
  it('works', () => {
    cy.route2('http://localhost/index.html', {fixture: 'index.html'});
    cy.visit('http://localhost/index.html');
    cy.get("#button").click();
    cy.get("#result").contains('executed');
  })
})
