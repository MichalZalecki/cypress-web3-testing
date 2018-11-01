pragma solidity 0.4.24;

import "truffle/Assert.sol";
import "../contracts/Counter.sol";


contract CounterTest {
  function testClick() public {
    Counter instance = new Counter();
    Assert.equal(instance.clicks(), 0, "clicks are not 0 after creation");
    instance.click();
    Assert.equal(instance.clicks(), 1, "clicks are not 1 after first click");
  }
}
