const { ethers } = require("hardhat");

async function main() {
  // Update this with the deployed contract address
  const contractAddress = " 0x2910e325cf29dd912e3476b61ef12f49cb931096";

  // Get the Voting contract factory
  const Voting = await ethers.getContractFactory("Voting");

  // Connect to the deployed contract
  const votingContract = Voting.attach(contractAddress);

  // Example: Add candidates (admin only)
  console.log("Adding candidates...");
  await votingContract.addCandidate("Candidate 1");
  await votingContract.addCandidate("Candidate 2");
  console.log("Candidates added.");

  // Example: Retrieve candidates
  console.log("Fetching candidates...");
  const candidates = await votingContract.getCandidates();
  console.log("Candidates:", candidates);

  // Example: Cast a vote
  console.log("Casting a vote...");
  await votingContract.vote("Candidate 1");
  console.log("Vote casted for Candidate 1.");

  // Example: Get votes for a candidate (admin only)
  console.log("Fetching vote count for Candidate 1...");
  const votes = await votingContract.getVotes("Candidate 1");
  console.log("Vote count for Candidate 1:", votes);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error("Error interacting with contract:", error);
    process.exit(1);
  });