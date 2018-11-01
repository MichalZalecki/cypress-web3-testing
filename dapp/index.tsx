import * as React from "react";
import ReactDOM from "react-dom";
import Web3 from "web3";
import CounterArtifact from "../contracts/build/contracts/Counter.json";

// @ts-ignore
const web3 = new Web3(window.web3.currentProvider);

const Counter = new web3.eth.Contract(
  CounterArtifact.abi,
  CounterArtifact.networks["5777"].address,
);

class DApp extends React.Component<{}, { clicks: number }> {
  state = {
    clicks: 0
  };

  componentDidMount() {
    (async () => {
      // @ts-ignore
      const { enable } = window.web3.currentProvider;
      if (enable) {
        await enable();
      }
      this.refreshCount();
    })();
  }

  async refreshCount() {
    const clicks = await Counter.methods.clicks().call();
    this.setState({ clicks });
  }

  click = async () => {
    const [account] = await web3.eth.getAccounts();
    await Counter.methods.click().send({ from: account });
    this.refreshCount();
  };

  render() {
    const { clicks } = this.state;

    return (
      <div>
        <div id="clicks">{clicks}</div>
        <button id="click" onClick={this.click}>Click</button>
      </div>
    )
  }
}

ReactDOM.render(<DApp />, document.getElementById("root"));
