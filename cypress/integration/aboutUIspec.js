describe("about page",()=>{
    it("should load about page",()=>{
        cy.visit("http://localhost:8001")

        cy.contains("about").click()

        cy.url().should("include", "/about")

        cy.contains("this todo appwas created by <name>")
    })
})