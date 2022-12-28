describe("Header", () => {
  it("links to the correct pages", () => {
    cy.visit("http://localhost:3000")
    cy.get('[data-test="logo"]').click()
    cy.location("pathname").should("eq", "/")
  })
})