describe("Retool", () => {
    it("can create projects", () => {
        const projectName = "Cypress test project";

        cy.request({
            method: "POST",
            url: "/v1/graphql",
            body: {
                query: `
                    mutation{
                        createProject(
                            name: "${projectName}"
                        )
                    }`,
            },
            headers: {
                "X-Hasura-Admin-Secret": Cypress.env("hasuraAdminSecret"),
            },
        })
            .its("body.data.createProject")
            .should("be.a", "string");

        // Let the event sourcing magic happen
        cy.wait(500);

        cy.request("POST", "/v1/graphql", {
            query: "{ projects { name } }",
        })
            .its("body")
            .should("deep.equal", {
                data: {
                    projects: [{ name: projectName }],
                },
            });
    });
});