/// <reference types='Cypress'/>
describe("My first test", () => {
  it("Test case", () => {
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
    cy.get(".search-keyword").type("ca");
    cy.wait(2000);
    //cy.get(".product:visible").should("have.length", 4);
    // parent child chain
    cy.get(".products").as("productLocator");
    cy.get("@productLocator").find(".product").should("have.length", 4);
    cy.get("@productLocator")
      .find(".product")
      .eq(2)
      .contains("ADD TO CART")
      .click().then(() => {
        console.log("Promise testing");
      })

    // text of element
    cy.get("@productLocator")
      .find(".product")
      .each(($el, index, $list) => {
        const textVeg = $el.find("h4.product-name").text();
        if (textVeg.includes("Cashew")) {
          //$e1.contains("ADD TO CART").click();
          cy.wrap($el).find("button").click();
        }
      });
  });
});
