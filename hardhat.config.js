require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: "0.8.28",
  networks: {
    localhost: {
      url: "http://127.0.0.1:8545",  // This should be where your local Hardhat network is running
      accounts: ["0x47e179ec197488593b187f80a00eb0da91f1b9d0b13f8733639f19c30a34926a"]  // If you want to specify a specific account, you can use a private key (optional)
    }
  },
};