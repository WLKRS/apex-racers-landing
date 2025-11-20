import { useState } from "react";
import { ChevronRight } from "lucide-react";

const sections = [
  { id: "intro", label: "Introdução" },
  { id: "concept", label: "Conceito do Jogo" },
  { id: "nft", label: "Sistema de NFT" },
  { id: "tokenomics", label: "Tokenomics" },
  { id: "economy", label: "Modelo Econômico" },
  { id: "roadmap", label: "Roadmap" },
  { id: "risks", label: "Riscos e Mitigação" },
];

export default function Whitepaper() {
  const [activeSection, setActiveSection] = useState("intro");

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Header */}
      <div className="border-b border-slate-800 bg-slate-950 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h1 className="text-4xl font-bold text-cyan-400">Apex Racers Whitepaper</h1>
          <p className="text-slate-400 mt-2">A Nova Geração de Corridas na Solana</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-slate-900 rounded-lg border border-slate-800 p-4">
              <h3 className="text-sm font-semibold text-cyan-400 mb-4 uppercase tracking-wider">
                Seções
              </h3>
              <nav className="space-y-2">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={`w-full text-left px-3 py-2 rounded-md text-sm transition-all flex items-center gap-2 ${
                      activeSection === section.id
                        ? "bg-cyan-400 text-slate-950 font-semibold"
                        : "text-slate-300 hover:bg-slate-800"
                    }`}
                  >
                    {activeSection === section.id && <ChevronRight size={16} />}
                    {section.label}
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-12">
            {/* Introdução */}
            <section id="intro" className="scroll-mt-24">
              <h2 className="text-3xl font-bold text-cyan-400 mb-4">Introdução</h2>
              <div className="prose prose-invert max-w-none space-y-4 text-slate-300">
                <p>
                  <strong>Apex Racers</strong> é um jogo Play-to-Earn (P2E) inovador construído na blockchain Solana,
                  projetado para oferecer uma experiência de corrida estratégica com recompensas reais e sustentáveis.
                </p>
                <p>
                  Diferentemente de muitos projetos P2E que falharam por falta de sustentabilidade econômica, Apex Racers
                  foi cuidadosamente projetado com base em lições aprendidas de projetos como CCAR, Bombcrypto e
                  Cryptomines. Nosso modelo econômico prioriza:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>
                    <strong>ROI Previsível:</strong> Jogadores podem calcular retorno esperado em ~12 dias
                  </li>
                  <li>
                    <strong>Governança Real:</strong> Comunidade participa de decisões importantes
                  </li>
                  <li>
                    <strong>Gameplay Estratégico:</strong> Não é apenas "clique e ganhe"
                  </li>
                  <li>
                    <strong>Economia Dual:</strong> Queima de tokens + taxas em SOL para sustentabilidade
                  </li>
                </ul>
              </div>
            </section>

            {/* Conceito do Jogo */}
            <section id="concept" className="scroll-mt-24">
              <h2 className="text-3xl font-bold text-cyan-400 mb-4">Conceito do Jogo</h2>
              <div className="prose prose-invert max-w-none space-y-4 text-slate-300">
                <p>
                  Apex Racers combina elementos de corrida estratégica com um sistema de NFT robusto. Jogadores possuem
                  carros NFT únicos que podem ser aprimorados, alugados e negociados.
                </p>

                <h3 className="text-xl font-semibold text-cyan-300 mt-6">Carros NFT</h3>
                <p>
                  Existem <strong>50.000 carros NFT limitados</strong> distribuídos em 7 níveis de raridade:
                </p>
                <div className="bg-slate-900 rounded-lg p-4 border border-slate-800">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-slate-700">
                        <th className="text-left py-2 px-2 text-cyan-400">Raridade</th>
                        <th className="text-left py-2 px-2 text-cyan-400">Quantidade</th>
                        <th className="text-left py-2 px-2 text-cyan-400">Multiplicador</th>
                      </tr>
                    </thead>
                    <tbody className="space-y-1">
                      <tr className="border-b border-slate-800">
                        <td className="py-2 px-2">Comum</td>
                        <td className="py-2 px-2">25.000</td>
                        <td className="py-2 px-2">1.0x</td>
                      </tr>
                      <tr className="border-b border-slate-800">
                        <td className="py-2 px-2">Incomum</td>
                        <td className="py-2 px-2">12.500</td>
                        <td className="py-2 px-2">1.2x</td>
                      </tr>
                      <tr className="border-b border-slate-800">
                        <td className="py-2 px-2">Raro</td>
                        <td className="py-2 px-2">6.250</td>
                        <td className="py-2 px-2">1.5x</td>
                      </tr>
                      <tr className="border-b border-slate-800">
                        <td className="py-2 px-2">Épico</td>
                        <td className="py-2 px-2">3.125</td>
                        <td className="py-2 px-2">2.0x</td>
                      </tr>
                      <tr className="border-b border-slate-800">
                        <td className="py-2 px-2">Lendário</td>
                        <td className="py-2 px-2">1.563</td>
                        <td className="py-2 px-2">2.5x</td>
                      </tr>
                      <tr className="border-b border-slate-800">
                        <td className="py-2 px-2">Mítico</td>
                        <td className="py-2 px-2">782</td>
                        <td className="py-2 px-2">3.0x</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-2">Divino</td>
                        <td className="py-2 px-2">391</td>
                        <td className="py-2 px-2">4.0x</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3 className="text-xl font-semibold text-cyan-300 mt-6">Atributos do Carro</h3>
                <p>Cada carro possui 4 atributos principais que afetam o desempenho:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>
                    <strong>Aceleração:</strong> Velocidade inicial e capacidade de retomada
                  </li>
                  <li>
                    <strong>Tecnologia:</strong> Eficiência de combustível e consumo de energia
                  </li>
                  <li>
                    <strong>Porta-Malas:</strong> Capacidade de carregar materiais (Exploração)
                  </li>
                  <li>
                    <strong>Controle:</strong> Manuseio em curvas e estabilidade
                  </li>
                </ul>

                <h3 className="text-xl font-semibold text-cyan-300 mt-6">Três Modos de Jogo</h3>
                <div className="space-y-4">
                  <div className="bg-slate-900 rounded-lg p-4 border border-slate-800">
                    <h4 className="font-semibold text-cyan-300 mb-2">🏁 Arrancada</h4>
                    <p>
                      Foco total em ganho de $RCN. Corridas curtas e intensas onde a aceleração é crucial. Ideal para
                      jogadores que querem retorno rápido.
                    </p>
                  </div>
                  <div className="bg-slate-900 rounded-lg p-4 border border-slate-800">
                    <h4 className="font-semibold text-cyan-300 mb-2">🛣️ Circuito de Rua</h4>
                    <p>
                      Modo equilibrado com mistura de $RCN e materiais de crafting. Corridas mais longas que requerem
                      estratégia e controle.
                    </p>
                  </div>
                  <div className="bg-slate-900 rounded-lg p-4 border border-slate-800">
                    <h4 className="font-semibold text-cyan-300 mb-2">🔧 Exploração</h4>
                    <p>
                      Foco em coleta de materiais raros para crafting. Recompensas menores mas mais consistentes. Ideal
                      para upgrade de carros.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Sistema de NFT */}
            <section id="nft" className="scroll-mt-24">
              <h2 className="text-3xl font-bold text-cyan-400 mb-4">Sistema de NFT</h2>
              <div className="prose prose-invert max-w-none space-y-4 text-slate-300">
                <h3 className="text-xl font-semibold text-cyan-300 mt-6">Minting e Distribuição</h3>
                <p>
                  Os 50.000 carros NFT serão distribuídos através de um sistema de minting faseado. Cada carro é
                  minado pagando em SOL, com os fundos destinados ao pool de liquidez inicial.
                </p>

                <h3 className="text-xl font-semibold text-cyan-300 mt-6">Garage System</h3>
                <p>
                  Jogadores podem armazenar até 10 carros na garagem com bônus progressivos. Cada carro adicional
                  fornece um pequeno multiplicador de ganhos.
                </p>

                <h3 className="text-xl font-semibold text-cyan-300 mt-6">Crafting e Upgrades</h3>
                <p>
                  Materiais coletados em modo Exploração podem ser usados para aprimorar atributos de carros. O
                  crafting segue um modelo "Pay or Wait" - pague $RCN para upgrade instantâneo ou espere 24h.
                </p>

                <h3 className="text-xl font-semibold text-cyan-300 mt-6">Marketplace</h3>
                <p>
                  Jogadores podem comprar, vender e alugar carros no marketplace integrado. Aluguéis geram renda
                  passiva para proprietários.
                </p>
              </div>
            </section>

            {/* Tokenomics */}
            <section id="tokenomics" className="scroll-mt-24">
              <h2 className="text-3xl font-bold text-cyan-400 mb-4">Tokenomics</h2>
              <div className="prose prose-invert max-w-none space-y-4 text-slate-300">
                <h3 className="text-xl font-semibold text-cyan-300 mt-6">Token $RCN</h3>
                <p>
                  <strong>Supply Máximo:</strong> 1 bilhão de tokens
                </p>

                <h3 className="text-xl font-semibold text-cyan-300 mt-6">Distribuição</h3>
                <div className="bg-slate-900 rounded-lg p-4 border border-slate-800">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-slate-700">
                        <th className="text-left py-2 px-2 text-cyan-400">Categoria</th>
                        <th className="text-left py-2 px-2 text-cyan-400">Percentual</th>
                        <th className="text-left py-2 px-2 text-cyan-400">Tokens</th>
                      </tr>
                    </thead>
                    <tbody className="space-y-1">
                      <tr className="border-b border-slate-800">
                        <td className="py-2 px-2">Recompensas P2E</td>
                        <td className="py-2 px-2">55%</td>
                        <td className="py-2 px-2">550.000.000</td>
                      </tr>
                      <tr className="border-b border-slate-800">
                        <td className="py-2 px-2">Pool de Liquidez</td>
                        <td className="py-2 px-2">10%</td>
                        <td className="py-2 px-2">100.000.000</td>
                      </tr>
                      <tr className="border-b border-slate-800">
                        <td className="py-2 px-2">Fundo do Ecossistema</td>
                        <td className="py-2 px-2">15%</td>
                        <td className="py-2 px-2">150.000.000</td>
                      </tr>
                      <tr className="border-b border-slate-800">
                        <td className="py-2 px-2">Tesouro</td>
                        <td className="py-2 px-2">5%</td>
                        <td className="py-2 px-2">50.000.000</td>
                      </tr>
                      <tr className="border-b border-slate-800">
                        <td className="py-2 px-2">Time</td>
                        <td className="py-2 px-2">5%</td>
                        <td className="py-2 px-2">50.000.000</td>
                      </tr>
                      <tr className="border-b border-slate-800">
                        <td className="py-2 px-2">Marketing</td>
                        <td className="py-2 px-2">5%</td>
                        <td className="py-2 px-2">50.000.000</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-2">Advisors</td>
                        <td className="py-2 px-2">5%</td>
                        <td className="py-2 px-2">50.000.000</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3 className="text-xl font-semibold text-cyan-300 mt-6">Mecanismo de Queima</h3>
                <p>Para cada $RCN gasto em-jogo:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>60% são queimados (removidos da circulação)</li>
                  <li>25% voltam ao pool de recompensas P2E</li>
                  <li>10% vão para stakers</li>
                  <li>5% vão para bug bounty</li>
                </ul>

                <h3 className="text-xl font-semibold text-cyan-300 mt-6">Economia Dual</h3>
                <p>
                  Apex Racers usa um modelo de economia dual para sustentabilidade:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>
                    <strong>$RCN:</strong> Token do jogo, usado para crafting, upgrades e recompensas
                  </li>
                  <li>
                    <strong>SOL:</strong> Taxas de protocolo, minting de NFT, e transações do marketplace
                  </li>
                </ul>
              </div>
            </section>

            {/* Modelo Econômico */}
            <section id="economy" className="scroll-mt-24">
              <h2 className="text-3xl font-bold text-cyan-400 mb-4">Modelo Econômico</h2>
              <div className="prose prose-invert max-w-none space-y-4 text-slate-300">
                <h3 className="text-xl font-semibold text-cyan-300 mt-6">ROI Previsível</h3>
                <p>
                  O modelo foi projetado para oferecer um ROI de aproximadamente <strong>12 dias</strong> para um
                  jogador casual com um carro Comum:
                </p>
                <div className="bg-slate-900 rounded-lg p-4 border border-slate-800">
                  <p className="text-sm">
                    Assumindo: Carro Comum (1.0x), 3 corridas/dia, ~100 $RCN/corrida, preço $RCN = $0.10
                  </p>
                  <p className="mt-2">Ganho diário: ~$30 USD</p>
                  <p>Investimento inicial: ~$300 USD (3 SOL @ $100/SOL)</p>
                  <p className="text-cyan-400 font-semibold">ROI: ~12 dias</p>
                </div>

                <h3 className="text-xl font-semibold text-cyan-300 mt-6">Staking com Rendimento Real</h3>
                <p>
                  30% de todas as taxas em SOL coletadas são distribuídas para stakers. Diferentes períodos de lock-up
                  oferecem diferentes multiplicadores:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Flexível: 1.0x multiplicador</li>
                  <li>3 meses: 1.5x multiplicador</li>
                  <li>6 meses: 2.0x multiplicador</li>
                  <li>12 meses: 3.0x multiplicador</li>
                </ul>

                <h3 className="text-xl font-semibold text-cyan-300 mt-6">Sistema de Referral</h3>
                <p>
                  Jogadores que convidam amigos recebem 10% de comissão em ganhos referenciados. Isso incentiva
                  crescimento orgânico e comunidade.
                </p>

                <h3 className="text-xl font-semibold text-cyan-300 mt-6">Preços Dinâmicos com Oracle</h3>
                <p>
                  Todos os custos em-jogo são denominados em USD mas pagos em $RCN. Um oracle (Pyth) fornece taxa de
                  câmbio em tempo real, garantindo estabilidade de preços.
                </p>
              </div>
            </section>

            {/* Roadmap */}
            <section id="roadmap" className="scroll-mt-24">
              <h2 className="text-3xl font-bold text-cyan-400 mb-4">Roadmap</h2>
              <div className="prose prose-invert max-w-none space-y-4 text-slate-300">
                <h3 className="text-xl font-semibold text-cyan-300 mt-6">Q1 2025 - Lançamento Fase 1</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Landing page e whitepaper</li>
                  <li>Smart contracts auditados</li>
                  <li>Minting de primeiros 10.000 carros</li>
                  <li>Modo Arrancada disponível</li>
                </ul>

                <h3 className="text-xl font-semibold text-cyan-300 mt-6">Q2 2025 - Expansão</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Modo Circuito de Rua</li>
                  <li>Modo Exploração</li>
                  <li>Sistema de Crafting</li>
                  <li>Marketplace</li>
                </ul>

                <h3 className="text-xl font-semibold text-cyan-300 mt-6">Q3 2025 - Governança</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>DAO e votação comunitária</li>
                  <li>Staking com rendimento</li>
                  <li>Aluguel de carros</li>
                </ul>

                <h3 className="text-xl font-semibold text-cyan-300 mt-6">Q4 2025 - Futuro</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Corridas multiplayer</li>
                  <li>Ligas competitivas</li>
                  <li>Integração com outros jogos Solana</li>
                </ul>
              </div>
            </section>

            {/* Riscos e Mitigação */}
            <section id="risks" className="scroll-mt-24">
              <h2 className="text-3xl font-bold text-cyan-400 mb-4">Riscos e Mitigação</h2>
              <div className="prose prose-invert max-w-none space-y-4 text-slate-300">
                <h3 className="text-xl font-semibold text-cyan-300 mt-6">Risco: Inflação de Token</h3>
                <p>
                  <strong>Mitigação:</strong> 60% de todos os $RCN gastos são queimados, criando deflação. Além disso,
                  o modelo P2E é cuidadosamente calibrado para não gerar mais tokens do que o sistema pode absorver.
                </p>

                <h3 className="text-xl font-semibold text-cyan-300 mt-6">Risco: Pump and Dump</h3>
                <p>
                  <strong>Mitigação:</strong> Tokenomics transparentes com distribuição gradual. Equipe e advisors têm
                  vesting de 12 meses. Foco em gameplay real em vez de especulação.
                </p>

                <h3 className="text-xl font-semibold text-cyan-300 mt-6">Risco: Falta de Gameplay</h3>
                <p>
                  <strong>Mitigação:</strong> Três modos de jogo diferentes com mecânicas estratégicas reais. Não é
                  apenas "clique e ganhe".
                </p>

                <h3 className="text-xl font-semibold text-cyan-300 mt-6">Risco: Segurança de Smart Contracts</h3>
                <p>
                  <strong>Mitigação:</strong> Todos os contratos serão auditados por firma de segurança terceirizada
                  antes do lançamento.
                </p>

                <h3 className="text-xl font-semibold text-cyan-300 mt-6">Risco: Volatilidade de SOL</h3>
                <p>
                  <strong>Mitigação:</strong> Preços em-jogo são denominados em USD com oracle fornecendo taxa de
                  câmbio. Taxas em SOL são convertidas para stablecoin para tesouro.
                </p>
              </div>
            </section>

            {/* Footer */}
            <section className="border-t border-slate-800 pt-12 mt-12">
              <div className="bg-slate-900 rounded-lg p-8 border border-slate-800 text-center">
                <p className="text-slate-400">
                  © 2025 Apex Racers. Todos os direitos reservados. Construído na Solana.
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
