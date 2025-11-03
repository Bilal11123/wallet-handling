import { initiateDeveloperControlledWalletsClient } from "@circle-fin/developer-controlled-wallets";

async function generateCipherText() {
        const developerSDK = initiateDeveloperControlledWalletsClient({
        apiKey: process.env.CIRCLE_API_KEY,
        entitySecret: ENTITY_SECRET,
    });

    const entitySecretCiphertext =
        await developerSDK.generateEntitySecretCiphertext();
    console.log(entitySecretCiphertext);
    return entitySecretCiphertext
}

export default generateCipherText