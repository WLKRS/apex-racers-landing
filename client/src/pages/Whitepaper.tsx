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
      <div className="space-y-4 text-slate-300">
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
      <div className="space-y-4 text-slate-300">
        <p>
          O surgimento dos jogos Play-to-Earn (P2E) representou uma mudança de paradigma, prometendo um futuro onde os jogadores seriam recompensados financeiramente por seu tempo e habilidade. Projetos pioneiros demonstraram o imenso potencial deste modelo, validando a ideia de que os jogadores podem ter propriedade real e soberana sobre seus ativos digitais.
        </p>
        <p>
          Contudo, a euforia inicial da primeira onda de jogos P2E também expôs falhas estruturais críticas. Muitas economias de jogos foram construídas sobre fundações frágeis, caracterizadas por uma inflação descontrolada de tokens, uma dependência insustentável de um fluxo constante de novos jogadores para manter a demanda, e uma jogabilidade que muitas vezes priorizava a extração de valor em detrimento da diversão. Esses fatores levaram a ciclos de "boom-and-bust" que erodiram a confiança da comunidade e o valor dos ativos.
        </p>
        <p>
          Apex Racers nasce de uma análise profunda dessas falhas e da convicção de que é possível, e necessário, fazer melhor. Acreditamos que a sustentabilidade a longo prazo não vem da especulação, mas da criação de uma economia circular, autossustentável e com múltiplos fluxos de valor.
        </p>
        <p className="font-semibold text-cyan-400 mt-4">Nosso projeto se ergue sobre três pilares fundamentais:</p>
        <ul className="space-y-2 text-sm">
          <li className="flex gap-3">
            <span className="text-cyan-400 flex-shrink-0">1.</span>
            <span><strong>Ativos Digitais com Escassez Real:</strong> Ao contrário de projetos com oferta infinita de ativos, nossa coleção principal de Carros NFT é estritamente limitada, garantindo que a propriedade seja sempre valiosa.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-cyan-400 flex-shrink-0">2.</span>
            <span><strong>Economia Estável e Previsível:</strong> Atrelando todos os custos e recompensas do jogo a um valor fixo em dólar (USD) através de um oráculo, removemos a volatilidade do mercado da experiência diária do jogador, criando um ambiente econômico estável.</span>
          </li>
          <li className="flex gap-3">
            <span className="text-cyan-400 flex-shrink-0">3.</span>
            <span><strong>Crescimento e Governança Comunitária:</strong> Nosso modelo de crescimento é impulsionado por um generoso sistema de indicação que recompensa a comunidade por expandir o ecossistema. Adicionalmente, nosso sistema de staking não apenas recompensa os detentores de tokens com uma parte da receita real do projeto (em SOL), mas também lhes confere poder de voto para guiar o futuro do ecossistema, transformando-os de meros jogadores em verdadeiros parceiros.</span>
          </li>
        </ul>
        <p className="mt-4">
          Apresentamos o Apex Racers não como mais um jogo para "ganhar", mas como um universo para <strong>jogar, possuir, criar e prosperar</strong> dentro de um ecossistema projetado para durar.
        </p>
      </div>
    ),
  },
  {
    id: "gameplay",
    title: "2. O Jogo: A Estratégia Diária do Chefe de Equipe",
    content: (
      <div className="space-y-4 text-slate-300">
        <p>
          Apex Racers é um jogo de corrida de carros NFT focado em gerenciamento e estratégia. Os jogadores não pilotam os carros em tempo real; em vez disso, eles atuam como chefes de equipe, tomando decisões cruciais sobre quais carros usar, em qual tipo de corrida competir e como aprimorá-los para maximizar o desempenho e o retorno financeiro.
        </p>
        <h4 className="font-semibold text-cyan-400 mt-4">2.1. Os Tipos de Corrida</h4>
        <p className="text-sm">O coração da estratégia diária reside na escolha entre três tipos de corrida, cada um com um balanço de risco e recompensa diferente:</p>
        <div className="space-y-3 mt-3">
          <div className="bg-purple-900/20 border border-purple-500/30 rounded p-3">
            <h5 className="font-semibold text-purple-400">1. Arrancada (Drag Race)</h5>
            <p className="text-sm mt-1">Uma corrida de alta velocidade com foco quase total em ganhos monetários. Ideal para carros com alta "Aceleração".</p>
            <p className="text-sm text-cyan-400 mt-1">Recompensas: 95% do valor da recompensa em $RCN, 5% de chance de drop de Materiais.</p>
          </div>
          <div className="bg-blue-900/20 border border-blue-500/30 rounded p-3">
            <h5 className="font-semibold text-blue-400">2. Circuito de Rua (Street Circuit)</h5>
            <p className="text-sm mt-1">Um evento equilibrado que oferece uma mistura de ganhos e recursos. Uma escolha segura para qualquer tipo de carro.</p>
            <p className="text-sm text-cyan-400 mt-1">Recompensas: 50% do valor da recompensa em $RCN, 50% de chance de drop de Materiais.</p>
          </div>
          <div className="bg-orange-900/20 border border-orange-500/30 rounded p-3">
            <h5 className="font-semibold text-orange-400">3. Exploração (Scavenge Run)</h5>
            <p className="text-sm mt-1">Uma corrida de longa distância em terrenos baldios, focada na coleta de recursos valiosos para crafting. Ideal para carros com alto "Porta-Malas".</p>
            <p className="text-sm text-cyan-400 mt-1">Recompensas: 5% do valor da recompensa em $RCN, 95% de chance de drop de Materiais.</p>
          </div>
        </div>
        <h4 className="font-semibold text-cyan-400 mt-4">2.2. O Ciclo de Jogo</h4>
        <p className="text-sm">O ciclo de jogo principal é projetado para ser estratégico e se integrar à rotina diária do jogador:</p>
        <ol className="space-y-2 text-sm mt-2 list-decimal list-inside">
          <li><strong>Decisão Estratégica:</strong> O jogador analisa suas necessidades (RCN ou Materiais) e os atributos de seus carros para decidir qual carro competirá em qual tipo de corrida.</li>
          <li><strong>Corrida:</strong> O jogador inscreve o carro na corrida escolhida. O resultado é determinado pelos atributos do carro e um fator de aleatoriedade (RNG). Cada corrida inicia um <strong>cooldown de 5 minutos para aquele carro específico</strong>.</li>
          <li><strong>Gerenciamento:</strong> Cada corrida consome uma porção do tanque de Gasolina. Ao esvaziar um tanque, o jogador deve obrigatoriamente realizar a <strong>manutenção acumulada</strong> do carro antes de poder reabastecer. A gasolina e os limites de reabastecimento são resetados globalmente uma vez por dia às 00:00 UTC. <strong>Corridas não utilizadas antes do reset são perdidas</strong>.</li>
          <li><strong>Progressão:</strong> Com os lucros e recursos, o jogador pode investir em aprimoramentos, refinar materiais, adquirir novos carros ou expandir sua operação fazendo upgrade de sua garagem.</li>
        </ol>
      </div>
    ),
  },
  {
    id: "assets",
    title: "3. Sistema de Ativos e Progressão",
    content: (
      <div className="space-y-4 text-slate-300">
        <h4 className="font-semibold text-cyan-400">3.1. A Coleção Gênesis: Carros NFT</h4>
        <p className="text-sm">
          O ativo central do Apex Racers é o Carro NFT. Para garantir a escassez, a coleção inicial, "Coleção Gênesis", será estritamente limitada a <strong>50.000 unidades</strong>.
        </p>
        <div className="overflow-x-auto mt-3">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-cyan-500/30">
                <th className="text-left p-2 text-cyan-400">Raridade</th>
                <th className="text-left p-2 text-cyan-400">Distribuição</th>
                <th className="text-left p-2 text-cyan-400">Quantidade</th>
                <th className="text-left p-2 text-cyan-400">Nível de Atributo Base</th>
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
        <p className="text-sm">
          Cada carro possui quatro atributos que definem sua função e potencial. A força de cada atributo é definida por um sistema de 10 Níveis de Upgrade. Cada carro vem com um Nível de Atributo Base (conforme tabela acima) e pode ser aprimorado até o Nível 10 através do sistema de crafting.
        </p>
        <ul className="space-y-2 text-sm mt-2">
          <li><strong>Aceleração:</strong> O fator chave que determina o ganho de $RCN por corrida. Essencial para o modo "Arrancada".</li>
          <li><strong>Tecnologia:</strong> Define o número de corridas por tanque de gasolina, aumentando a eficiência e o número de corridas diárias.</li>
          <li><strong>Porta-Malas:</strong> Aumenta a chance e a qualidade do drop de Materiais. Essencial para o modo "Exploração".</li>
          <li><strong>Controle:</strong> Atributo latente para o futuro modo PvP, garantindo a relevância dos carros da Coleção Gênesis a longo prazo.</li>
        </ul>
        <p className="text-sm mt-4 font-semibold text-cyan-400">Progressão do atributo Tecnologia:</p>
        <div className="overflow-x-auto mt-2">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-cyan-500/30">
                <th className="text-left p-2 text-cyan-400">Nível de Upgrade</th>
                <th className="text-left p-2 text-cyan-400">Corridas por Tanque</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Nível 1-2", "10"],
                ["Nível 3", "11"],
                ["Nível 4", "12"],
                ["Nível 5", "13"],
                ["Nível 6", "14"],
                ["Nível 7", "15"],
                ["Nível 8", "17"],
                ["Nível 9", "19"],
                ["Nível 10", "21"],
              ].map((row, i) => (
                <tr key={i} className="border-b border-cyan-500/10">
                  <td className="p-2">{row[0]}</td>
                  <td className="p-2 text-cyan-400">{row[1]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <h4 className="font-semibold text-cyan-400 mt-4">3.3. Sistema de Loot e Crafting</h4>
        <p className="text-sm">
          Ao final das corridas, especialmente no modo "Exploração", os jogadores podem receber Matérias-Primas (ex: Ligas de Aço, Chips). O atributo "Porta-Malas" aumenta a chance de receber itens e a qualidade dos mesmos. Qualquer carro, de qualquer raridade, tem uma chance infinitesimal de obter qualquer item, garantindo um elemento de sorte e emoção.
        </p>
        <p className="text-sm mt-2">Esses materiais podem ser usados no sistema de Crafting:</p>
        <ul className="space-y-1 text-sm mt-2">
          <li>• <strong>Refinar Matéria-Prima:</strong> 5x Matérias-Primas Comuns + $2 em $RCN = 1x Peça de Upgrade Tier 1.</li>
          <li>• <strong>Fundir Peças:</strong> 3x Peças de Upgrade Tier 1 + $5 em $RCN = 1x Peça de Upgrade Tier 2. O custo de fusão aumenta exponencialmente para tiers mais altos.</li>
        </ul>
      </div>
    ),
  },
  {
    id: "tokenomics",
    title: "4. Tokenomics e Governança ($RCN)",
    content: (
      <div className="space-y-4 text-slate-300">
        <h4 className="font-semibold text-cyan-400">4.1. Fornecimento e Alocação</h4>
        <p className="text-sm">
          O fornecimento máximo de $RCN é fixado em 1.000.000.000 (um bilhão) de tokens. A alocação foi projetada para priorizar a comunidade e a longevidade do ecossistema.
        </p>
        <div className="overflow-x-auto mt-3">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-cyan-500/30">
                <th className="text-left p-2 text-cyan-400">Categoria</th>
                <th className="text-left p-2 text-cyan-400">% do Total</th>
                <th className="text-left p-2 text-cyan-400">Quantidade</th>
                <th className="text-left p-2 text-cyan-400">Propósito</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Recompensas P2E", "55%", "550.000.000", "Reserva massiva de longo prazo para as recompensas do jogo."],
                ["Pool de Liquidez (LP)", "10%", "100.000.000", "Pareado com fundos em SOL do mint para formar a liquidez inicial na DEX."],
                ["Fundo do Ecossistema", "15%", "150.000.000", "Para financiar novas funcionalidades, parcerias e iniciativas da DAO."],
                ["Tesouraria Operacional", "5%", "50.000.000", "Para cobrir custos operacionais do projeto (servidores, salários, auditorias)."],
                ["Time", "5%", "50.000.000", "Alocação para a equipe, com vesting, demonstrando compromisso de longo prazo."],
                ["Marketing & Airdrops", "5%", "50.000.000", "Para campanhas iniciais e atração de usuários."],
              ].map((row, i) => (
                <tr key={i} className="border-b border-cyan-500/10">
                  <td className="p-2">{row[0]}</td>
                  <td className="p-2">{row[1]}</td>
                  <td className="p-2 text-cyan-400">{row[2]}</td>
                  <td className="p-2 text-xs">{row[3]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <h4 className="font-semibold text-cyan-400 mt-4">4.2. O Ciclo de Valor do $RCN</h4>
        <p className="text-sm">
          Todas as taxas de utilidade pagas em $RCN dentro do jogo alimentam um ciclo de valor multifacetado. Primeiramente, uma comissão de <strong>10%</strong> é paga ao jogador que indicou o usuário (se aplicável). Os 90% restantes são divididos da seguinte forma:
        </p>
        <ul className="space-y-1 text-sm mt-2">
          <li>• <strong>60% são permanentemente queimados (Burned).</strong></li>
          <li>• <strong>25% retornam para a Pool de Recompensas P2E, garantindo a longevidade do jogo.</strong></li>
          <li>• <strong>10% são distribuídos aos Stakers.</strong></li>
          <li>• <strong>5% são alocados para um fundo de Bug Bounty, incentivando a segurança da plataforma.</strong></li>
        </ul>
        <p className="text-sm mt-2">
          Se um jogador não foi indicado, a comissão de 10% que seria do indicador é redirecionada para a pool de recompensas dos Stakers, aumentando ainda mais o valor do staking.
        </p>
        <h4 className="font-semibold text-cyan-400 mt-4">4.3. Gestão da Tesouraria via Governança</h4>
        <p className="text-sm">
          Para garantir a transparência e evitar o medo de "dump" no mercado, a liquidação de tokens da Tesouraria Operacional ou do Fundo do Ecossistema só poderá ser feita através de "Vendas Comunitárias". A DAO votará para aprovar a venda de uma quantidade específica de tokens. Esses tokens serão vendidos no nosso site com um pequeno desconto sobre o preço de mercado e serão vinculados ao jogo, não podendo ser transferidos para uma DEX. Isso garante que os fundos sejam usados para o propósito aprovado e que os tokens sejam adquiridos por jogadores ativos.
        </p>
        <h4 className="font-semibold text-cyan-400 mt-4">4.4. Staking e Receita Real (DAO)</h4>
        <p className="text-sm">
          O Staking é o pilar da nossa economia comunitária. Ao fazer staking de $RCN, os usuários ganham poder de voto na DAO e se tornam elegíveis para receber recompensas duplas: as recompensas em $RCN e <strong>30% da receita líquida coletada em SOL</strong> das taxas de protocolo do jogo.
        </p>
        <div className="overflow-x-auto mt-3">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-cyan-500/30">
                <th className="text-left p-2 text-cyan-400">Período de Lock-up</th>
                <th className="text-left p-2 text-cyan-400">Multiplicador de Peso</th>
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
      <div className="space-y-4 text-slate-300">
        <h4 className="font-semibold text-cyan-400">5.1. Crescimento Orgânico: O Sistema de Referral</h4>
        <p className="text-sm">
          Nosso crescimento é impulsionado pela comunidade. Cada jogador que possui ao menos um Carro NFT (não-alugado) pode gerar um código de indicação. Quando um novo jogador se inscreve com este código, o indicador passa a receber uma comissão vitalícia de <strong>10%</strong> sobre todas as taxas de utilidade em $RCN gastas pelo jogador indicado.
        </p>
        <h4 className="font-semibold text-cyan-400 mt-4">5.2. Recompensas e Retorno sobre Investimento (ROI)</h4>
        <p className="text-sm">
          Nossa economia é projetada para ser transparente e recompensadora. O preço de entrada é de <strong>$25 (pago em SOL)</strong>. Após o mint, o jogador pode pagar uma <strong>taxa de frete de $5 (em $RCN) para receber o carro imediatamente, ou esperar 24 horas</strong> para a entrega gratuita. A tabela abaixo detalha o potencial de ganho e o tempo de ROI para cada raridade em seu <strong>status base</strong>, assumindo um <strong>jogador dedicado que utiliza um reabastecimento diário</strong> e foca em corridas do tipo "Arrancada".
        </p>
        <div className="overflow-x-auto mt-3">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-cyan-500/30">
                <th className="text-left p-2 text-cyan-400">Raridade</th>
                <th className="text-left p-2 text-cyan-400">Corridas Diárias</th>
                <th className="text-left p-2 text-cyan-400">Ganho Bruto Diário</th>
                <th className="text-left p-2 text-cyan-400">Custo Diário Total</th>
                <th className="text-left p-2 text-cyan-400">Lucro Líquido Diário</th>
                <th className="text-left p-2 text-cyan-400">Tempo para ROI ($25)</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Comum", "20", "$8.12", "~$6.04", "$2.08", "~12 dias"],
                ["Incomum", "20", "$8.54", "~$6.04", "$2.50", "10 dias"],
                ["Raro", "22", "$9.17", "~$6.43", "$2.74", "~9 dias"],
                ["Super-Raro", "24", "$10.20", "~$6.82", "$3.38", "~7.4 dias"],
                ["Épico", "26", "$12.31", "~$7.21", "$5.10", "~4.9 dias"],
                ["Lendário", "30", "$18.60", "~$8.38", "$10.22", "~2.4 dias"],
                ["Mítico", "34", "$31.08", "~$9.55", "$21.53", "~1.16 dias"],
              ].map((row, i) => (
                <tr key={i} className="border-b border-cyan-500/10">
                  <td className="p-2">{row[0]}</td>
                  <td className="p-2">{row[1]}</td>
                  <td className="p-2">{row[2]}</td>
                  <td className="p-2">{row[3]}</td>
                  <td className="p-2">{row[4]}</td>
                  <td className="p-2 text-cyan-400">{row[5]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-slate-400 mt-3">
          <strong>Nota:</strong> Os custos diários incluem manutenção ($0.15/corrida), gasolina ($1.50/reabastecimento) e taxas de protocolo (0.0005 SOL/ação). Os ganhos e custos são atrelados ao dólar via oráculo. O verdadeiro potencial de lucro é desbloqueado através dos upgrades.
        </p>
        <h4 className="font-semibold text-cyan-400 mt-4">5.3. Garagens e Progressão de Conta</h4>
        <p className="text-sm">
          Toda conta começa com uma Garagem Nível 1 (1 vaga, 1 reabastecimento/dia). Os jogadores podem gastar <strong>$RCN</strong> para fazer upgrade permanente do nível de sua garagem, aumentando o número de vagas para carros e o limite de reabastecimentos diários. Vagas de garagem não utilizadas podem ser listadas para aluguel no marketplace.
        </p>
        <h4 className="font-semibold text-cyan-400 mt-4">5.4. Taxas de Protocolo vs. Taxas de Rede</h4>
        <p className="text-sm">
          É importante distinguir as taxas do nosso ecossistema das taxas da blockchain.
        </p>
        <ul className="space-y-1 text-sm mt-2">
          <li>• <strong>Taxas de Protocolo:</strong> São as taxas que nós definimos (em $RCN ou SOL) para alimentar a economia do jogo.</li>
          <li>• <strong>Taxas de Rede:</strong> São as taxas minúsculas em SOL pagas à rede Solana para processar cada transação. Elas não são controladas por nós.</li>
        </ul>
        <h4 className="font-semibold text-cyan-400 mt-4">5.5. Economia do Marketplace</h4>
        <p className="text-sm">
          Nosso ecossistema terá dois mercados com estruturas de taxas distintas:
        </p>
        <ul className="space-y-1 text-sm mt-2">
          <li>• <strong>Mercado de NFTs (Carros):</strong> Taxa de listagem de <strong>0.02 SOL</strong> (reembolsável, anti-spam). Na venda, uma taxa de transação de <strong>5%</strong> (3% em RCN, 2% em SOL) é cobrada do comprador.</li>
          <li>• <strong>Mercado de Itens (Materiais/Peças):</strong> Taxa de listagem de <strong>1 $RCN</strong> (não reembolsável, paga pelo vendedor). Na compra, uma taxa de serviço fixa de <strong>0.0005 SOL</strong> é cobrada do comprador.</li>
        </ul>
      </div>
    ),
  },
  {
    id: "roadmap",
    title: "6. Roadmap: Construindo o Futuro",
    content: (
      <div className="space-y-4 text-slate-300">
        <p className="text-sm text-slate-400 italic">
          [ROADMAP EM 4 FASES SERÁ INSERIDO AQUI]
        </p>
      </div>
    ),
  },
  {
    id: "disclaimer",
    title: "7. Isenção de Responsabilidade (Disclaimer)",
    content: (
      <div className="space-y-4 text-slate-300">
        <p className="text-sm">
          Este Whitepaper é apenas para fins informativos e não constitui uma oferta de venda de valores mobiliários ou uma solicitação de investimento. A participação no ecossistema Apex Racers envolve riscos significativos, incluindo a perda potencial de capital. Os detalhes aqui apresentados estão sujeitos a alterações à medida que o projeto evolui. Por favor, faça sua própria pesquisa (DYOR).
        </p>
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
                    <div className="px-6 py-4 border-t border-cyan-500/10">
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
