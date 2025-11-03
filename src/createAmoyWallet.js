import { initiateDeveloperControlledWalletsClient } from "@circle-fin/developer-controlled-wallets";

const createAmoyWallet = async () => {    
    const client = initiateDeveloperControlledWalletsClient({
        apiKey: process.env.CIRCLE_API_KEY,
        entitySecret: process.env.ENTITY_SECRET,
    });
    
    const response = await client.createWallets({
        blockchains: ["MATIC-AMOY"],
        count: 1,
        walletSetId: process.env.WALLET_SET_ID,
    });
    console.log("Created Wallets", response.data?.wallets);
    return {
        id: response.data.wallets[0].id,
        blockchain: response.data.wallets[0].blockchain,
        accountType: response.data.wallets[0].accountType,
        address: response.data.wallets[0].address
    }
}

export default createAmoyWallet