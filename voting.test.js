const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Voting Contract", function () {
    let Voting, voting, deployer, voter1, voter2, admin;

    beforeEach(async function () {
        // Get signers
        [deployer, voter1, voter2, admin] = await ethers.getSigners();

        // Deploy the Voting contract
        Voting = await ethers.getContractFactory("Voting");
        voting = await Voting.deploy(); // Deploy the contract
    });

    it("Should deploy the contract successfully", async function () {
        expect(voting.address).to.properAddress;
    });

    // Additional test cases...
});