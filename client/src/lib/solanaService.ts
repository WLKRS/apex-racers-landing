import { Connection, PublicKey, LAMPORTS_PER_SOL } from "@solana/web3.js";

// Use Solana mainnet RPC
const RPC_ENDPOINT = "https://api.mainnet-beta.solana.com";
const connection = new Connection(RPC_ENDPOINT, "confirmed");

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
 * Fetch wallet balance in SOL
 */
export async function getWalletBalance(publicKey: PublicKey): Promise<number> {
  try {
    const balance = await connection.getBalance(publicKey);
    return balance / LAMPORTS_PER_SOL;
  } catch (error) {
    console.error("Error fetching wallet balance:", error);
    return 0;
  }
}

/**
 * Fetch token balance (RCN)
 * For now returns mock data - integrate with token program later
 */
export async function getTokenBalance(publicKey: PublicKey): Promise<number> {
  try {
    // TODO: Integrate with actual token program to fetch RCN balance
    // For now, return mock data
    return Math.floor(Math.random() * 10000) + 1000;
  } catch (error) {
    console.error("Error fetching token balance:", error);
    return 0;
  }
}

/**
 * Fetch recent transactions for a wallet
 */
export async function getRecentTransactions(publicKey: PublicKey, limit = 10): Promise<Transaction[]> {
  try {
    const signatures = await connection.getSignaturesForAddress(publicKey, { limit });

    const transactions: Transaction[] = signatures.map((sig, index) => ({
      signature: sig.signature,
      type: index % 2 === 0 ? "sent" : "received",
      amount: Math.random() * 10,
      token: "SOL",
      timestamp: (sig.blockTime || 0) * 1000,
      status: sig.confirmationStatus === "confirmed" ? "confirmed" : "pending",
    }));

    return transactions;
  } catch (error) {
    console.error("Error fetching transactions:", error);
    return [];
  }
}

/**
 * Fetch NFT cars owned by the wallet
 * For now returns mock data - integrate with actual NFT indexing service later
 */
export async function getNFTCars(publicKey: PublicKey): Promise<NFTCar[]> {
  try {
    // TODO: Integrate with Helius, Magic Eden, or other NFT indexing APIs
    // For now, return mock data
    const mockCars: NFTCar[] = [
      {
        id: "car-1",
        name: "Phantom Racer",
        mint: "11111111111111111111111111111111",
        image: "🏎️",
        rarity: "Épico",
        level: 5,
      },
      {
        id: "car-2",
        name: "Solana Speedster",
        mint: "22222222222222222222222222222222",
        image: "🏁",
        rarity: "Raro",
        level: 3,
      },
    ];

    return mockCars;
  } catch (error) {
    console.error("Error fetching NFT cars:", error);
    return [];
  }
}

/**
 * Extract rarity from NFT name
 */
function extractRarity(name: string): string {
  const rarities = ["Comum", "Incomum", "Raro", "Épico", "Lendário", "Mítico", "Divino"];
  for (const rarity of rarities) {
    if (name.toLowerCase().includes(rarity.toLowerCase())) {
      return rarity;
    }
  }
  return "Comum";
}

/**
 * Format wallet address to XXXX...XXXX format
 */
export function formatAddress(address: string): string {
  if (address.length < 8) return address;
  return `${address.slice(0, 4)}...${address.slice(-4)}`;
}
