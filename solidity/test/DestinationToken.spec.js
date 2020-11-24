const { expect } = require('chai')

const { ethers } = require('hardhat')

// Import utilities from Test Helpers
const {
  BN,
  expectEvent,
  expectRevert,
  constants,
} = require('@openzeppelin/test-helpers')

let tokenFactory, qchainstackDollarsContract, owner, bridge, user2, user3

const NAME = 'DChainstackDollars'
const SYMBOL = 'D-CHSD'

// Start test block
describe('DChainstackDollars contract', function () {
  before(async function () {
    tokenFactory = await ethers.getContractFactory('DChainstackDollars')
    ;[owner, bridge, user2, user3] = await ethers.getSigners()
    // deploy contract with bridge address
    qchain