beforeEach(() => {
    cy.visit('http://localhost:3000/login');
    cy.injectAxe();
});

describe('Login page', () => {
    it('should not violate accessibility rules', () => {
        cy.checkA11y();
    });

    it('has no accessibility violations when Login button clicked', () => {
        cy.get('button#login-button').click();
        cy.checkA11y();
    });
});
