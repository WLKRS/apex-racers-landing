import { useState } from "react";
import Navbar from "@/components/Navbar";
import { ChevronDown } from "lucide-react";

interface Section {
  id: string;
  title: string;
  content: React.ReactNode;
}

const sections: Section[] = [
  {
    id: "executive-summary",
    title: "Sumário Executivo",
    content: (
      <div className="space-y-4">
        <p>
          Apex Racers é um jogo de corrida NFT estratégico construído na blockchain Solana, meticulosamente projetado para resolver os desafios de sustentabilidade que afligiram a primeira geração de jogos Play-to-Earn. Através de uma economia totalmente atrelada a um oráculo de preços, garantimos um Retorno sobre Investimento (ROI) rápido e previsível, eliminando a incerteza causada pela volatilidade do mercado.
        </p>
        <p>
          Nosso modelo de governança inovador transforma os detentores de tokens em parceiros, distribuindo uma parcela da receita real do projeto (em SOL) e dando-lhes poder de decisão sobre o futuro do ecossistema. Com uma oferta limitada de ativos, múltiplos mecanismos de queima de tokens e um foco no crescimento orgânico impulsionado pela comunidade, Apex Racers oferece uma experiência de jogo divertida, profunda e economicamente viável a longo prazo.
        </p>
        <p className="font-semibold text-cyan-400">
          Nossa missão é simples: construir um ecossistema de propriedade dos jogadores, onde a transparência é total, o compromisso é recompensado e a diversão impulsiona o valor.
        </p>
      </div>
    ),
  },
  {
    id: "introduction",
    title: "1. Introdução: A Evolução Necessária do Play-to-Earn",
    content: (
      <div className="space-y-4">
        <p>
          O surgimento dos jogos Play-to-Earn (P2E) representou uma mudança de paradigma, prometendo um futuro onde os jogadores seriam recompensados financeiramente por seu tempo e habilidade. Projetos pioneiros demonstraram o imenso potencial deste modelo, validando a ideia de que os jogadores podem ter propriedade real e soberana sobre seus ativos digitais.
        </p>
        <p>
          Contudo, a euforia inicial da primeira onda de jogos P2E também expôs falhas estruturais críticas. Muitas economias de jogos foram construídas sobre fundações frágeis, caracterizadas por uma inflação descontrolada de tokens, uma dependência insustentável de um fluxo constante de novos jogadores para manter a demanda, e uma jogabilidade que muitas vezes priorizava a extração de valor em detrimento da diversão.
        </p>
        <p>
          Apex Racers nasce de uma análise profunda dessas falhas e da convicção de que é possível, e necessário, fazer melhor. Acreditamos que a sustentabilidade a longo prazo não vem da especulação, mas da criação de uma economia circular, autossustentável e com múltiplos fluxos de valor.
        </p>
        <div className="bg-cyan-900/30 border border-cyan-500/30 rounded-lg p-4 mt-4">
          <h4 className="font-semibold text-cyan-400 mb-3">Três Pilares Fundamentais:</h4>
          <ul className="space-y-2 text-sm">
            <li className="flex gap-2">
              <span className="text-cyan-400">•</span>
              <span><strong>Ativos Digitais com Escassez Real:</strong> Nossa coleção principal de Carros NFT é estritamente limitada a 50.000 unidades, garantindo que a propriedade seja sempre valiosa.</span>
            </li>
            <li className="flex gap-2">
              <span className="text-cyan-400">•</span>
              <span><strong>Economia Estável e Previsível:</strong> Atrelando todos os custos e recompensas do jogo a um valor fixo em dólar (USD) através de um oráculo, removemos a volatilidade do mercado.</span>
            </li>
            <li className="flex gap-2">
              <span className="text-cyan-400">•</span>
              <span><strong>Crescimento e Governança Comunitária:</strong> Nosso modelo é impulsionado por um generoso sistema de indicação que recompensa a comunidade.</span>
            </li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    id: "gameplay",
    title: "2. O Jogo: A Estratégia Diária do Chefe de Equipe",
    content: (
      <div className="space-y-4">
        <p>
          Apex Racers é um jogo de corrida de carros NFT focado em gerenciamento e estratégia. Os jogadores não pilotam os carros em tempo real; em vez disso, eles atuam como chefes de equipe, tomando decisões cruciais sobre quais carros usar, em qual tipo de corrida competir e como aprimorá-los.
        </p>
        <h4 className="font-semibold text-cyan-400 mt-4">2.1. Os Tipos de Corrida</h4>
        <div className="space-y-3">
          <div className="bg-purple-900/20 border border-purple-500/30 rounded p-3">
            <h5 className="font-semibold text-purple-400">🏁 Arrancada (Drag Race)</h5>
            <p className="text-sm mt-1">Uma corrida de alta velocidade com foco quase total em ganhos monetários. Ideal para carros com alta "Aceleração".</p>
            <p className="text-sm text-cyan-400 mt-1">Recompensas: 95% $RCN, 5% chance de Materiais</p>
          </div>
          <div className="bg-blue-900/20 border border-blue-500/30 rounded p-3">
            <h5 className="font-semibold text-blue-400">🛣️ Circuito de Rua (Street Circuit)</h5>
            <p className="text-sm mt-1">Um evento equilibrado que oferece uma mistura de ganhos e recursos. Uma escolha segura para qualquer tipo de carro.</p>
            <p className="text-sm text-cyan-400 mt-1">Recompensas: 50% $RCN, 50% chance de Materiais</p>
          </div>
          <div className="bg-orange-900/20 border border-orange-500/30 rounded p-3">
            <h5 className="font-semibold text-orange-400">🏜️ Exploração (Scavenge Run)</h5>
            <p className="text-sm mt-1">Uma corrida de longa distância em terrenos baldios, focada na coleta de recursos valiosos para crafting. Ideal para carros com alto "Porta-Malas".</p>
            <p className="text-sm text-cyan-400 mt-1">Recompensas: 5% $RCN, 95% chance de Materiais</p>
          </div>
        </div>
        <h4 className="font-semibold text-cyan-400 mt-4">2.2. O Ciclo de Jogo</h4>
        <ol className="space-y-2 text-sm list-decimal list-inside">
          <li><strong>Decisão Estratégica:</strong> Analise suas necessidades e atributos dos carros</li>
          <li><strong>Corrida:</strong> Inscreva o carro. Cada corrida inicia um cooldown de 5 minutos</li>
          <li><strong>Gerenciamento:</strong> Cada corrida consome gasolina. Reset diário às 00:00 UTC</li>
          <li><strong>Progressão:</strong> Invista em aprimoramentos e novos carros</li>
        </ol>
      </div>
    ),
  },
  {
    id: "assets",
    title: "3. Sistema de Ativos e Progressão",
    content: (
      <div className="space-y-4">
        <h4 className="font-semibold text-cyan-400">3.1. A Coleção Gênesis: Carros NFT</h4>
        <p>
          O ativo central do Apex Racers é o Carro NFT. A coleção inicial será estritamente limitada a <strong>50.000 unidades</strong>.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-cyan-500/30">
                <th className="text-left p-2 text-cyan-400">Raridade</th>
                <th className="text-left p-2 text-cyan-400">Distribuição</th>
                <th className="text-left p-2 text-cyan-400">Quantidade</th>
                <th className="text-left p-2 text-cyan-400">Nível Base</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Comum", "45%", "22.500", "Nível 1"],
                ["Incomum", "25%", "12.500", "Nível 2"],
                ["Raro", "15%", "7.500", "Nível 3"],
                ["Super-Raro", "8%", "4.000", "Nível 4"],
                ["Épico", "4%", "2.000", "Nível 5"],
                ["Lendário", "2%", "1.000", "Nível 6"],
                ["Mítico", "1%", "500", "Nível 7"],
              ].map((row, i) => (
                <tr key={i} className="border-b border-cyan-500/10">
                  <td className="p-2">{row[0]}</td>
                  <td className="p-2">{row[1]}</td>
                  <td className="p-2">{row[2]}</td>
                  <td className="p-2 text-cyan-400">{row[3]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <h4 className="font-semibold text-cyan-400 mt-4">3.2. Atributos e Níveis de Upgrade</h4>
        <ul className="space-y-2 text-sm">
          <li><strong>⚡ Aceleração:</strong> Determina o ganho de $RCN por corrida. Essencial para "Arrancada"</li>
          <li><strong>🔧 Tecnologia:</strong> Define o número de corridas por tanque de gasolina</li>
          <li><strong>🎒 Porta-Malas:</strong> Aumenta chance e qualidade de drop de Materiais. Essencial para "Exploração"</li>
          <li><strong>🎮 Controle:</strong> Atributo latente para futuro modo PvP</li>
        </ul>
      </div>
    ),
  },
  {
    id: "tokenomics",
    title: "4. Tokenomics e Governança ($RCN)",
    content: (
      <div className="space-y-4">
        <h4 className="font-semibold text-cyan-400">4.1. Fornecimento e Alocação</h4>
        <p>
          O fornecimento máximo de $RCN é fixado em <strong>1.000.000.000 (um bilhão) de tokens</strong>.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-cyan-500/30">
                <th className="text-left p-2 text-cyan-400">Categoria</th>
                <th className="text-left p-2 text-cyan-400">% do Total</th>
                <th className="text-left p-2 text-cyan-400">Quantidade</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Recompensas P2E", "55%", "550.000.000"],
                ["Pool de Liquidez (LP)", "10%", "100.000.000"],
                ["Fundo do Ecossistema", "15%", "150.000.000"],
                ["Tesouraria Operacional", "5%", "50.000.000"],
                ["Time", "5%", "50.000.000"],
                ["Marketing & Airdrops", "5%", "50.000.000"],
              ].map((row, i) => (
                <tr key={i} className="border-b border-cyan-500/10">
                  <td className="p-2">{row[0]}</td>
                  <td className="p-2">{row[1]}</td>
                  <td className="p-2 text-cyan-400">{row[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <h4 className="font-semibold text-cyan-400 mt-4">4.2. O Ciclo de Valor do $RCN</h4>
        <p className="text-sm">
          Todas as taxas de utilidade pagas em $RCN alimentam um ciclo de valor multifacetado:
        </p>
        <ul className="space-y-1 text-sm ml-4">
          <li>• <strong>10%</strong> para o indicador (se aplicável)</li>
          <li>• <strong>60%</strong> permanentemente queimados (Burned)</li>
          <li>• <strong>25%</strong> retornam para Pool de Recompensas P2E</li>
          <li>• <strong>10%</strong> distribuídos aos Stakers</li>
          <li>• <strong>5%</strong> alocados para Bug Bounty</li>
        </ul>
        <h4 className="font-semibold text-cyan-400 mt-4">4.4. Staking e Receita Real (DAO)</h4>
        <p className="text-sm">
          Ao fazer staking de $RCN, os usuários ganham poder de voto e recebem <strong>30% da receita líquida em SOL</strong> das taxas do protocolo.
        </p>
        <div className="overflow-x-auto mt-2">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-cyan-500/30">
                <th className="text-left p-2 text-cyan-400">Período de Lock-up</th>
                <th className="text-left p-2 text-cyan-400">Multiplicador</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Flexível (sem bloqueio)", "1x"],
                ["3 Meses", "1.5x"],
                ["6 Meses", "2.2x"],
                ["12 Meses", "4x"],
              ].map((row, i) => (
                <tr key={i} className="border-b border-cyan-500/10">
                  <td className="p-2">{row[0]}</td>
                  <td className="p-2 text-cyan-400">{row[1]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    ),
  },
  {
    id: "economy",
    title: "5. A Economia Detalhada do Jogo",
    content: (
      <div className="space-y-4">
        <h4 className="font-semibold text-cyan-400">5.1. Crescimento Orgânico: O Sistema de Referral</h4>
        <p className="text-sm">
          Cada jogador que possui ao menos um Carro NFT pode gerar um código de indicação. O indicador recebe uma comissão vitalícia de <strong>10%</strong> sobre todas as taxas de utilidade em $RCN gastas pelo jogador indicado.
        </p>
        <h4 className="font-semibold text-cyan-400 mt-4">5.2. Recompensas e ROI</h4>
        <p className="text-sm">
          O preço de entrada é de <strong>$25 (pago em SOL)</strong>. Após o mint, o jogador pode pagar uma taxa de frete de $5 em $RCN para receber imediatamente, ou esperar 24 horas para entrega gratuita.
        </p>
        <div className="bg-cyan-900/20 border border-cyan-500/30 rounded p-3 mt-3">
          <p className="text-sm font-semibold text-cyan-400">Exemplo de ROI (Arrancada):</p>
          <ul className="text-sm mt-2 space-y-1">
            <li>• <strong>Comum:</strong> ~12 dias para ROI ($2.08/dia)</li>
            <li>• <strong>Incomum:</strong> 10 dias para ROI ($2.50/dia)</li>
            <li>• <strong>Raro:</strong> 8 dias para ROI ($3.12/dia)</li>
            <li>• <strong>Super-Raro:</strong> 6 dias para ROI ($4.16/dia)</li>
          </ul>
        </div>
      </div>
    ),
  },
];

export default function Whitepaper() {
  const [expandedSections, setExpandedSections] = useState<Set<string>>(
    new Set(["executive-summary"])
  );

  const toggleSection = (id: string) => {
    const newExpanded = new Set(expandedSections);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedSections(newExpanded);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <Navbar />
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Navigation */}
          <aside className="lg:col-span-1">
            <div className="sticky top-24 bg-slate-800/50 border border-cyan-500/20 rounded-lg p-4">
              <h3 className="text-sm font-semibold text-cyan-400 mb-4 uppercase tracking-wider">
                Seções
              </h3>
              <nav className="space-y-2">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => toggleSection(section.id)}
                    className="w-full text-left text-sm px-3 py-2 rounded transition-colors hover:bg-cyan-500/10 text-slate-300 hover:text-cyan-400"
                  >
                    {section.title}
                  </button>
                ))}
              </nav>
            </div>
          </aside>

          {/* Main Content */}
          <main className="lg:col-span-3">
            <div className="mb-8">
              <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-2">
                Apex Racers Whitepaper
              </h1>
              <p className="text-slate-400">v1.2 - A Versão Definitiva</p>
            </div>

            <div className="space-y-4">
              {sections.map((section) => (
                <div
                  key={section.id}
                  className="bg-slate-800/50 border border-cyan-500/20 rounded-lg overflow-hidden transition-all"
                >
                  <button
                    onClick={() => toggleSection(section.id)}
                    className="w-full px-6 py-4 flex items-center justify-between hover:bg-cyan-500/5 transition-colors text-left"
                  >
                    <h2 className="text-lg font-semibold text-cyan-400">
                      {section.title}
                    </h2>
                    <ChevronDown
                      className={`w-5 h-5 text-cyan-400 transition-transform ${
                        expandedSections.has(section.id) ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {expandedSections.has(section.id) && (
                    <div className="px-6 py-4 border-t border-cyan-500/10 text-slate-300">
                      {section.content}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-12 p-6 bg-gradient-to-r from-purple-900/20 to-cyan-900/20 border border-purple-500/20 rounded-lg">
              <p className="text-sm text-slate-400">
                <strong className="text-cyan-400">Nota:</strong> Este whitepaper é um documento vivo e pode ser atualizado conforme o projeto evolui. Todas as métricas e números são baseados em análises econômicas preliminares e estão sujeitos a ajustes durante a fase de testes.
              </p>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
