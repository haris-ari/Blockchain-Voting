const { ethers } = require(“hardhat”);
const fs = require(“fs”);
const path = require(“path”);

async function main() {
const [deployer] = await ethers.getSigners();

console.log(“Deploying contract with the account:”, deployer.address);

const Voting = await ethers.getContractFactory(“Voting”);
const votingContract = await Voting.deploy();

await votingContract.waitForDeployment();

const contractAddress = votingContract.target;
console.log(“Voting contract deployed to:”, contractAddress);

// Save contract address and ABI to frontend config
const artifactPath = path.join(__dirname, “../artifacts/contracts/Voting.sol/Voting.json”);
const artifact = JSON.parse(fs.readFileSync(artifactPath, “utf8”));

const config = {
address: contractAddress,
abi: artifact.abi,
};

const configPath = path.join(__dirname, “../frontend/js/config.js”);
fs.writeFileSync(configPath, const contractConfig = ${JSON.stringify(config, null, 2)};);
console.log(“Contract config saved to frontend/js/config.js”);
}

main().catch((error) => {
console.error(“Error deploying contract:”, error);
process.exitCode = 1;
});