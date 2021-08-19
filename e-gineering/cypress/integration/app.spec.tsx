/// <reference types="cypress" />

it.only("should display the heading", () => {
  cy.visit("http://localhost:3000");
  cy.findByRole("heading", { name: "Pantry Manager" });
});

it("should support adding and deleting a food", () => {
  cy.visit("http://localhost:3000");
  cy.findByText("Add Food").click();
  cy.findByLabelText("Name").type("Cucumber");
  cy.findByLabelText("Type").select("Vegetable");
  cy.findByText("Save Food").click();
  cy.findByLabelText("Delete Cucumber").click();
  cy.findByLabelText("Delete Cucumber").should("not.exist");
});
