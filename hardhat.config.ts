import * as dotenv from "dotenv";

import { HardhatUserConfig, task } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@typechain/hardhat";
import "hardhat-circom";
import "snarkjs";
import "circom";

dotenv.config();

task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

let accounts;
if (process.env.PRIVATE_KEY) {
  accounts = [process.env.PRIVATE_KEY];
} else {
  accounts = {
    mnemonic: process.env.MNEMONIC || "test test test test test test test test test test test junk",
  };
}

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.18",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    }
  },
  typechain: {
    outDir: "types",
    target: "ethers-v5",
  },
  circom: {
    // (optional) Base path for input files, defaults to `./circuits/`
    inputBasePath: "./zk",
    // (required) The final ptau file, relative to inputBasePath, from a Phase 1 ceremony
    ptau: "./ptau/pot12_final.ptau",
    // (required) Each object in this array refers to a separate circuit
    circuits: [{ name: "circuit" }],
  },
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      allowUnlimitedContractSize: false,
    },
    mumbai: {
      url: `https://polygon-mumbai.infura.io/v3/ddac2247725f422196229bfba8ac3877`,
      accounts,
      chainId: 80001,
    },
  },
};

export default config;
