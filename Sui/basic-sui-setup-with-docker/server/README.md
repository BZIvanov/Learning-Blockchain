# Sui Server

## Generate a keypair (ONE TIME)

After starting the container in a new terminal run:

```bash
docker exec -it sui-localnet sui keytool generate ed25519
```

In the generated output, you need the `mnemonic`.

## Useful commands

In the docker container open a terminal and run `sui client` to see info list of the available commands. Below are examples for some of the commands:

- `sui client active-env` - Default environment used for commands when none specified
- `sui client addresses` - Obtain the Addresses managed by the client
- `sui client balance` - List the coin balance of an address
