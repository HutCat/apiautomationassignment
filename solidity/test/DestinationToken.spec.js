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
    qchainstackDollarsContract = await tokenFactory.deploy(bridge.address)
    await qchainstackDollarsContract.deployed()
  })

  it('has a name', async function () {
    expect(await qchainstackDollarsContract.name()).to.be.equal(NAME)
  })

  it('has a symbol', async function () {
    expect(await qchainstackDollarsContract.symbol()).to.be.equal(SYMBOL)
  })

  // it(