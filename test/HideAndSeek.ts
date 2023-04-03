import { ethers } from "hardhat";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { expect } from "chai";
import { HideAndSeek, Verifier } from "../types";
import { generateZkp } from "../lib/updateProof";

describe("HideAndSeek", () => {
  let hideAndSeek: HideAndSeek;
  let verifier: Verifier;
  let hider: SignerWithAddress;
  let seeker: SignerWithAddress;
  let hiderAddress: string;
  let seekerAddress: string;

  beforeEach(async () => {
    [hider, seeker] = await ethers.getSigners();
    hiderAddress = await hider.getAddress();
    seekerAddress = await seeker.getAddress();

    // Deploy the Verifier contract
    const VerifierFactory = await ethers.getContractFactory("Verifier");
    verifier = (await VerifierFactory.deploy()) as Verifier;
    await verifier.deployed();

    // Deploy the HideAndSeek contract
    const HideAndSeekFactory = await ethers.getContractFactory("HideAndSeek");
    hideAndSeek = (await HideAndSeekFactory.deploy(verifier.address)) as HideAndSeek;
    await hideAndSeek.deployed();
  });

  it("should deploy the HideAndSeek contract", async () => {
    expect(hideAndSeek.address).to.not.equal(0);
  });

  it("seeker found a hider", async () => {
    // There is no hider
    expect(await hideAndSeek.hider()).to.equal(ethers.constants.AddressZero);

    // Hider join the game
    await hideAndSeek.connect(hider).joinGame();
    expect(await hideAndSeek.hider()).to.equal(hider.address);
    
    // Seeker join the game
    await hideAndSeek.connect(seeker).joinGame();
    expect(await hideAndSeek.seeker()).to.equal(seeker.address);

    // Hider moves
    const { proof, } = await generateZkp(0, 0);
    await hideAndSeek.connect(hider).updateProof(proof);
    const currentProof = await hideAndSeek.currentProof();
    expect(currentProof.pi_a.X.toString()).to.equal(proof.pi_a[0].toString());

    // Seeker moves
    await expect(hideAndSeek.connect(seeker).seekerMove(2, 0))
      .to.emit(hideAndSeek, "SeekerMoved")
      .withArgs(seekerAddress, 2, 0);
    
    // Seeker moves to hider's position
    await expect(hideAndSeek.connect(seeker).seekerMove(0, 0))
      .to.emit(hideAndSeek, "Found")
      .withArgs(seekerAddress);

    // Seeker became hider
    expect(await hideAndSeek.hider()).to.equal(seeker.address); 
  })
});