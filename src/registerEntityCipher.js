import { registerEntitySecretCiphertext } from "@circle-fin/developer-controlled-wallets";
import path from "path";

const registerEntityCipher = async () => {
    await registerEntitySecretCiphertext({
        apiKey: process.env.CIRCLE_API_KEY,            // your Circle API key
        entitySecret: ENTITY_SECRET,
        recoveryFileDownloadPath: "",   // path to save recovery file
    });

    console.log("✅ Entity secret successfully registered and recovery file saved!");
}

export default registerEntityCipher