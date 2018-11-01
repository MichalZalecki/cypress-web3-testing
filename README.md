# cypress-web3-testing

## Setup

In 1st tab

    npm i -g truffle ganache-cli parcel-bundler
    ganache-cli -m "stamp polar cup smart ill agree human episode reform trigger text forget" -i 5777

In 2nd tab

    cd contracts && truffle migrate --network ganache
    cd dapp && npm i && parcel serve index.html

Run tests

    cd dapp && npx cypress open
