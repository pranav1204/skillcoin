const { ethers, upgrades } = require("hardhat");

async function main() {
  const SkillCoin = await ethers.getContractFactory("SkillCoin");
  const skillCoin = await upgrades.deployProxy(SkillCoin, [], {
    initializer: "initialize",
  });

  await skillCoin.waitForDeployment();
  console.log("SkillCoin deployed to:", await skillCoin.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
