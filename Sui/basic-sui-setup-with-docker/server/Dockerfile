FROM rust:1.74-slim

# Install system dependencies
RUN apt-get update && apt-get install -y \
    clang \
    cmake \
    pkg-config \
    libssl-dev \
    git \
    curl \
    ca-certificates \
 && rm -rf /var/lib/apt/lists/*

# Install Sui CLI
RUN git clone --depth 1 https://github.com/MystenLabs/sui.git /tmp/sui && \
    cd /tmp/sui/crates/sui && \
    cargo install --locked --path . --bin sui && \
    rm -rf /tmp/sui

# Sui ports
EXPOSE 9000
EXPOSE 9123

# Start localnet with faucet
CMD ["sui", "start", "--with-faucet"]
