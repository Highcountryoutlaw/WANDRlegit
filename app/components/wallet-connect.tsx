"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

export function WalletConnect() {
  const [isConnected, setIsConnected] = useState(false)
  const [address, setAddress] = useState<string | null>(null)
  const [isConnecting, setIsConnecting] = useState(false)

  const connectWallet = async () => {
    setIsConnecting(true)

    try {
      // Check if MetaMask is installed
      if (typeof window !== "undefined" && window.ethereum) {
        // Request account access
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        })

        if (accounts.length > 0) {
          setAddress(accounts[0])
          setIsConnected(true)

          // Switch to Base network
          try {
            await window.ethereum.request({
              method: "wallet_switchEthereumChain",
              params: [{ chainId: "0x2105" }], // Base mainnet
            })
          } catch (switchError: any) {
            // If Base network is not added, add it
            if (switchError.code === 4902) {
              await window.ethereum.request({
                method: "wallet_addEthereumChain",
                params: [
                  {
                    chainId: "0x2105",
                    chainName: "Base",
                    nativeCurrency: {
                      name: "Ethereum",
                      symbol: "ETH",
                      decimals: 18,
                    },
                    rpcUrls: ["https://mainnet.base.org"],
                    blockExplorerUrls: ["https://basescan.org"],
                  },
                ],
              })
            }
          }
        }
      } else {
        // Fallback for mobile or no MetaMask
        alert("Please install MetaMask or use a Web3-enabled browser")
      }
    } catch (error) {
      console.error("Failed to connect wallet:", error)
    } finally {
      setIsConnecting(false)
    }
  }

  const disconnectWallet = () => {
    setIsConnected(false)
    setAddress(null)
  }

  return (
    <div className="text-center">
      {isConnected && address ? (
        <div className="space-y-4">
          <div className="text-green-300 font-mono text-sm">
            Connected: {address.slice(0, 6)}...{address.slice(-4)}
          </div>
          <div className="text-emerald-400 text-lg animate-pulse">🌐 Connected to Forest Mesh</div>
          <Button
            onClick={disconnectWallet}
            className="bg-red-600/20 border-red-400/30 text-red-300 hover:bg-red-600/30"
          >
            Disconnect
          </Button>
        </div>
      ) : (
        <div className="space-y-6">
          <div className="text-green-300/70 mb-4">Join the decentralized forest network</div>
          <Button
            onClick={connectWallet}
            disabled={isConnecting}
            className="bg-gradient-to-r from-green-600 to-emerald-600 border-green-400 text-white font-bold py-4 px-8 text-lg rounded-lg shadow-lg shadow-green-500/25 hover:shadow-green-500/40 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isConnecting ? "Connecting..." : "Connect to the Forest Mesh"}
          </Button>
        </div>
      )}
    </div>
  )
}

// Extend the Window interface to include ethereum
declare global {
  interface Window {
    ethereum?: any
  }
}
