describe('Home Page', () => {
  it('should be able to view the home ', () => {
    cy.visit('/');

    cy.title().should(
      'eq',
      'Sell Your Lot: Effortless Land Selling Platform for Quick & Profitable Deals'
    );
  });

  it('should open form when click on sell now button', () => {
    cy.visit('/');

    cy.get('[data-cy=hero-cta]').click();

    cy.url().should('include', '/form/location');
  });
});
