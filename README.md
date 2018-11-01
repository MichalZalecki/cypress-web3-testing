# cypress-web3-testing

This repository shows how simple DApp can be tested with Cypress. [Learn more](https://michalzalecki.com/integration-tests-and-mocking-web3-apps/).

## Setup

In 1st tab

    npm i -g truffle ganache-cli parcel-bundler
    ganache-cli -m "stamp polar cup smart ill agree human episode reform trigger text forget" -i 5777

In 2nd tab

    cd contracts && truffle migrate --network ganache
    cd dapp && npm i && parcel serve index.html

Run tests

    cd dapp && npx cypress open
