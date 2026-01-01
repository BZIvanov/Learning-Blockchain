import { Ed25519Keypair } from "@mysten/sui.js/keypairs/ed25519";

export const keypair = Ed25519Keypair.deriveKeypair(
  "slow place scatter excuse patient pioneer plastic luxury pick smile festival clean" // check the server README for how to generate your own mnemonic
);
