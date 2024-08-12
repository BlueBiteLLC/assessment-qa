describe('Raffle Form Tests', () => {

  beforeEach(() => {
    cy.visit('https://blue-bite-dev-3.bluebite.io/04425f7c-4fdd-47f6-85b3-b800d12bb9ca'); 
  });

  it('TC001: should not allow users under 18 to submit the form', () => {
    cy.get('#input-3').type('Rajat');
    cy.get('#input-8').type('17'); // Enter an age less than 18
    cy.get('#input-4').type('rajat@example.com');
    cy.get('[type='button']').submit();
    cy.contains('Must be 18 or older to enter.').should('be.visible'); 
  });

  it('TC002: should reset submission count after reloading the page', () => {
    cy.get('#input-3').type('Rajat');
    cy.get('#input-8').type('17'); 
    cy.get('#input-4').type('rajat@example.com');
    cy.get('[type='button']').submit();
    cy.reload();
    cy.get('form').submit();
    cy.contains('You have entered the raffle 1 time').should('be.visible'); 
  });

  it('TC003: should validate that "Name" field is filled with valid value', () => {
    cy.get('#input-3').type('123'); // Invalid name
    cy.get('#input-8').type('25');
    cy.get('#input-4').type('test@example.com');
    cy.get('[type='button']').submit();
    cy.contains('Please enter a valid name').should('be.visible'); 
  });

  it('TC004: should validate email format', () => {
    cy.get('#input-3').type('Test User');
    cy.get('#input-8').type('25');
    cy.get('#input-4').type('test@.com'); 
    cy.get('[type='button']').submit();
    cy.contains('Please enter a valid email').should('be.visible'); // Adjust the error message if needed
  });

  it('TC005: should allow form submission without the reason field', () => {
    cy.get('#input-3').type('Test User');
    cy.get('#input-8').type('25');
    cy.get('#input-4').type('testuser@example.com');
    cy.get('[type='button']').submit();
    cy.contains('Submission Confirmed,Test User').should('be.visible'); // Verify the success message
  });

});
