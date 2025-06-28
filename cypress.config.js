import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:1240",
    specPattern: "cypress/e2e/*.cy.js",
    supportFile: false
  }
});