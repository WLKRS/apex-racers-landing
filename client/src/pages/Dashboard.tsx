import { mockDashboardData } from "@/lib/mockData";
import Navbar from "@/components/Navbar";
import { Wallet, Zap, Trophy, TrendingUp, Clock, Flame } from "lucide-react";
import { useWallet } from "@solana/wallet-adapter-react";

export default function Dashboard() {
  const { connected, publicKey } = useWallet();
  const data = mockDashboardData;

  const formatAddress = (address: string) => {
    return `${address.slice(0, 4)}...${address.slice(-4)}`;
  };

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat("pt-BR", {
      day: "2-digit",
      month: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    }).format(date);
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

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <main className="container mx-auto px-4 py-8 space-y-8">
        {/* Header */}
        <div className="space-y-2">
          <h1 className="text-4xl font-bold text-cyan-400">Dashboard</h1>
          <p className="text-slate-400">Bem-vindo de volta, {formatAddress(publicKey.toBase58())}</p>
        </div>

        {/* Balances Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-slate-900 border border-slate-800 rounded-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <Wallet className="text-cyan-400" size={24} />
              <h2 className="text-xl font-bold">Saldo em SOL</h2>
            </div>
            <p className="text-4xl font-bold text-cyan-400">{data.balances.sol.toFixed(2)}</p>
            <p className="text-slate-400 text-sm mt-2">≈ ${(data.balances.sol * 200).toFixed(2)} USD</p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-lg p-6">
            <div className="flex items-center gap-3 mb-4">
              <Zap className="text-purple-400" size={24} />
              <h2 className="text-xl font-bold">Saldo em RCN</h2>
            </div>
            <p className="text-4xl font-bold text-purple-400">{data.balances.rcn.toLocaleString("pt-BR")}</p>
            <p className="text-slate-400 text-sm mt-2">≈ ${(data.balances.rcn * 0.15).toFixed(2)} USD</p>
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
            {data.cars.map((car) => (
              <div key={car.id} className="bg-slate-900 border border-slate-800 rounded-lg p-4 hover:border-cyan-400 transition-colors">
                <div className="text-5xl mb-3">{car.image}</div>
                <h3 className="font-bold text-lg mb-2">{car.name}</h3>
                <div className="space-y-1 text-sm text-slate-400 mb-3">
                  <p>
                    <span className="text-slate-300">Raridade:</span> {car.rarity}
                  </p>
                  <p>
                    <span className="text-slate-300">Nível:</span> {car.level}
                  </p>
                  <p>
                    <span className="text-slate-300">Multiplicador:</span> {car.multiplier}x
                  </p>
                  <p>
                    <span className="text-slate-300">Vitórias:</span> {car.wins}/{car.totalRaces}
                  </p>
                </div>
                <div className="w-full bg-slate-800 rounded-full h-2">
                  <div
                    className="bg-cyan-400 h-2 rounded-full"
                    style={{ width: `${(car.wins / car.totalRaces) * 100}%` }}
                  />
                </div>
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
                  {data.transactions.map((tx) => (
                    <tr key={tx.id} className="border-b border-slate-800 hover:bg-slate-800/30 transition-colors">
                      <td className="px-6 py-4 text-sm">
                        <span className="inline-block px-2 py-1 rounded bg-slate-800 text-xs font-semibold">
                          {tx.type === "reward" && "🎁 Recompensa"}
                          {tx.type === "purchase" && "🛒 Compra"}
                          {tx.type === "stake" && "📌 Stake"}
                          {tx.type === "unstake" && "📤 Unstake"}
                          {tx.type === "burn" && "🔥 Queima"}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-300">{tx.description}</td>
                      <td className="px-6 py-4 text-sm font-semibold">
                        <span className={tx.type === "reward" ? "text-green-400" : "text-red-400"}>
                          {tx.type === "reward" || tx.type === "unstake" ? "+" : "-"}
                          {tx.amount.toLocaleString("pt-BR")} {tx.token}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-400">{formatDate(tx.timestamp)}</td>
                      <td className="px-6 py-4 text-sm">
                        {tx.status === "completed" && <span className="text-green-400">✓ Completo</span>}
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
      </main>
    </div>
  );
}
