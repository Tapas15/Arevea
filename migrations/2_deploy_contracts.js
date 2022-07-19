const NFT = artifacts.require("NFT")
const MultipleNFT = artifacts.require("MultipleNFT");

module.exports = async function (deployer) {

  await deployer.deploy(NFT,"AREVEA","AVA");

  await deployer.deploy(MultipleNFT,"AREVEA","AVA");

};

