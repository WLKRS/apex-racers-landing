import { useWallet } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { Button } from "@/components/ui/button";
import { Wallet, X } from "lucide-react";
import { useEffect } from "react";

interface WalletModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function WalletModal({ open, onOpenChange }: WalletModalProps) {
  const { connected, wallet, publicKey } = useWallet();

  // Format wallet address as XXXX...XXXX
  const formatAddress = (address: string) => {
    return `${address.slice(0, 4)}...${address.slice(-4)}`;
  };

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [open]);

  if (!open) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 z-[9998]"
        onClick={() => onOpenChange(false)}
      />

      {/* Modal */}
      <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
        <div className="bg-slate-900 border border-slate-800 text-white rounded-lg shadow-xl max-w-md w-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-slate-800">
            <div className="flex items-center gap-2">
              <Wallet size={24} className="text-cyan-400" />
              <h2 className="text-xl font-semibold text-cyan-400">Conectar Carteira</h2>
            </div>
            <button
              onClick={() => onOpenChange(false)}
              className="text-slate-400 hover:text-white transition-colors"
            >
              <X size={24} />
            </button>
          </div>

          {/* Content */}
          <div className="p-6 space-y-4">
            <p className="text-slate-300 text-sm">
              Escolha sua carteira Solana para começar a jogar
            </p>

            {connected && publicKey ? (
              <div className="bg-slate-800 rounded-lg p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-slate-300">Status:</span>
                  <span className="text-green-400 font-semibold">✓ Conectado</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-300">Carteira:</span>
                  <span className="text-cyan-400 font-mono text-sm">{wallet?.adapter.name}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-300">Endereço:</span>
                  <span className="text-cyan-400 font-mono text-sm">{formatAddress(publicKey.toBase58())}</span>
                </div>
                <Button
                  onClick={() => onOpenChange(false)}
                  className="w-full bg-cyan-500 text-slate-950 font-bold hover:bg-cyan-400 transition-all"
                >
                  Continuar para o Jogo
                </Button>
              </div>
            ) : (
              <div className="flex justify-center py-4">
                <WalletMultiButton className="!bg-cyan-500 !text-slate-950 !font-bold hover:!bg-cyan-400 !z-[10000]" />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
