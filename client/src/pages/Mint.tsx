import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useAuth } from "@/_core/hooks/useAuth";
import { trpc } from "@/lib/trpc";
import { Loader2, Zap, Sparkles } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function Mint() {
  const { user, isAuthenticated } = useAuth();
  const [paymentMethod, setPaymentMethod] = useState<"SOL" | "RCN">("SOL");
  const [isMinting, setIsMinting] = useState(false);

  // Fetch mint costs
  const { data: mintCosts, isLoading: costsLoading } = trpc.game.getMintCosts.useQuery();

  // Fetch player's garage
  const { data: garage, isLoading: garageLoading } = trpc.game.getGarage.useQuery(
    undefined,
    { enabled: isAuthenticated }
  );

  // Mint car mutation
  const mintCarMutation = trpc.game.mintCar.useMutation({
    onSuccess: (data) => {
      toast.success(`🎉 Carro mintado com sucesso! ${data.car?.carName}`);
      setIsMinting(false);
      // Invalidate garage query to refresh
      trpc.useUtils().game.getGarage.invalidate();
    },
    onError: (error) => {
      toast.error(`Erro ao mintear: ${error.message}`);
      setIsMinting(false);
    },
  });

  const handleMint = async () => {
    if (!isAuthenticated) {
      toast.error("Conecte sua carteira primeiro!");
      return;
    }

    setIsMinting(true);
    try {
      await mintCarMutation.mutateAsync({ paymentMethod });
    } catch (error) {
      console.error("Mint error:", error);
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-slate-950 text-white">
        <Navbar />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl font-bold text-cyan-400 mb-4">Mintear Carro</h1>
          <p className="text-slate-300 mb-8">Conecte sua carteira para mintear um novo carro</p>
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
          <h1 className="text-4xl font-bold text-cyan-400">Mintear Novo Carro</h1>
          <p className="text-slate-400">Crie um carro único com stats aleatórios baseados em raridade</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left: Mint Interface */}
          <div className="lg:col-span-2 space-y-6">
            {/* Rarity Distribution */}
            <Card className="bg-slate-900 border-slate-800 p-6">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Sparkles className="text-cyan-400" size={24} />
                Distribuição de Raridade
              </h2>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-slate-300">Comum</span>
                  <div className="flex items-center gap-2">
                    <div className="w-32 bg-slate-800 rounded-full h-2">
                      <div className="bg-gray-400 h-2 rounded-full" style={{ width: "60%" }} />
                    </div>
                    <span className="text-gray-400 text-sm">60%</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-300">Incomum</span>
                  <div className="flex items-center gap-2">
                    <div className="w-32 bg-slate-800 rounded-full h-2">
                      <div className="bg-green-400 h-2 rounded-full" style={{ width: "15%" }} />
                    </div>
                    <span className="text-green-400 text-sm">15%</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-300">Raro</span>
                  <div className="flex items-center gap-2">
                    <div className="w-32 bg-slate-800 rounded-full h-2">
                      <div className="bg-blue-400 h-2 rounded-full" style={{ width: "15%" }} />
                    </div>
                    <span className="text-blue-400 text-sm">15%</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-300">Épico</span>
                  <div className="flex items-center gap-2">
                    <div className="w-32 bg-slate-800 rounded-full h-2">
                      <div className="bg-purple-400 h-2 rounded-full" style={{ width: "7%" }} />
                    </div>
                    <span className="text-purple-400 text-sm">7%</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-300">Lendário</span>
                  <div className="flex items-center gap-2">
                    <div className="w-32 bg-slate-800 rounded-full h-2">
                      <div className="bg-yellow-400 h-2 rounded-full" style={{ width: "2%" }} />
                    </div>
                    <span className="text-yellow-400 text-sm">2%</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-300">Mítico</span>
                  <div className="flex items-center gap-2">
                    <div className="w-32 bg-slate-800 rounded-full h-2">
                      <div className="bg-red-400 h-2 rounded-full" style={{ width: "1%" }} />
                    </div>
                    <span className="text-red-400 text-sm">1%</span>
                  </div>
                </div>
              </div>
            </Card>

            {/* Mint Costs */}
            <Card className="bg-slate-900 border-slate-800 p-6">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Zap className="text-cyan-400" size={24} />
                Custos de Mint
              </h2>
              {costsLoading ? (
                <div className="flex items-center justify-center py-8">
                  <Loader2 className="animate-spin text-cyan-400" size={32} />
                </div>
              ) : (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {mintCosts?.map((cost) => (
                    <div key={cost.rarity} className="bg-slate-800 border border-slate-700 rounded-lg p-4">
                      <p className="text-sm text-slate-400 mb-2">{cost.rarity}</p>
                      <p className="text-lg font-bold text-cyan-400">{cost.costSOL} SOL</p>
                      <p className="text-xs text-slate-500">ou {cost.costRCN.toLocaleString()} RCN</p>
                    </div>
                  ))}
                </div>
              )}
            </Card>

            {/* Payment Method Selection */}
            <Card className="bg-slate-900 border-slate-800 p-6">
              <h2 className="text-2xl font-bold mb-4">Método de Pagamento</h2>
              <div className="grid grid-cols-2 gap-4">
                <button
                  onClick={() => setPaymentMethod("SOL")}
                  className={`p-4 rounded-lg border-2 transition-all ${
                    paymentMethod === "SOL"
                      ? "border-cyan-400 bg-cyan-400/10"
                      : "border-slate-700 bg-slate-800 hover:border-slate-600"
                  }`}
                >
                  <div className="text-2xl mb-2">◎</div>
                  <p className="font-bold">SOL</p>
                  <p className="text-sm text-slate-400">Solana Blockchain</p>
                </button>
                <button
                  onClick={() => setPaymentMethod("RCN")}
                  className={`p-4 rounded-lg border-2 transition-all ${
                    paymentMethod === "RCN"
                      ? "border-purple-400 bg-purple-400/10"
                      : "border-slate-700 bg-slate-800 hover:border-slate-600"
                  }`}
                >
                  <div className="text-2xl mb-2">⚡</div>
                  <p className="font-bold">RCN</p>
                  <p className="text-sm text-slate-400">Token do Jogo</p>
                </button>
              </div>
            </Card>

            {/* Mint Button */}
            <Button
              onClick={handleMint}
              disabled={isMinting || mintCarMutation.isPending}
              className="w-full bg-cyan-500 hover:bg-cyan-600 text-slate-950 font-bold py-6 text-lg"
            >
              {isMinting || mintCarMutation.isPending ? (
                <>
                  <Loader2 className="animate-spin mr-2" size={20} />
                  Mintando...
                </>
              ) : (
                <>
                  <Sparkles className="mr-2" size={20} />
                  Mintear Novo Carro
                </>
              )}
            </Button>
          </div>

          {/* Right: Garage Summary */}
          <div className="space-y-6">
            <Card className="bg-slate-900 border-slate-800 p-6">
              <h2 className="text-2xl font-bold mb-4">Sua Garagem</h2>
              {garageLoading ? (
                <div className="flex items-center justify-center py-8">
                  <Loader2 className="animate-spin text-cyan-400" size={24} />
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="text-center">
                    <p className="text-4xl font-bold text-cyan-400">{garage?.length || 0}</p>
                    <p className="text-slate-400">Carros na Garagem</p>
                  </div>

                  {garage && garage.length > 0 && (
                    <div className="space-y-2 max-h-96 overflow-y-auto">
                      {garage.map((car) => (
                        <div key={car.id} className="bg-slate-800 border border-slate-700 rounded-lg p-3">
                          <p className="font-bold text-sm">{car.carName}</p>
                          <div className="flex justify-between items-center mt-2">
                            <span className="text-xs text-slate-400">{car.rarity}</span>
                            <span className="text-xs text-cyan-400">Nível {car.level}</span>
                          </div>
                          <div className="flex gap-2 mt-2 text-xs">
                            <span className="text-slate-400">⚡ {car.speed}</span>
                            <span className="text-slate-400">🏎️ {car.acceleration}</span>
                            <span className="text-slate-400">🎯 {car.handling}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {(!garage || garage.length === 0) && (
                    <p className="text-center text-slate-400 text-sm py-4">
                      Nenhum carro ainda. Mint seu primeiro! 🚗
                    </p>
                  )}
                </div>
              )}
            </Card>

            {/* Info Card */}
            <Card className="bg-slate-900 border-slate-800 p-6">
              <h3 className="font-bold mb-3">💡 Dicas</h3>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>• Carros com maior raridade têm stats melhores</li>
                <li>• Cada carro tem stats aleatórios únicos</li>
                <li>• Você pode mintear múltiplos carros</li>
                <li>• Use SOL ou RCN para pagar o mint</li>
              </ul>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
