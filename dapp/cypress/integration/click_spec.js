import Web3 from "web3";
import PrivateKeyProvider from "truffle-privatekey-provider";

describe("Clicks", () => {
  it("I can increment number of clicks", () => {
    cy.on("window:before:load", (win) => {
      const provider = new PrivateKeyProvider(
        "d631de5b7e9cf451135896c833187c8b4dc230bf47756a9a2ca4ffccc161175e",
        "http://localhost:8545"
      );
      win.web3 = new Web3(provider);
    });

    cy.visit("http://localhost:1234");

    cy.wait(1000);

    cy.get("#clicks").then($btn => {
      const current = parseInt($btn.text(), 10);
      const expected = current + 1;

      cy.contains("Click").click();
      cy.get("#clicks").contains(expected);
    });
  });
});
