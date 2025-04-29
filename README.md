# Blockchain-Based Online Voting System

## Overview
This project implements a **Blockchain-Based Online Voting System** using **Solidity**, **Hardhat**, **Ether.js**, and a simple **frontend** built with **HTML**, **CSS**, and **JavaScript**. The system ensures transparency, immutability, and security by leveraging blockchain technology. It supports functionalities like voter registration, candidate registration (admin-approved), secure voting, and real-time result display.

## Project Structure

```
blockchain-voting/
├── contracts/
│   └── Voting.sol               # Smart contract for voting
├── scripts/
│   ├── deploy.js                # Script to deploy smart contract
│   └── interact.js              # Script to interact with deployed contract
├── test/
│   └── Voting.test.js           # Unit tests for the contract
├── frontend/
│   ├── css/
│   │   └── styles.css          # Stylesheet
│   ├── js/
│   │   ├── app.js              # Connect to blockchain
│   │   ├── voter.js            # Voter registration logic
│   │   ├── candidate.js        # Candidate registration logic
│   │   ├── voting.js           # Voting functionality
│   │   └── results.js          # Result fetching logic
│   ├── index.html               # Home page
│   ├── voter.html               # Voter registration page
│   ├── candidate.html           # Candidate registration/approval page
│   ├── voting.html              # Vote casting page
│   └── results.html             # Results display page
├── artifacts/                   # Auto-generated contract artifacts
├── hardhat.config.js             # Hardhat configuration file
├── package.json                  # Project dependencies
├── README.md                     # Project description
```
