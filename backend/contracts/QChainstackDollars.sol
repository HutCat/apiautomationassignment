// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "hardhat/console.sol";

// Import ERC20
import {ERC20} from "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import {ERC20Burnable} from "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";

contract QChainstackDollars is ERC20, ERC20Burnable {
    address bridge;

    event TokensMinted(address from, uint256 amount);

    constructor(address _bridge) ERC20("QChainstackDollars", "Q-CHSD") {
        bridge = _bridge;
        consol