import { useWallet } from "@solana/wallet-adapter-react";
import { useWalletModal } from "@solana/wallet-adapter-react-ui";
import { Button } from "@/components/ui/button";
import { Wallet, ChevronDown, LogOut, LayoutDashboard } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { useLocation } from "wouter";

export default function WalletDropdown() {
  const { connected, publicKey, disconnect, wallet } = useWallet();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [, navigate] = useLocation();

  const formatAddress = (address: string) => {
    return `${address.slice(0, 4)}...${address.slice(-4)}`;
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const { setVisible: setWalletModalVisible } = useWalletModal();

  if (!connected || !publicKey) {
    return (
      <Button
        onClick={() => setWalletModalVisible(true)}
        className="hidden md:flex items-center gap-2 bg-cyan-500 text-slate-950 font-bold hover:bg-cyan-400 transition-all"
      >
        <Wallet size={18} />
        Conectar Carteira
      </Button>
    );
  }

  return (
    <div ref={dropdownRef} className="relative hidden md:block">
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 bg-cyan-500 text-slate-950 font-bold hover:bg-cyan-400 transition-all px-4 py-2 rounded-lg"
      >
        <Wallet size={18} />
        {formatAddress(publicKey.toBase58())}
        <ChevronDown
          size={18}
          className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-full mt-2 right-0 bg-slate-900 border border-slate-800 rounded-lg shadow-xl min-w-64 z-[9999]">
          {/* Wallet Info */}
          <div className="p-4 border-b border-slate-800 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-slate-300 text-sm">Status:</span>
              <span className="text-green-400 font-semibold text-sm">✓ Conectado</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-300 text-sm">Carteira:</span>
              <span className="text-cyan-400 font-mono text-sm">{wallet?.adapter.name}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-300 text-sm">Endereço:</span>
              <span className="text-cyan-400 font-mono text-xs break-all">{formatAddress(publicKey.toBase58())}</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="p-4 space-y-2">
            <Button
              onClick={() => {
                navigate("/dashboard");
                setIsOpen(false);
              }}
              className="w-full bg-purple-600 text-white font-bold hover:bg-purple-500 transition-all flex items-center justify-center gap-2"
            >
              <LayoutDashboard size={16} />
              Dashboard
            </Button>
            <Button
              onClick={() => {
                setIsOpen(false);
              }}
              className="w-full bg-cyan-500 text-slate-950 font-bold hover:bg-cyan-400 transition-all"
            >
              Entrar no Jogo
            </Button>
            <Button
              onClick={() => {
                disconnect();
                setIsOpen(false);
              }}
              variant="outline"
              className="w-full border-slate-600 text-white hover:bg-slate-800 font-bold flex items-center justify-center gap-2"
            >
              <LogOut size={16} />
              Desconectar
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
