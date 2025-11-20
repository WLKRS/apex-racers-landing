/**
 * Game utility functions for car generation, stats calculation, etc.
 */

export type CarRarity = "Comum" | "Incomum" | "Raro" | "Épico" | "Lendário" | "Mítico";

export interface CarStats {
  speed: number;
  acceleration: number;
  handling: number;
  trunk: number;
}

/**
 * Rarity distribution for car minting
 * Comum: 60%, Incomum: 15%, Raro: 15%, Épico: 7%, Lendário: 2%, Mítico: 1%
 */
function getRandomRarity(): CarRarity {
  const rand = Math.random() * 100;
  
  if (rand < 60) return "Comum";
  if (rand < 75) return "Incomum";
  if (rand < 90) return "Raro";
  if (rand < 97) return "Épico";
  if (rand < 99) return "Lendário";
  return "Mítico";
}

/**
 * Generate random car stats based on rarity
 * Higher rarity = higher base stats with more variance
 */
export function generateCarStats(rarity: CarRarity): CarStats {
  const rarityMultipliers: Record<CarRarity, { base: number; variance: number }> = {
    "Comum": { base: 50, variance: 15 },
    "Incomum": { base: 65, variance: 20 },
    "Raro": { base: 80, variance: 25 },
    "Épico": { base: 95, variance: 30 },
    "Lendário": { base: 110, variance: 35 },
    "Mítico": { base: 125, variance: 40 },
  };

  const { base, variance } = rarityMultipliers[rarity];
  
  const generateStat = () => {
    const randomVariance = (Math.random() - 0.5) * 2 * variance;
    return Math.max(1, Math.round(base + randomVariance));
  };

  return {
    speed: generateStat(),
    acceleration: generateStat(),
    handling: generateStat(),
    trunk: generateStat(),
  };
}

/**
 * Generate a random car name based on rarity
 */
export function generateCarName(rarity: CarRarity): string {
  const prefixes = {
    "Comum": ["Swift", "Bolt", "Dash", "Flash", "Quick"],
    "Incomum": ["Thunder", "Storm", "Blaze", "Inferno", "Vortex"],
    "Raro": ["Phoenix", "Dragon", "Titan", "Kraken", "Sphinx"],
    "Épico": ["Excalibur", "Mjolnir", "Trident", "Gungnir", "Kusanagi"],
    "Lendário": ["Odin", "Zeus", "Hades", "Poseidon", "Ares"],
    "Mítico": ["Ragnarok", "Apocalypse", "Eternity", "Infinity", "Chaos"],
  };

  const suffixes = ["X", "Pro", "Max", "Elite", "Prime", "Ultra", "Turbo", "GT"];

  const prefixList = prefixes[rarity];
  const prefix = prefixList[Math.floor(Math.random() * prefixList.length)];
  const suffix = suffixes[Math.floor(Math.random() * suffixes.length)];

  return `${prefix} ${suffix}`;
}

/**
 * Generate a complete new car
 */
export function generateNewCar(): {
  rarity: CarRarity;
  name: string;
  stats: CarStats;
} {
  const rarity = getRandomRarity();
  const name = generateCarName(rarity);
  const stats = generateCarStats(rarity);

  return {
    rarity,
    name,
    stats,
  };
}

/**
 * Calculate mint cost based on rarity
 * Comum: 10 SOL, Incomum: 15 SOL, Raro: 25 SOL, Épico: 50 SOL, Lendário: 100 SOL, Mítico: 250 SOL
 */
export function getMintCostSOL(rarity: CarRarity): number {
  const costs: Record<CarRarity, number> = {
    "Comum": 10,
    "Incomum": 15,
    "Raro": 25,
    "Épico": 50,
    "Lendário": 100,
    "Mítico": 250,
  };

  return costs[rarity];
}

/**
 * Convert SOL cost to RCN equivalent (1 SOL = ~200 RCN based on tokenomics)
 */
export function getMintCostRCN(rarity: CarRarity): number {
  const solCost = getMintCostSOL(rarity);
  return solCost * 200; // 1 SOL = 200 RCN
}
