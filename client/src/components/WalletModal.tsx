import { useWallet } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Wallet } from "lucide-react";

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

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-slate-900 border border-slate-800 text-white">
        <DialogHeader>
          <DialogTitle className="text-cyan-400 flex items-center gap-2">
            <Wallet size={24} />
            Conectar Carteira
          </DialogTitle>
          <DialogDescription className="text-slate-400">
            Escolha sua carteira Solana para começar a jogar
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          {connected && publicKey ? (
            <div className="bg-slate-800 rounded-lg p-4 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-slate-300">Status:</span>
                <span className="text-green-400 font-semibold">✓ Conectado</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-300">Carteira:</span>
                <span className="text-cyan-400 font-mono">{wallet?.adapter.name}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-300">Endereço:</span>
                <span className="text-cyan-400 font-mono">{formatAddress(publicKey.toBase58())}</span>
              </div>
              <Button
                onClick={() => onOpenChange(false)}
                className="w-full bg-cyan-500 text-slate-950 font-bold hover:bg-cyan-400"
              >
                Continuar para o Jogo
              </Button>
            </div>
          ) : (
            <div className="space-y-3">
              <p className="text-slate-300 text-center">
                Selecione uma carteira para conectar:
              </p>
              <div className="flex justify-center">
                <WalletMultiButton className="!bg-cyan-500 !text-slate-950 !font-bold hover:!bg-cyan-400" />
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
