pragma solidity 0.4.24;


contract Counter {
  uint256 public clicks;

  function click() public returns (bool) {
    clicks++;
    return true;
  }
}
