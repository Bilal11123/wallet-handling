import { initiateDeveloperControlledWalletsClient } from "@circle-fin/developer-controlled-wallets";

const createSolWallet = async () => {    
    const client = initiateDeveloperControlledWalletsClient({
        apiKey: process.env.CIRCLE_API_KEY,
        entitySecret: process.env.ENTITY_SECRET,
    });
    
    const response = await client.createWallets({
        accountType: "EOA",
        blockchains: ["SOL-DEVNET"],
        count: 1,
        walletSetId: process.env.WALLET_SET_ID,
    });
    console.log("Created Wallets", response.data);
    return {
        id: response.data.wallets[0].id, 
        address: response.data.wallets[0].address
    }
}

