import { ethers } from "hardhat";

async function main() {
  const Verifier = await ethers.getContractFactory("Verifier");
  const verifier = await Verifier.deploy();

  await verifier.deployed();

  const HideAndSeek = await ethers.getContractFactory("HideAndSeek");
  const hideAndSeek = await HideAndSeek.deploy(verifier.address);

  await hideAndSeek.deployed();

  console.log(
    `Verifier: ${verifier.address}\nHideAndSeek: ${hideAndSeek.address}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
