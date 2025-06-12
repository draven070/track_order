describe('Track Your Order Page', () => {
  it('should track order when valid data is entered', () => {
  cy.visit('https://mart-uat.hamrostack.com/track_orders');
 cy.get('input[placeholder="Enter reference number"]').type('Enter your reference number');
    cy.get('input[placeholder="Enter phone number"]').type('enter your phone number');
    cy.contains('Track Order').click();
    cy.url().should('include', '/track_orders'); 
   
  });
});
