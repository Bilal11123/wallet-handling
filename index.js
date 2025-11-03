import 'dotenv/config';
import { initiateDeveloperControlledWalletsClient } from "@circle-fin/developer-controlled-wallets";
import entity_secret from "./src/entity_secret.js"

const client = initiateDeveloperControlledWalletsClient({
    apiKey: process.env.CIRCLE_API_KEY,
    entitySecret: process.env.ENTITY_SECRET,
});

const response = await client.getWalletTokenBalance({
    id: '5ac2a584-622f-598e-b434-5a12c6182d22'
});
console.log(response.data.tokenBalances[0].amount)
console.log(response.data.tokenBalances[0].token.id)