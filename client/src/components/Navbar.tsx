import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import { useWallet } from "@solana/wallet-adapter-react";
import { useState } from "react";
import WalletModal from "./WalletModal";
import { Wallet } from "lucide-react";

export default function Navbar() {
  const [location, navigate] = useLocation();
  const { connected, publicKey } = useWallet();
  const [walletModalOpen, setWalletModalOpen] = useState(false);

  const formatAddress = (address: string) => {
    return `${address.slice(0, 4)}...${address.slice(-4)}`;
  };

  return (
    <header className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-sm border-b border-slate-800">
      <nav className="container mx-auto flex items-center justify-between px-4 py-4">
        <button
          onClick={() => navigate("/")}
          className="text-2xl font-bold text-cyan-400 hover:text-cyan-300 transition-colors cursor-pointer"
        >
          APEX RACERS
        </button>
        <div className="hidden md:flex items-center space-x-8">
          <a href="/#sobre" className="hover:text-cyan-400 transition-colors">
            Sobre
          </a>
          <a href="/#gameplay" className="hover:text-cyan-400 transition-colors">
            Gameplay
          </a>
          <a href="/#tokenomics" className="hover:text-cyan-400 transition-colors">
            Tokenomics
          </a>
          <a href="/whitepaper" className="hover:text-cyan-400 transition-colors">
            Whitepaper
          </a>
        </div>
        {connected && publicKey ? (
          <div className="hidden md:flex items-center gap-3">
            <div className="bg-slate-800 px-4 py-2 rounded-lg text-sm">
              <span className="text-slate-300">Carteira: </span>
              <span className="text-cyan-400 font-mono">{formatAddress(publicKey.toBase58())}</span>
            </div>
            <Button
              onClick={() => setWalletModalOpen(true)}
              className="bg-cyan-500 text-slate-950 font-bold hover:bg-cyan-400 transition-all"
            >
              Entrar no Jogo
            </Button>
          </div>
        ) : (
          <Button
            onClick={() => setWalletModalOpen(true)}
            className="hidden md:flex items-center gap-2 bg-cyan-500 text-slate-950 font-bold hover:bg-cyan-400 transition-all"
          >
            <Wallet size={18} />
            Conectar Carteira
          </Button>
        )}
        <WalletModal open={walletModalOpen} onOpenChange={setWalletModalOpen} />
      </nav>
    </header>
  );
}
