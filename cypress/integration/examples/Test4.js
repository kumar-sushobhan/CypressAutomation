/// <reference types='Cypress'/>
describe("Checkbox validations", () => {
  it("Test case", () => {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    //cy.get("#checkBoxOption1").click();
    // Validations -
    // Checking behaviour ==> be.
    // Comparing ==> have.
    cy.get("#checkBoxOption1")
      .check()
      .should("be.checked")
      .and("have.value", "option1");
    // Uncheck checkbox
    cy.get("#checkBoxOption1").uncheck().should("not.be.checked");
    cy.get("input[type='checkbox']").check(["option2", "option3"]); //based on value attribute
  });
});
