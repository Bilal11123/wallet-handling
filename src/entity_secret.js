import { generateEntitySecret } from "@circle-fin/developer-controlled-wallets";

// This will print out a new entity secret and sample code to register the entity secret
const entity_secret = () => (
    generateEntitySecret()
)

export default entity_secret