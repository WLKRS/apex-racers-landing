export interface DashboardData {
  balances: {
    sol: number;
    rcn: number;
  };
  cars: Car[];
  transactions: Transaction[];
  stats: GameStats;
}

export interface Car {
  id: string;
  name: string;
  rarity: "Comum" | "Incomum" | "Raro" | "Épico" | "Lendário" | "Mítico" | "Divino";
  multiplier: number;
  level: number;
  wins: number;
  totalRaces: number;
  image: string;
}

export interface Transaction {
  id: string;
  type: "reward" | "purchase" | "stake" | "unstake" | "burn";
  amount: number;
  token: "SOL" | "RCN";
  description: string;
  timestamp: Date;
  status: "completed" | "pending" | "failed";
}

export interface GameStats {
  totalRaces: number;
  totalWins: number;
  winRate: number;
  totalEarnings: number;
  averageRaceTime: number;
  currentStreak: number;
  level: number;
  experience: number;
  experienceToNextLevel: number;
}

export const mockDashboardData: DashboardData = {
  balances: {
    sol: 2.5,
    rcn: 15420.75,
  },
  cars: [
    {
      id: "car-1",
      name: "Phantom Racer",
      rarity: "Raro",
      multiplier: 1.5,
      level: 12,
      wins: 45,
      totalRaces: 87,
      image: "🏎️",
    },
    {
      id: "car-2",
      name: "Cyber Sprint",
      rarity: "Incomum",
      multiplier: 1.2,
      level: 8,
      wins: 28,
      totalRaces: 52,
      image: "🏎️",
    },
    {
      id: "car-3",
      name: "Solana Bolt",
      rarity: "Épico",
      multiplier: 2.0,
      level: 15,
      wins: 62,
      totalRaces: 98,
      image: "🏎️",
    },
    {
      id: "car-4",
      name: "Velocity X",
      rarity: "Comum",
      multiplier: 1.0,
      level: 5,
      wins: 12,
      totalRaces: 34,
      image: "🏎️",
    },
  ],
  transactions: [
    {
      id: "tx-1",
      type: "reward",
      amount: 125.5,
      token: "RCN",
      description: "Recompensa de corrida - 1º lugar",
      timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000),
      status: "completed",
    },
    {
      id: "tx-2",
      type: "stake",
      amount: 5000,
      token: "RCN",
      description: "Stake de RCN",
      timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000),
      status: "completed",
    },
    {
      id: "tx-3",
      type: "reward",
      amount: 0.5,
      token: "SOL",
      description: "Recompensa de stake",
      timestamp: new Date(Date.now() - 48 * 60 * 60 * 1000),
      status: "completed",
    },
    {
      id: "tx-4",
      type: "purchase",
      amount: 2500,
      token: "RCN",
      description: "Compra de upgrade de carro",
      timestamp: new Date(Date.now() - 72 * 60 * 60 * 1000),
      status: "completed",
    },
    {
      id: "tx-5",
      type: "reward",
      amount: 87.25,
      token: "RCN",
      description: "Recompensa de corrida - 2º lugar",
      timestamp: new Date(Date.now() - 96 * 60 * 60 * 1000),
      status: "completed",
    },
  ],
  stats: {
    totalRaces: 271,
    totalWins: 147,
    winRate: 54.2,
    totalEarnings: 8750.5,
    averageRaceTime: 2.45,
    currentStreak: 7,
    level: 18,
    experience: 7850,
    experienceToNextLevel: 10000,
  },
};
