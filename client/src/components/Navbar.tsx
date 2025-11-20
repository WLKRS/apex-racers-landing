import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";

export default function Navbar() {
  const [location, navigate] = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-sm border-b border-slate-800">
      <nav className="container mx-auto flex items-center justify-between px-4 py-4">
        <button
          onClick={() => navigate("/")}
          className="text-2xl font-bold text-cyan-400 hover:text-cyan-300 transition-colors cursor-pointer"
        >
          APEX RACERS
        </button>
        <div className="hidden md:flex items-center space-x-8">
          <a href="/#sobre" className="hover:text-cyan-400 transition-colors">
            Sobre
          </a>
          <a href="/#gameplay" className="hover:text-cyan-400 transition-colors">
            Gameplay
          </a>
          <a href="/#tokenomics" className="hover:text-cyan-400 transition-colors">
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
  );
}
