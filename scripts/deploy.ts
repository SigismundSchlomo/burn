import { ethers } from "hardhat";
import * as fs from 'fs';

async function main() {
  const Burn = await ethers.getContractFactory("Burn");
  const burn = await Burn.deploy({gasPrice: 500000000000});
  await burn.waitForDeployment();

  const address = await burn.getAddress();

  const deployment = {
    address: address
  };

  fs.writeFileSync('deployment.json', JSON.stringify(deployment, null, 2));
  console.log("Deployed to", address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
