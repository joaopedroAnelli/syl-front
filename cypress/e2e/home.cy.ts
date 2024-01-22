describe('Home Page', () => {
  it('should be able to view the home ', () => {
    cy.visit('/');

    cy.title().should(
      'eq',
      'Sell Your Lot: Effortless Land Selling Platform for Quick & Profitable Deals'
    );
  });
});
