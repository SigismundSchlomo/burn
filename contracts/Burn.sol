// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;


contract Burn {
    uint public totalBurned = 0;

    event Burned(address indexed from, uint amount);

    function burn() external payable {
        totalBurned += msg.value;
        address payable zero = payable(address(0));
        zero.transfer(msg.value);
        emit Burned(msg.sender, msg.value);
    }

    function getTotal() external view returns (uint) {
        return totalBurned;
    }
}
