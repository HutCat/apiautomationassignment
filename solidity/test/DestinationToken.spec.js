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

  // it('Stores bridge address on deploy', async function () {
  //   expect(await qchainstackDollarsContract.bridge()).to.be.equal(
  //     bridge.address
  //   )
  // })

  it('Prevents mint method to be called', async function () {
    await expect(
      qchainstackDollarsContract.connect(user2).mint(user2.address, 1000)
    ).to.be.revertedWith(
      'DChainstackDollars: only the bridge can trigger this method!'
    )
  })

  it('Prevents burnFrom method to be called', async function () {
    await expect(
      qchainstackDollarsContract.connect(user2).burnFrom(user2.address, 1000)
    ).to.be.revertedWith(
      'DChainstackDollars: only the bridge can trigger t