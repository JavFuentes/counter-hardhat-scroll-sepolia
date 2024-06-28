require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

const { SCROLL_SEPOLIA_RPC_URL, PRIVATE_KEY } = process.env;

module.exports = {
  solidity: "0.8.24",
  networks: {
    scrollSepolia: {
      url: SCROLL_SEPOLIA_RPC_URL,
      accounts: [`0x${PRIVATE_KEY}`],
    },
  },
};
