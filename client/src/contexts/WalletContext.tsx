import React, { createContext, useContext, useMemo } from "react";
import { ConnectionProvider, WalletProvider, useWallet } from "@solana/wallet-adapter-react";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import { PhantomWalletAdapter } from "@solana/wallet-adapter-phantom";
import { SolflareWalletAdapter } from "@solana/wallet-adapter-solflare";
import { clusterApiUrl } from "@solana/web3.js";

// Import wallet adapter styles
import "@solana/wallet-adapter-react-ui/styles.css";

interface WalletContextType {
  // Placeholder for future wallet context methods
}

const WalletContext = createContext<WalletContextType | undefined>(undefined);

export function SolanaWalletProvider({ children }: { children: React.ReactNode }) {
  const network = "devnet"; // Change to "mainnet-beta" for production
  const endpoint = useMemo(() => clusterApiUrl(network as any), [network]);

  const wallets = useMemo(
    () => [
      new PhantomWalletAdapter(),
      new SolflareWalletAdapter(),
    ],
    []
  );

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>
          <WalletContextWrapper>
            {children}
          </WalletContextWrapper>
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
}

function WalletContextWrapper({ children }: { children: React.ReactNode }) {
  const { publicKey } = useWallet();

  React.useEffect(() => {
    if (publicKey) {
      sessionStorage.setItem("solana_wallet_address", publicKey.toString());
    } else {
      sessionStorage.removeItem("solana_wallet_address");
    }
  }, [publicKey]);

  return (
    <WalletContext.Provider value={{}}>
      {children}
    </WalletContext.Provider>
  );
}

export function useSolanaWallet() {
  const context = useContext(WalletContext);
  if (!context) {
    throw new Error("useSolanaWallet must be used within SolanaWalletProvider");
  }
  return context;
}
