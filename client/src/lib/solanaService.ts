import { Connection, PublicKey, LAMPORTS_PER_SOL } from "@solana/web3.js";
import { Metaplex } from "@metaplex-foundation/js";

// Use Solana mainnet RPC
const RPC_ENDPOINT = "https://api.mainnet-beta.solana.com";
const connection = new Connection(RPC_ENDPOINT, "confirmed");
const metaplex = Metaplex.make(connection);

export interface WalletBalance {
  sol: number;
  rcn: number;
}

export interface NFTCar {
  id: string;
  name: string;
  mint: string;
  image: string;
  rarity: string;
  level: number;
}

export interface Transaction {
  signature: string;
  type: "sent" | "received" | "stake" | "reward";
  amount: number;
  token: "SOL" | "RCN";
  timestamp: number;
  status: "confirmed" | "pending" | "failed";
}

/**
 * Fetch SOL balance for a wallet
 */
export async function getSolBalance(publicKey: PublicKey): Promise<number> {
  try {
    const balance = await connection.getBalance(publicKey);
    return balance / LAMPORTS_PER_SOL;
  } catch (error) {
    console.error("Error fetching SOL balance:", error);
    return 0;
  }
}

/**
 * Fetch RCN token balance (assuming RCN is an SPL token)
 * You'll need to replace this with the actual RCN token mint address
 */
export async function getRCNBalance(publicKey: PublicKey, rcnMintAddress: string = "11111111111111111111111111111111"): Promise<number> {
  try {
    // This is a placeholder - replace with actual RCN token mint
    // For now, we'll return 0 as we need the actual token mint address
    const tokenMint = new PublicKey(rcnMintAddress);
    const tokenAccounts = await connection.getTokenAccountsByOwner(publicKey, {
      mint: tokenMint,
    });

    if (tokenAccounts.value.length === 0) {
      return 0;
    }

    const accountInfo = await connection.getAccountInfo(tokenAccounts.value[0].pubkey);
    if (!accountInfo) return 0;

    // Parse token amount (simplified - actual parsing depends on token decimals)
    // This is a placeholder implementation
    return 0;
  } catch (error) {
    console.error("Error fetching RCN balance:", error);
    return 0;
  }
}

/**
 * Fetch NFT cars owned by the wallet
 * Looks for NFTs with specific metadata (Apex Racers collection)
 */
export async function getNFTCars(publicKey: PublicKey): Promise<NFTCar[]> {
  try {
    const nfts = await metaplex.nfts().findAllByOwner({ owner: publicKey });

    // Filter for Apex Racers NFTs (you can add collection verification here)
    const cars: NFTCar[] = nfts
      .filter((nft) => nft.name.toLowerCase().includes("racer") || nft.name.toLowerCase().includes("car"))
      .map((nft, index) => ({
        id: `car-${index}`,
        name: nft.name || "Unknown Car",
        mint: nft.address.toString(),
        image: nft.json?.image || "🏎️",
        rarity: extractRarity(nft.name),
        level: 1,
      }));

    return cars;
  } catch (error) {
    console.error("Error fetching NFT cars:", error);
    return [];
  }
}

/**
 * Fetch recent transactions for a wallet
 */
export async function getRecentTransactions(publicKey: PublicKey, limit: number = 10): Promise<Transaction[]> {
  try {
    const signatures = await connection.getSignaturesForAddress(publicKey, { limit });

    const transactions: Transaction[] = [];

    for (const sig of signatures) {
      try {
        const tx = await connection.getTransaction(sig.signature, {
          maxSupportedTransactionVersion: 0,
        });

        if (!tx) continue;

        transactions.push({
          signature: sig.signature,
          type: "sent",
          amount: 0,
          token: "SOL",
          timestamp: (tx.blockTime || 0) * 1000,
          status: sig.confirmationStatus === "confirmed" ? "confirmed" : "pending",
        });
      } catch (error) {
        console.error("Error fetching transaction:", error);
      }
    }

    return transactions;
  } catch (error) {
    console.error("Error fetching transactions:", error);
    return [];
  }
}

/**
 * Helper function to extract rarity from NFT name
 */
function extractRarity(name: string): string {
  const rarities = ["Divino", "Mítico", "Lendário", "Épico", "Raro", "Incomum", "Comum"];
  for (const rarity of rarities) {
    if (name.toLowerCase().includes(rarity.toLowerCase())) {
      return rarity;
    }
  }
  return "Comum";
}

/**
 * Verify connection to Solana network
 */
export async function verifyConnection(): Promise<boolean> {
  try {
    const version = await connection.getVersion();
    console.log("Connected to Solana network:", version);
    return true;
  } catch (error) {
    console.error("Failed to connect to Solana network:", error);
    return false;
  }
}
