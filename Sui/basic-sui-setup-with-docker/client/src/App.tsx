import { useEffect, useState } from "react";
import { suiClient } from "./suiClient";
import { keypair } from "./signer";
import { requestFaucet } from "./faucet";
import { TransactionBlock } from "@mysten/sui.js/transactions";

function App() {
  const [status, setStatus] = useState("Connecting…");

  useEffect(() => {
    suiClient.getChainIdentifier().then((id) => {
      setStatus(`Connected to ${id}`);
    });
  }, []);

  async function sendTransaction() {
    const address = keypair.getPublicKey().toSuiAddress();

    setStatus("Requesting faucet funds…");
    await requestFaucet(address);

    const tx = new TransactionBlock();
    tx.setGasBudget(10_000_000);

    setStatus("Sending transaction…");
    const result =
      await suiClient.signAndExecuteTransactionBlock({
        signer: keypair,
        transactionBlock: tx,
      });

    console.log("TX RESULT:", result);
    setStatus(`Transaction sent: ${result.digest}`);
  }

  return (
    <div style={{ padding: 24 }}>
      <h1>Sui + React Localnet Demo</h1>
      <p>{status}</p>
      <button onClick={sendTransaction}>
        Send Test Transaction
      </button>
    </div>
  );
}

export default App;
