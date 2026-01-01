export async function requestFaucet(address: string) {
  await fetch("http://localhost:9123/gas", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ recipient: address }),
  });
}
