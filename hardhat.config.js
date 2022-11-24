require("@nomiclabs/hardhat-waffle")
require("@nomiclabs/hardhat-etherscan")
require("hardhat-deploy")
require("solidity-coverage")
require("hardhat-gas-reporter")
require("hardhat-contract-sizer")
require("dotenv").config()

/** @type import('hardhat/config').HardhatUserConfig */

const COINMARKETCAP_API_KEY =
    process.env.COINMARKETCAP_API_KEY || "485a46b4-5ec1-4181-867c-6bd4645bf92b"
const GOERLI_RPC_URL =
    process.env.GOERLI_RPC_URL ||
    "https://eth-goerli.g.alchemy.com/v2/taCfkGUMYr0yuNgM-kTV-o4zIpLL0Utf"
const PRIVATE_KEY =
    process.env.PRIVATE_KEY || "490ee80b2c83661dc3fcf8ec7ecf0cb13c1a01f75063e7fe616a7813cb40857b"
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY || "1SKYC99H1EV17Z1AHX6BWE342HMHMA19E8"

module.exports = {
    solidity: "0.8.17",

    defaultNetwork: "hardhat",
    networks: {
        hardhat: {
            chainId: 31337,
            blockConfirmation: 1,
        },
        goerli: {
            chainId: 5,
            url: GOERLI_RPC_URL,
            accounts: [PRIVATE_KEY],
            blockConfirmation: 6,
        },
    },

    namedAccounts: {
        deployer: {
            default: 0,
        },
        player: {
            default: 1,
        },
    },
    mocha: {
        timeout: 200000,
    },
    etherscan: {
        apiKey: ETHERSCAN_API_KEY,
    },
}
