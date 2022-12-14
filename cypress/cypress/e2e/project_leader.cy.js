describe("As a project leader, I", () => {
    let projectId;
    let leader;
    let budgetId;

    before(() => {
        cy.createUser().then(($user) =>
            cy
                .createProject($user.id, "Project with budget", 1000)
                .then(($projectId) => {
                    cy.getProjectBudget($projectId)
                        .asRegisteredUser($user)
                        .data("projectsByPk.budgets")
                        .its(0)
                        .its("id")
                        .should("be.a", "string")
                        .then(($budgetId) => {
                            projectId = $projectId;
                            leader = $user;
                            budgetId = $budgetId;
                        });
                })
        );
    });

    it("can request a payment from a budget I own", () => {
        cy.createUser().then((contributor) => {
            cy.requestPayment(budgetId, "500", "55000", "{}")
                .asRegisteredUser(leader)
                .data("requestPayment")
                .then((paymentId) => {
                    cy.wait(500);
                    cy.graphqlAsAdmin(
                        `{
                            paymentRequestsByPk(id: "${paymentId}") {
                      id
                    }
                  }`
                    )
                        .data("paymentRequestsByPk.id")
                        .should("be.a", "string");
                })
                .then(() => {
                    cy.wait(500);
                    cy.graphqlAsAdmin(
                        `{
                    budgetsByPk(id:"${budgetId}") {
                      remainingAmount
                    }
                  }`
                    )
                        .data("budgetsByPk.remainingAmount")
                        .should("equal", 500);
                });
        });
    });
});
