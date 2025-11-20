import Navbar from "@/components/Navbar";
import { Wallet, Zap, Trophy, TrendingUp, Clock, Flame, Loader2 } from "lucide-react";
import { useWallet } from "@solana/wallet-adapter-react";
import { useEffect, useState } from "react";
import { getWalletBalance, getTokenBalance, getNFTCars, getRecentTransactions } from "@/lib/solanaService";
import { PublicKey } from "@solana/web3.js";
import { mockDashboardData } from "@/lib/mockData";

interface DashboardState {
  solBalance: number;
  rcnBalance: number;
  cars: any[];
  transactions: any[];
  loading: boolean;
  error: string | null;
}

export default function Dashboard() {
  const { connected, publicKey } = useWallet();
  const [state, setState] = useState<DashboardState>({
    solBalance: 0,
    rcnBalance: 0,
    cars: [],
    transactions: [],
    loading: true,
    error: null,
  });

  // Fetch real blockchain data
  useEffect(() => {
    if (!connected || !publicKey) return;

    const fetchData = async () => {
      try {
        setState((prev) => ({ ...prev, loading: true, error: null }));

        // Fetch SOL balance
        const solBalance = await getWalletBalance(publicKey);
        const rcnBalance = await getTokenBalance(publicKey);

        // Fetch NFT cars
        const cars = await getNFTCars(publicKey);

        // Fetch recent transactions
        const transactions = await getRecentTransactions(publicKey, 5);

        setState((prev) => ({
          ...prev,
          solBalance,
          rcnBalance,
          cars: cars.length > 0 ? cars : mockDashboardData.cars, // Use real cars if available, otherwise mock
          transactions: transactions.length > 0 ? transactions : mockDashboardData.transactions,
          loading: false,
        }));
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
        setState((prev) => ({
          ...prev,
          loading: false,
          error: "Erro ao carregar dados. Usando dados de exemplo.",
          solBalance: mockDashboardData.balances.sol,
          rcnBalance: mockDashboardData.balances.rcn,
          cars: mockDashboardData.cars,
          transactions: mockDashboardData.transactions,
        }));
      }
    };

    fetchData();
  }, [connected, publicKey]);

  const formatAddress = (address: string) => {
    return `${address.slice(0, 4)}...${address.slice(-4)}`;
  };

  const formatDate = (timestamp: number) => {
    return new Intl.DateTimeFormat("pt-BR", {
      day: "2-digit",
      month: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    }).format(new Date(timestamp));
  };

  if (!connected || !publicKey) {
    return (
      <div className="min-h-screen bg-slate-950 text-white">
        <Navbar />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl font-bold text-cyan-400 mb-4">Dashboard</h1>
          <p className="text-slate-300 mb-8">Conecte sua carteira para acessar o dashboard</p>
        </div>
      </div>
    );
  }

  const data = state.loading ? mockDashboardData : { stats: mockDashboardData.stats, balances: { sol: state.solBalance, rcn: state.rcnBalance } };

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <main className="container mx-auto px-4 py-8 space-y-8">
        {/* Header */}
        <div className="space-y-2">
          <h1 className="text-4xl font-bold text-cyan-400">Dashboard</h1>
          <p className="text-slate-400">Bem-vindo de volta, {formatAddress(publicKey.toBase58())}</p>
          {state.error && <p className="text-yellow-400 text-sm">{state.error}</p>}
        </div>

        {state.loading ? (
          <div className="flex items-center justify-center py-20">
            <Loader2 className="animate-spin text-cyan-400 mr-2" size={32} />
            <p className="text-slate-300">Carregando dados da blockchain...</p>
          </div>
        ) : (
          <>
            {/* Balances Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-slate-900 border border-slate-800 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Wallet className="text-cyan-400" size={24} />
                  <h2 className="text-xl font-bold">Saldo em SOL</h2>
                </div>
                <p className="text-4xl font-bold text-cyan-400">{state.solBalance.toFixed(4)}</p>
                <p className="text-slate-400 text-sm mt-2">≈ ${(state.solBalance * 200).toFixed(2)} USD</p>
              </div>

              <div className="bg-slate-900 border border-slate-800 rounded-lg p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Zap className="text-purple-400" size={24} />
                  <h2 className="text-xl font-bold">Saldo em RCN</h2>
                </div>
                <p className="text-4xl font-bold text-purple-400">{state.rcnBalance.toLocaleString("pt-BR")}</p>
                <p className="text-slate-400 text-sm mt-2">≈ ${(state.rcnBalance * 0.15).toFixed(2)} USD</p>
              </div>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="bg-slate-900 border border-slate-800 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Trophy size={18} className="text-yellow-400" />
                  <p className="text-slate-400 text-sm">Taxa de Vitória</p>
                </div>
                <p className="text-2xl font-bold">{data.stats.winRate.toFixed(1)}%</p>
              </div>

              <div className="bg-slate-900 border border-slate-800 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Flame size={18} className="text-orange-400" />
                  <p className="text-slate-400 text-sm">Sequência Atual</p>
                </div>
                <p className="text-2xl font-bold">{data.stats.currentStreak} vitórias</p>
              </div>

              <div className="bg-slate-900 border border-slate-800 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <TrendingUp size={18} className="text-green-400" />
                  <p className="text-slate-400 text-sm">Nível</p>
                </div>
                <p className="text-2xl font-bold">{data.stats.level}</p>
              </div>

              <div className="bg-slate-900 border border-slate-800 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Clock size={18} className="text-blue-400" />
                  <p className="text-slate-400 text-sm">Total de Corridas</p>
                </div>
                <p className="text-2xl font-bold">{data.stats.totalRaces}</p>
              </div>
            </div>

            {/* Cars Section */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Meus Carros</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {(state.cars || mockDashboardData.cars).map((car) => (
                  <div key={car.id} className="bg-slate-900 border border-slate-800 rounded-lg p-4 hover:border-cyan-400 transition-colors">
                    <div className="text-5xl mb-3">{car.image || "🏎️"}</div>
                    <h3 className="font-bold text-lg mb-2">{car.name}</h3>
                    <div className="space-y-1 text-sm text-slate-400 mb-3">
                      <p>
                        <span className="text-slate-300">Raridade:</span> {car.rarity}
                      </p>
                      <p>
                        <span className="text-slate-300">Nível:</span> {car.level}
                      </p>
                      {car.multiplier && (
                        <p>
                          <span className="text-slate-300">Multiplicador:</span> {car.multiplier}x
                        </p>
                      )}
                      {car.wins !== undefined && (
                        <p>
                          <span className="text-slate-300">Vitórias:</span> {car.wins}/{car.totalRaces}
                        </p>
                      )}
                    </div>
                    {car.wins !== undefined && (
                      <div className="w-full bg-slate-800 rounded-full h-2">
                        <div
                          className="bg-cyan-400 h-2 rounded-full"
                          style={{ width: `${(car.wins / car.totalRaces) * 100}%` }}
                        />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Transactions Section */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Histórico de Transações</h2>
              <div className="bg-slate-900 border border-slate-800 rounded-lg overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-slate-800 bg-slate-800/50">
                        <th className="px-6 py-3 text-left text-sm font-semibold">Tipo</th>
                        <th className="px-6 py-3 text-left text-sm font-semibold">Descrição</th>
                        <th className="px-6 py-3 text-left text-sm font-semibold">Valor</th>
                        <th className="px-6 py-3 text-left text-sm font-semibold">Data</th>
                        <th className="px-6 py-3 text-left text-sm font-semibold">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {(state.transactions || mockDashboardData.transactions).map((tx, index) => (
                        <tr key={tx.signature || index} className="border-b border-slate-800 hover:bg-slate-800/30 transition-colors">
                          <td className="px-6 py-4 text-sm">
                            <span className="inline-block px-2 py-1 rounded bg-slate-800 text-xs font-semibold">
                              {tx.type === "reward" && "🎁 Recompensa"}
                              {tx.type === "purchase" && "🛒 Compra"}
                              {tx.type === "stake" && "📌 Stake"}
                              {tx.type === "unstake" && "📤 Unstake"}
                              {tx.type === "burn" && "🔥 Queima"}
                              {tx.type === "sent" && "📤 Enviado"}
                              {tx.type === "received" && "📥 Recebido"}
                            </span>
                          </td>
                          <td className="px-6 py-4 text-sm text-slate-300">{tx.description || "Transação Solana"}</td>
                          <td className="px-6 py-4 text-sm font-semibold">
                            <span className={tx.type === "reward" || tx.type === "received" ? "text-green-400" : "text-red-400"}>
                              {tx.type === "reward" || tx.type === "unstake" || tx.type === "received" ? "+" : "-"}
                              {tx.amount.toLocaleString("pt-BR")} {tx.token}
                            </span>
                          </td>
                          <td className="px-6 py-4 text-sm text-slate-400">
                            {tx.timestamp ? formatDate(tx.timestamp) : "N/A"}
                          </td>
                          <td className="px-6 py-4 text-sm">
                            {tx.status === "confirmed" && <span className="text-green-400">✓ Confirmado</span>}
                            {tx.status === "pending" && <span className="text-yellow-400">⏳ Pendente</span>}
                            {tx.status === "failed" && <span className="text-red-400">✗ Falhou</span>}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Experience Section */}
            <div className="bg-slate-900 border border-slate-800 rounded-lg p-6">
              <h2 className="text-xl font-bold mb-4">Experiência</h2>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-slate-300">Nível {data.stats.level}</span>
                  <span className="text-slate-300">
                    {data.stats.experience} / {data.stats.experienceToNextLevel} XP
                  </span>
                </div>
                <div className="w-full bg-slate-800 rounded-full h-4 overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-cyan-400 to-purple-400 h-4 rounded-full transition-all"
                    style={{
                      width: `${(data.stats.experience / data.stats.experienceToNextLevel) * 100}%`,
                    }}
                  />
                </div>
                <p className="text-sm text-slate-400">
                  {data.stats.experienceToNextLevel - data.stats.experience} XP até o próximo nível
                </p>
              </div>
            </div>
          </>
        )}
      </main>
    </div>
  );
}
