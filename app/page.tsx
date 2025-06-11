"use client"

import { WalletConnect } from "./components/wallet-connect"
import { SensorFeed } from "./components/sensor-feed"
import { AnunnakiSymbols } from "./components/anunnaki-symbols"
import { Card } from "@/components/ui/card"
import { Web3Button } from "@thirdweb-dev/react"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-emerald-950 relative overflow-hidden font-sans">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[conic-gradient(from_0deg_at_50%_50%,transparent,rgba(34,197,94,0.1),transparent)]" />

      {/* Anunnaki symbols */}
      <AnunnakiSymbols />

      {/* Forest silhouette */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/80 to-transparent">
        <svg className="absolute bottom-0 w-full h-full" viewBox="0 0 1200 200" preserveAspectRatio="none">
          <path
            d="M0,200 L0,100 Q100,80 200,100 T400,90 T600,110 T800,95 T1000,105 T1200,100 L1200,200 Z"
            fill="rgba(0,0,0,0.8)"
            className="animate-pulse"
          />
        </svg>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-green-400 via-emerald-300 to-cyan-400 bg-clip-text text-transparent animate-pulse">
            🌲 WANDR FOREST NODE v1
          </h1>
          <div className="flex items-center justify-center gap-2 mb-8">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-ping"></div>
            <span className="text-green-300 text-sm font-mono">WiFi • AID • NODES • DECENTRALIZED • RESILIENT</span>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Description */}
          <Card className="bg-black/40 border-green-500/30 backdrop-blur-sm p-8 mb-8">
            <p className="text-lg text-green-100 leading-relaxed text-center">
              WANDR is a forest-deployed decentralized hotspot, broadcasting firewatch, sensor data, and mutual aid
              across the Base and Helium networks.
            </p>
          </Card>

          {/* Live sensor feeds */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-green-300 mb-6 text-center">🌲 Live Forest Sensors</h2>
            <SensorFeed />
          </div>

          {/* NFT Mint Section */}
          <div className="mb-16 text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold text-green-400 tracking-wide mb-4">
              🛡️ WANDR: Guardians of the Forest
            </h2>
            <p className="text-md text-green-200 max-w-xl mx-auto mb-6">
              Mint your sacred Guardian NFT — protect the mesh, connect with the wild, and commemorate your place in the first forest node drop.
            </p>

            <div className="flex flex-col items-center gap-4">
              <WalletConnect />
              <Web3Button
                contractAddress="0x5c523638E432aC394A573aD5fe4Bc03aacB3040d"
                action={async (contract) => await contract.erc721.claim(1)}
                onSuccess={() => alert("🌲 Minted! Grandma’s guardian is en route 🪶")}
                onError={(e) => alert("⚠️ Mint failed: " + e.message)}
                className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-green-600 text-white font-bold rounded-lg hover:scale-105 transition-transform shadow-md"
              >
                🌲 Mint Guardian of Forest: Grandma One
              </Web3Button>
            </div>
          </div>

          {/* Network status */}
          <Card className="bg-black/40 border-green-500/30 backdrop-blur-sm p-6 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-green-400">94%</div>
                <div className="text-sm text-green-300/70">Network Uptime</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-emerald-400">2.4k</div>
                <div className="text-sm text-green-300/70">Active Nodes</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-cyan-400">∞</div>
                <div className="text-sm text-green-300/70">Range (km)</div>
              </div>
            </div>
          </Card>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <Card className="bg-black/40 border-green-500/30 backdrop-blur-sm p-6">
              <h3 className="text-lg font-bold text-green-300 mb-3">🔥 Firewatch Network</h3>
              <p className="text-green-100/80 text-sm">
                Real-time forest fire detection and alert system powered by distributed sensor nodes.
              </p>
            </Card>
            <Card className="bg-black/40 border-green-500/30 backdrop-blur-sm p-6">
              <h3 className="text-lg font-bold text-green-300 mb-3">🤝 Mutual Aid Protocol</h3>
              <p className="text-green-100/80 text-sm">
                Decentralized emergency communication and resource sharing for forest communities.
              </p>
            </Card>
            <Card className="bg-black/40 border-green-500/30 backdrop-blur-sm p-6">
              <h3 className="text-lg font-bold text-green-300 mb-3">🎨 NFT Collection</h3>
              <p className="text-green-100/80 text-sm">
                Forest Guardian NFTs — unique digital artifacts representing your connection to the mesh.
              </p>
            </Card>
            <Card className="bg-black/40 border-green-500/30 backdrop-blur-sm p-6">
              <h3 className="text-lg font-bold text-green-300 mb-3">🪙 WANDR Token</h3>
              <p className="text-green-100/80 text-sm">
                ERC-20 utility token launching soon - earn rewards for contributing to the forest network.
              </p>
            </Card>
            <Card className="bg-black/40 border-green-500/30 backdrop-blur-sm p-6">
              <h3 className="text-lg font-bold text-green-300 mb-3">📡 Helium Tracker</h3>
              <p className="text-green-100/80 text-sm">
                Live Helium network integration - real-time IoT data transmission and coverage mapping.
              </p>
            </Card>
          </div>
        </div>

        {/* Footer */}
        <footer className="text-center text-green-300/70 text-sm">
          <div className="flex items-center justify-center gap-2 flex-wrap">
            <span>Gasless</span>
            <span>·</span>
            <span>Powered by Smart Wallet</span>
            <span>·</span>
            <span>Built for the Forest</span>
            <span>·</span>
            <span>Built by 420goldenage.eth</span>
          </div>
          <div className="mt-2 text-xs text-green-400/50">Ancient signals awakening in the digital woods</div>
        </footer>
      </div>

      {/* Ambient glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
    </div>
  )
}
