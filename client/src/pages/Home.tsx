import { Button } from "@/components/ui/button";
import { Zap, BarChart, Users, Fuel, Wrench } from "lucide-react";
import { APP_TITLE } from "@/const";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans">
      {/* Navbar */}
      <header className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-sm border-b border-slate-800">
        <nav className="container mx-auto flex items-center justify-between px-4 py-4">
          <h1 className="text-2xl font-bold text-cyan-400">APEX RACERS</h1>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#sobre" className="hover:text-cyan-400 transition-colors">
              Sobre
            </a>
            <a href="#gameplay" className="hover:text-cyan-400 transition-colors">
              Gameplay
            </a>
            <a href="#tokenomics" className="hover:text-cyan-400 transition-colors">
              Tokenomics
            </a>
            <a href="/whitepaper" className="hover:text-cyan-400 transition-colors">
              Whitepaper
            </a>
          </div>
          <Button className="hidden md:block bg-cyan-500 text-slate-950 font-bold hover:bg-cyan-400 transition-all">
            Entrar no Jogo
          </Button>
        </nav>
      </header>

      <main>
        {/* Hero Section */}
        <section id="sobre" className="container mx-auto px-4 py-20 md:py-32 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            A Nova Geração de Corridas na Solana.
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-8">
            ROI Previsível. Governança Real. Jogo Estratégico. Bem-vindo ao futuro dos jogos Play-to-Earn.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="bg-cyan-500 text-slate-950 font-bold py-3 px-8 text-lg hover:bg-cyan-400 transition-all shadow-lg shadow-cyan-500/50">
              Mint em Breve
            </Button>
            <Button variant="outline" className="border-slate-600 text-white hover:bg-slate-800 font-bold py-3 px-8 text-lg">
              Leia o Whitepaper
            </Button>
          </div>
        </section>

        {/* Pillars Section */}
        <section className="bg-slate-900/50 py-20">
          <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="flex flex-col items-center text-center">
              <Zap className="w-12 h-12 text-cyan-400 mb-4" />
              <h3 className="text-2xl font-bold mb-2">Economia Estável</h3>
              <p className="text-slate-400">
                Ganhos e custos atrelados ao dólar via oráculo, removendo a volatilidade e garantindo previsibilidade.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <BarChart className="w-12 h-12 text-cyan-400 mb-4" />
              <h3 className="text-2xl font-bold mb-2">ROI Rápido</h3>
              <p className="text-slate-400">
                Nossa meta é um ROI de ~12 dias para carros Comuns, recompensando o jogo dedicado desde o início.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Users className="w-12 h-12 text-cyan-400 mb-4" />
              <h3 className="text-2xl font-bold mb-2">Receita Real para Stakers</h3>
              <p className="text-slate-400">
                30% de todas as taxas de protocolo em SOL são distribuídas para quem faz staking de $RCN.
              </p>
            </div>
          </div>
        </section>

        {/* Gameplay Section */}
        <section id="gameplay" className="container mx-auto px-4 py-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Três Modos, Uma Decisão Estratégica
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-900 border border-slate-700 p-8 rounded-xl hover:border-cyan-500 transition-colors">
              <Zap className="w-10 h-10 text-rose-500 mx-auto mb-4" />
              <h4 className="text-xl font-bold mb-2 text-center">Arrancada</h4>
              <p className="text-slate-400 text-center">
                Foco total em ganhos de $RCN. Ideal para carros com alta Aceleração.
              </p>
            </div>
            <div className="bg-slate-900 border border-slate-700 p-8 rounded-xl hover:border-cyan-500 transition-colors">
              <Fuel className="w-10 h-10 text-rose-500 mx-auto mb-4" />
              <h4 className="text-xl font-bold mb-2 text-center">Circuito de Rua</h4>
              <p className="text-slate-400 text-center">
                Um modo equilibrado, oferecendo uma mistura de $RCN e materiais de crafting.
              </p>
            </div>
            <div className="bg-slate-900 border border-slate-700 p-8 rounded-xl hover:border-cyan-500 transition-colors">
              <Wrench className="w-10 h-10 text-rose-500 mx-auto mb-4" />
              <h4 className="text-xl font-bold mb-2 text-center">Exploração</h4>
              <p className="text-slate-400 text-center">
                Foco em coletar recursos raros. Perfeito para carros com alto Porta-Malas.
              </p>
            </div>
          </div>
        </section>

        {/* Tokenomics Section */}
        <section id="tokenomics" className="bg-slate-900/50 py-20">
          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Um Token Feito para Durar</h2>
              <p className="text-slate-300 text-lg mb-6">
                Com 55% do supply destinado a recompensas e um sistema agressivo de queima, o $RCN é projetado para a
                longevidade e sustentabilidade do ecossistema.
              </p>
              <a href="#" className="text-cyan-400 font-bold text-lg hover:underline">
                Ver detalhes no Whitepaper →
              </a>
            </div>
            <div className="md:w-1/2">
              <div className="bg-slate-800 border border-slate-700 p-8 rounded-xl">
                <h4 className="font-bold text-white mb-4">Distribuição do Token $RCN</h4>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-slate-300">Recompensas P2E:</span>
                    <span className="font-bold text-cyan-400">55%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-300">Pool de Liquidez:</span>
                    <span className="font-bold text-cyan-400">10%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-300">Fundo do Ecossistema:</span>
                    <span className="font-bold text-cyan-400">15%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-300">Outros (Time, Mkt, etc):</span>
                    <span className="font-bold text-cyan-400">20%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Community Section */}
        <section className="container mx-auto px-4 py-20 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Junte-se à Corrida</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-8">
            <a
              href="#"
              className="bg-indigo-600 text-white font-bold py-4 px-8 rounded-lg flex items-center justify-center gap-3 text-lg hover:bg-indigo-500 transition-colors"
            >
              Discord
            </a>
            <a
              href="#"
              className="bg-blue-500 text-white font-bold py-4 px-8 rounded-lg flex items-center justify-center gap-3 text-lg hover:bg-blue-400 transition-colors"
            >
              Twitter
            </a>
            <a
              href="#"
              className="bg-purple-600 text-white font-bold py-4 px-8 rounded-lg flex items-center justify-center gap-3 text-lg hover:bg-purple-500 transition-colors"
            >
              Whitepaper
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-800 py-8">
        <div className="container mx-auto px-4 text-center text-slate-400">
          <p>&copy; 2025 Apex Racers. Todos os direitos reservados. | Construído na Solana</p>
        </div>
      </footer>
    </div>
  );
}
