require("@nomicfoundation/hardhat-toolbox");
require("@openzeppelin/hardhat-upgrades");
require("dotenv").config();

module.exports = {
  solidity: "0.8.20",
  networks: {
    polygon: {
      url: "https://polygon-mainnet.g.alchemy.com/v2/jEWKxDZzj7wE0-_DgvV2lVqPKdeORwHj",  // 🔁 Your custom Alchemy RPC
      accounts: [process.env.PRIVATE_KEY],  // 🔑 From .env file
      chainId: 137,  // Polygon Mainnet
    },
  },
  etherscan: {
    apiKey: process.env.POLYGONSCAN_API_KEY,
  },
  sourcify: {
    enabled: false,
  },
};
