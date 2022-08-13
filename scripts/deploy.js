const hre = require("hardhat");

async function main() {
  const Cubergram = await hre.ethers.getContractFactory("Cubergram");
  const cubergram = await Cubergram.deploy();

  await cubergram.deployed();

  console.log("My NFT deployed to:", cubergram.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
