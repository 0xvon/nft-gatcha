// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.18;

import "@openzeppelin/contracts/token/ERC721/extensions/IERC721Enumerable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@chainlink/contracts/src/v0.8/VRFConsumerBase.sol";
import "@chainlink/contracts/src/v0.8/interfaces/LinkTokenInterface.sol";

contract NFTGacha is VRFConsumerBase, Ownable {
    uint256 public fee;
    bytes32 public keyHash;
    uint256 public randomResult;
    uint256 public tokenId;
    LinkTokenInterface internal LINK;

    IERC721Enumerable[] public nftList;

    event GachaResult(address indexed player, uint256 indexed tokenId);

    constructor(
        address vrfCoordinator,
        address linkToken,
        uint256 _fee,
        bytes32 _keyHash
    ) VRFConsumerBase(vrfCoordinator, linkToken) {
        fee = _fee;
        keyHash = _keyHash;
        LINK = LinkTokenInterface(linkToken);
    }

    // add NFT to gatcha
    function addNFT(IERC721Enumerable nft) external onlyOwner {
        nftList.push(nft);
    }

    // remove NFT from gatcha
    function removeNFT(uint256 index) external onlyOwner {
        require(index < nftList.length, "Index out of range");
        nftList[index] = nftList[nftList.length - 1];
        nftList.pop();
    }

    // draw a gatcha
    function playGacha() external {
        require(LINK.transferFrom(msg.sender, address(this), fee), "LINK transfer failed");
        requestRandomness(keyHash, fee);
    }

    function fulfillRandomness(bytes32 requestId, uint256 randomness) internal override {
        randomResult = randomness;
        uint256 nftIndex = randomResult % nftList.length;
        uint256 randomTokenId = randomResult % nftList[nftIndex].balanceOf(address(this));
        uint256 _tokenId = nftList[nftIndex].tokenOfOwnerByIndex(address(this), randomTokenId);

        // verify the zkSNARK proof here

        nftList[nftIndex].safeTransferFrom(address(this), msg.sender, _tokenId);

        emit GachaResult(msg.sender, _tokenId);
    }

    function getNFTList() external view returns (IERC721Enumerable[] memory) {
        return nftList;
    }
}