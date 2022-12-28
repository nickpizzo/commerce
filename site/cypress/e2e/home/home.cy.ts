describe("Home Page", () => {
  it("displays all 3 products on the home page", () => {
    cy.visit("http://localhost:3000")
    cy.get('[data-test="product-tag"]')
      .eq(0)
      .within(() => {
        cy.get('[data-test="product-name"]').should("contain", "White")
        cy.get('[data-test="product-price"]').should("contain", "$25.00 USD")
      })

    cy.get('[data-test="product-tag"]')
      .eq(1)
      .within(() => {
        cy.get('[data-test="product-name"]').should("contain", "Black")
        cy.get('[data-test="product-price"]').should("contain", "$25.00 USD")
      })

    cy.get('[data-test="product-tag"]')
      .eq(2)
      .within(() => {
        cy.get('[data-test="product-name"]').should("contain", "Red")
        cy.get('[data-test="product-price"]').should("contain", "$25.00 USD")
      })
  })
})