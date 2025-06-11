// MintGrandmaNFT.tsx
"use client";

import { useEffect, useState } from "react";
import {
  ThirdwebProvider,
  ConnectWallet,
  useAddress,
  useContract,
  useNFT,
  Web3Button,
} from "@thirdweb-dev/react";
import { Base } from "@thirdweb-dev/chains";

const contractAddress = "0x5c523638E432aC394A573aD5fe4Bc03aacB3040d"; // Your contract on Base

export default function MintGrandmaNFT() {
  return (
    <ThirdwebProvider
      activeChain={Base}
      clientId="adfaa284ed4974678d47fe009dd19273" // Your Thirdweb client ID
    >
      <div
        style={{
          background: "#0b0f0a",
          color: "#f4efe5",
          minHeight: "100vh",
          padding: "2rem",
          fontFamily: "Georgia, serif",
          backgroundImage: "url('/forest-bg.jpg')",
          backgroundSize: "cover",
        }}
      >
        <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>
          🌲 Claim Grandma Guardian 🌲
        </h1>
        <p style={{ fontSize: "1.1rem", maxWidth: "600px" }}>
          This is Genesis NFT #001 in the WANDR collection. It honors the
          spirit of “Matron of the First Flame” — the first mobile node
          deployment with Grandma. She is a guardian of the forest, the
          beginning of a sacred Web3 lineage, forever etched in the chain.
        </p>

        <ConnectWallet theme="dark" btnTitle="Connect Wallet" />

        <MintSection />
      </div>
    </ThirdwebProvider>
  );
}

function MintSection() {
  const address = useAddress();
  const { contract } = useContract(contractAddress);
  const { data: nft } = useNFT(contract, "0");

  if (!nft) return <p>Loading NFT metadata...</p>;

  return (
    <div style={{ marginTop: "2rem" }}>
      <img
        src={nft.metadata.image as string}
        alt="Grandma Guardian"
        style={{
          borderRadius: "12px",
          maxWidth: "300px",
          marginBottom: "1rem",
          border: "2px solid #ffae42",
        }}
      />
      <Web3Button
        contractAddress={contractAddress}
        action={async (contract) => await contract.erc721.claim(1)}
        style={{
          backgroundColor: "#ffae42",
          color: "#1a1a1a",
          fontSize: "1.1rem",
          fontWeight: "bold",
          padding: "1rem 2rem",
          borderRadius: "8px",
        }}
      >
        Claim Grandma Guardian
      </Web3Button>
    </div>
  );
}
