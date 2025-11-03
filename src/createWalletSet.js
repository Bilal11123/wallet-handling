import { initiateDeveloperControlledWalletsClient } from "@circle-fin/developer-controlled-wallets";

async function createWalletSet(name) {    
    const client = initiateDeveloperControlledWalletsClient({
        apiKey: process.env.CIRCLE_API_KEY,
        entitySecret: process.env.ENTITY_SECRET,
    });

    const walletSetResponse = await client.createWalletSet({ name: name });
    console.log("Created WalletSet", walletSetResponse.data?.walletSet);
}

export default createWalletSet