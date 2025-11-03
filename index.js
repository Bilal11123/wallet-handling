import 'dotenv/config';
import { initiateDeveloperControlledWalletsClient } from "@circle-fin/developer-controlled-wallets";
import entity_secret from "./src/entity_secret.js"

// STEP 1
// First run entity_secret() and save it to .env as ENTITY_SECRET
// save circle api to .env as CIRCLE_API_KEY

// STEP 2
// import registerEntityCipher from './src/registerEntityCipher.js';
// registerEntityCipher()

// STEP 3
// import createWalletSet from './src/createWalletSet.js';
// createWalletSet()
// Save the Wallet Set id in .env as WALLET_SET_ID

// STEP 4
// import createAmoyWallet from './src/createAmoyWallet.js';
// const {id, blockchain, accountType, address } = createAmoyWallet()
// console.log("My Wallet ID", id)
// Save your wallet ID and address