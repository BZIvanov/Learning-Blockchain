import { SuiClient } from "@mysten/sui.js/client"; // "@mysten/sui.js": "^0.54.1"

export const suiClient = new SuiClient({
  url: "http://localhost:9000",
});
