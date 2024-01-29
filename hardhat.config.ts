import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

import { ethers } from "ethers";
import { HardhatRuntimeEnvironment } from "hardhat/types";

const config: HardhatUserConfig = {
   networks: {
    hardhat: {
      forking: {
        url: "https://network.ambrosus.io",
      },
    },
    local: {
      url: "http://127.0.0.1:8545",
      accounts: [
        "0x80f702eb861f36fe8fbbe1a7ccceb04ef7ddef714604010501a5f67c8065d446",
        "0x78a689fa56a36ac3a82aaa7b7b4bfefde66e57bd589bc08c14ae49d1b9c96026",
        "0x5b18f0adcca221f65373b20158f95313ecd51bde42b96a4c16f5eb851576bc06",
      ],
      hardfork: "byzantium",
    },
    dev: {
      url: "https://network.ambrosus-dev.io",
      hardfork: "byzantium",
      gasPrice: 500,
      accounts: [
        "0x72c61543e33446a5c38b79cdecaf6896d43b8fb8df133795d18570bf76a49079"  || ethers.ZeroHash,
      ],
    },
    test: {
      url: "https://network.ambrosus-test.io",
      hardfork: "byzantium",
      accounts: [
        process.env.PRIVATEKEY_OWNER_AMB || ethers.ZeroHash,
        process.env.PRIVATEKEY_TEST_MULTISIG1 || ethers.ZeroHash,
        process.env.PRIVATEKEY_TEST_MULTISIG2 || ethers.ZeroHash,
      ],
    },
    main: {
      url: "https://network.ambrosus.io",
      hardfork: "byzantium",
      gasPrice: 0,
      accounts: [process.env.PRIVATEKEY_OWNER_AMB_PROD || ethers.ZeroHash],
    },
  },
  solidity: "0.8.19"
 // {
  //   compilers: [
  //     {
  //       version: "0.8.19",
  //       settings: {
  //         optimizer: {
  //           enabled: true,
  //           runs: 5000,
  //         },
  //         // Note: for amb deploy
  //         evmVersion: process.env.COVERAGE ? undefined : "byzantium", // coverage don't work with byzantium
  //       },
  //     },
  //     {
  //       version: "0.4.24",
  //     },
  //   ],
  // },
};


export default config;
