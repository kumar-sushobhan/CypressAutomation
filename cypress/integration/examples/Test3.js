/// <reference types='Cypress'/>
describe("My third test", () => {
  it("Test case", () => {
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
    cy.get(".search-keyword").type("ca");
    cy.wait(2000);
    //cy.get(".product:visible").should("have.length", 4);
    // parent child chain
    cy.get(".products").as("productLocator");

    // text of element
    cy.get("@productLocator")
      .find(".product")
      .each(($el, index, $list) => {
        const textVeg = $el.find("h4.product-name").text();
        if (textVeg.includes("Cashew")) {
          cy.wrap($el).find("button").click();
        }
      });
    cy.get("img[alt='Cart']").click();
    cy.contains("PROCEED TO CHECKOUT").click();
    cy.wait(2000);
    cy.contains("Place Order").click();
  });
});
