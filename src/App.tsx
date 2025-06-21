import React, { useState, useEffect } from 'react';
import { Rocket, Users, Target, Zap, ExternalLink, MessageCircle, Twitter, Menu, X } from 'lucide-react';

function App() {
  const [isLaunched, setIsLaunched] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrollY > 50 ? 'bg-black/90 backdrop-blur-md border-b border-yellow-400/30' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-yellow-400 to-orange-600 rounded-full flex items-center justify-center transform hover:scale-110 transition-all duration-300">
                <div className="text-xl md:text-2xl">💥</div>
              </div>
              <div className="flex flex-col">
                <h1 className="text-xl md:text-2xl font-black text-yellow-400 tracking-wider">$BLAST</h1>
                <p className="text-xs text-gray-400 hidden md:block">THE FINAL MEMECOIN</p>
              </div>
            </div>

            {/* Desktop Social Links */}
            <div className="hidden md:flex items-center space-x-4">
              <a 
                href="#" 
                className="p-2 bg-blue-600 rounded-full hover:bg-blue-500 transform hover:scale-110 transition-all duration-300"
                aria-label="Telegram"
              >
                <MessageCircle size={20} />
              </a>
              <a 
                href="#" 
                className="p-2 bg-black border border-white rounded-full hover:bg-gray-800 transform hover:scale-110 transition-all duration-300"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="#" 
                className="p-2 bg-purple-600 rounded-full hover:bg-purple-500 transform hover:scale-110 transition-all duration-300"
                aria-label="Pump.fun"
              >
                <ExternalLink size={20} />
              </a>
              <button 
                className={`px-4 py-2 text-sm font-bold rounded-lg transform transition-all duration-300 ${
                  isLaunched 
                    ? 'bg-gradient-to-r from-green-500 to-yellow-500 text-black hover:scale-105' 
                    : 'bg-gray-600 text-gray-400 cursor-not-allowed'
                }`}
                disabled={!isLaunched}
              >
                {isLaunched ? 'BUY NOW' : 'SOON'}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 text-yellow-400"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-md border-b border-yellow-400/30">
              <div className="flex flex-col space-y-4 p-4">
                <div className="flex justify-center space-x-4">
                  <a 
                    href="#" 
                    className="p-3 bg-blue-600 rounded-full hover:bg-blue-500 transform hover:scale-110 transition-all duration-300"
                    aria-label="Telegram"
                  >
                    <MessageCircle size={20} />
                  </a>
                  <a 
                    href="#" 
                    className="p-3 bg-black border border-white rounded-full hover:bg-gray-800 transform hover:scale-110 transition-all duration-300"
                    aria-label="Twitter"
                  >
                    <Twitter size={20} />
                  </a>
                  <a 
                    href="#" 
                    className="p-3 bg-purple-600 rounded-full hover:bg-purple-500 transform hover:scale-110 transition-all duration-300"
                    aria-label="Pump.fun"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
                <button 
                  className={`w-full py-3 text-lg font-bold rounded-lg transform transition-all duration-300 ${
                    isLaunched 
                      ? 'bg-gradient-to-r from-green-500 to-yellow-500 text-black hover:scale-105' 
                      : 'bg-gray-600 text-gray-400 cursor-not-allowed'
                  }`}
                  disabled={!isLaunched}
                >
                  {isLaunched ? 'BUY NOW' : 'LAUNCHING SOON'}
                </button>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-purple-900 via-black to-orange-900 pt-16 md:pt-20">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{
            backgroundImage: 'url(/make_the_text_tighter_and_smaller_and.png)',
            transform: `translateY(${scrollY * 0.5}px)`
          }}
        />
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-4 h-4 bg-yellow-400 rounded-full animate-ping" />
          <div className="absolute top-40 right-20 w-6 h-6 bg-orange-500 rounded-full animate-pulse" />
          <div className="absolute bottom-32 left-1/4 w-3 h-3 bg-green-400 rounded-full animate-bounce" />
          <div className="absolute top-1/3 right-1/3 w-5 h-5 bg-purple-400 rounded-full animate-ping" style={{ animationDelay: '1s' }} />
        </div>

        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <div className="mb-8 animate-bounce">
            <h1 className="text-6xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 drop-shadow-2xl tracking-wider transform hover:scale-105 transition-transform duration-300">
              $BLAST
            </h1>
          </div>
          
          <p className="text-xl md:text-3xl font-bold text-yellow-300 mb-8 animate-pulse tracking-wide">
            WHEN THE WORLD ENDS, WE PUMP
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button 
              className={`px-8 py-4 text-xl font-bold rounded-lg transform transition-all duration-300 ${
                isLaunched 
                  ? 'bg-gradient-to-r from-green-500 to-yellow-500 text-black hover:scale-110 animate-pulse' 
                  : 'bg-gray-600 text-gray-400 cursor-not-allowed'
              }`}
              disabled={!isLaunched}
            >
              <Rocket className="inline mr-2" />
              {isLaunched ? 'BUY ON PUMP.FUN' : 'LAUNCHING SOON...'}
            </button>
          </div>

          <div className="flex justify-center gap-6 md:hidden">
            <a href="#" className="p-3 bg-blue-600 rounded-full hover:bg-blue-500 transform hover:scale-110 transition-all duration-300 animate-bounce" style={{ animationDelay: '0.5s' }}>
              <MessageCircle size={24} />
            </a>
            <a href="#" className="p-3 bg-black rounded-full hover:bg-gray-800 transform hover:scale-110 transition-all duration-300 animate-bounce" style={{ animationDelay: '1s' }}>
              <Twitter size={24} />
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-yellow-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-yellow-400 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gradient-to-b from-orange-900 to-black relative">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width=%2260%22%20height=%2260%22%20viewBox=%220%200%2060%2060%22%20xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg%20fill=%22none%22%20fill-rule=%22evenodd%22%3E%3Cg%20fill=%22%23ff6b35%22%20fill-opacity=%220.1%22%3E%3Ccircle%20cx=%2230%22%20cy=%2230%22%20r=%224%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-7xl font-black text-yellow-400 mb-8 tracking-wider animate-pulse">
              WHAT IS $BLAST?
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-xl md:text-2xl text-orange-300 font-bold leading-relaxed">
                $BLAST is the final memecoin before the nukes hit. 
                <span className="text-red-400"> It's not financial advice</span> — 
                <span className="text-yellow-400"> it's planetary survival.</span>
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="p-6 bg-gradient-to-r from-green-800 to-yellow-600 rounded-lg transform hover:scale-105 transition-all duration-300 border-2 border-yellow-400">
                <h3 className="text-2xl font-bold text-black mb-4">🚀 MISSION BRIEFING</h3>
                <p className="text-black font-semibold">
                  Join the meme army. Load your bags. Survive the financial apocalypse. 
                  When traditional markets crumble, $BLAST holders feast on the chaos.
                </p>
              </div>
              
              <div className="p-6 bg-gradient-to-r from-purple-800 to-red-600 rounded-lg transform hover:scale-105 transition-all duration-300 border-2 border-red-400">
                <h3 className="text-2xl font-bold text-yellow-300 mb-4">💀 DEGEN WARFARE</h3>
                <p className="text-yellow-100 font-semibold">
                  Built by degens, for degens. No suits, no meetings, no mercy. 
                  Pure meme energy weaponized for maximum gains.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="w-full h-80 bg-gradient-to-br from-yellow-400 to-orange-600 rounded-lg flex items-center justify-center transform hover:rotate-2 transition-all duration-300">
                <div className="text-6xl animate-spin">💥</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gradient-to-b from-black to-green-900 relative">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl md:text-7xl font-black text-center text-green-400 mb-16 tracking-wider">
            BATTLE PLAN
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-all duration-300 animate-pulse">
                <Users size={40} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-blue-400 mb-4">STEP 1: JOIN THE WAR ROOM</h3>
              <p className="text-gray-300 font-semibold">
                Enter the Telegram bunker. Get intel. Prepare for battle. 
                The revolution starts in the group chat.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-all duration-300 animate-pulse" style={{ animationDelay: '0.5s' }}>
                <Target size={40} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-yellow-400 mb-4">STEP 2: LOAD YOUR BAGS</h3>
              <p className="text-gray-300 font-semibold">
                Convert your Solana to ammunition. Stack $BLAST like your life depends on it. 
                Because it does.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-red-500 to-pink-600 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-all duration-300 animate-pulse" style={{ animationDelay: '1s' }}>
                <Zap size={40} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-red-400 mb-4">STEP 3: RIDE THE FALLOUT</h3>
              <p className="text-gray-300 font-semibold">
                Watch the charts explode. Diamond hands through the chaos. 
                Profit from the apocalypse.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tokenomics */}
      <section className="py-20 bg-gradient-to-b from-green-900 to-purple-900 relative">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl md:text-7xl font-black text-center text-purple-400 mb-16 tracking-wider">
            WEAPON SPECS
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 bg-gradient-to-br from-yellow-600 to-orange-700 rounded-lg text-center transform hover:scale-105 transition-all duration-300 border-2 border-yellow-400">
              <h3 className="text-3xl font-black text-black mb-2">1B</h3>
              <p className="text-black font-bold">TOTAL SUPPLY</p>
            </div>

            <div className="p-6 bg-gradient-to-br from-green-600 to-blue-700 rounded-lg text-center transform hover:scale-105 transition-all duration-300 border-2 border-green-400">
              <h3 className="text-3xl font-black text-white mb-2">100%</h3>
              <p className="text-white font-bold">LIQUIDITY POOL</p>
            </div>

            <div className="p-6 bg-gradient-to-br from-red-600 to-pink-700 rounded-lg text-center transform hover:scale-105 transition-all duration-300 border-2 border-red-400">
              <h3 className="text-3xl font-black text-white mb-2">0%</h3>
              <p className="text-white font-bold">TEAM ALLOCATION</p>
            </div>

            <div className="p-6 bg-gradient-to-br from-purple-600 to-indigo-700 rounded-lg text-center transform hover:scale-105 transition-all duration-300 border-2 border-purple-400">
              <h3 className="text-3xl font-black text-white mb-2">0%</h3>
              <p className="text-white font-bold">PRESALE</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-2xl font-bold text-yellow-400 animate-pulse">
              "BUILT FOR CHAOS, NOT CONTROL"
            </p>
          </div>
        </div>
      </section>

      {/* Live Feed */}
      <section className="py-20 bg-gradient-to-b from-purple-900 to-black">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl md:text-7xl font-black text-center text-red-400 mb-16 tracking-wider">
            BATTLEFIELD INTEL
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg border-2 border-red-500">
              <h3 className="text-2xl font-bold text-red-400 mb-6 flex items-center">
                <Zap className="mr-2" />
                LIVE CHART
              </h3>
              <div className="h-64 bg-black rounded-lg flex items-center justify-center border border-red-400">
                <p className="text-red-400 font-bold text-xl">CHART LOADING...</p>
              </div>
            </div>

            <div className="p-8 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg border-2 border-yellow-500">
              <h3 className="text-2xl font-bold text-yellow-400 mb-6 flex items-center">
                <MessageCircle className="mr-2" />
                WAR ROOM FEED
              </h3>
              <div className="space-y-4">
                <div className="p-4 bg-black rounded border-l-4 border-green-400">
                  <p className="text-green-400 font-bold">SOLDIER_69: 🚀 BAGS LOADED</p>
                </div>
                <div className="p-4 bg-black rounded border-l-4 border-yellow-400">
                  <p className="text-yellow-400 font-bold">DEGEN_KING: DIAMOND HANDS 💎</p>
                </div>
                <div className="p-4 bg-black rounded border-l-4 border-red-400">
                  <p className="text-red-400 font-bold">NUKE_HODLER: TO THE MOON 🌙</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-black border-t-2 border-yellow-400">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="mb-8">
              <h3 className="text-4xl font-black text-yellow-400 mb-4">$BLAST</h3>
              <p className="text-gray-400 font-semibold">THE FINAL MEMECOIN</p>
            </div>

            <div className="flex justify-center gap-6 mb-8">
              <a href="#" className="p-4 bg-blue-600 rounded-full hover:bg-blue-500 transform hover:scale-110 transition-all duration-300">
                <MessageCircle size={24} />
              </a>
              <a href="#" className="p-4 bg-black border-2 border-white rounded-full hover:bg-gray-800 transform hover:scale-110 transition-all duration-300">
                <Twitter size={24} />
              </a>
              <a href="#" className="p-4 bg-purple-600 rounded-full hover:bg-purple-500 transform hover:scale-110 transition-all duration-300">
                <ExternalLink size={24} />
              </a>
            </div>

            <div className="text-center">
              <p className="text-gray-500 font-semibold">
                ⚠️ THIS IS NOT FINANCIAL ADVICE. THIS IS WARFARE. ⚠️
              </p>
              <p className="text-gray-600 mt-2">
                © 2024 $BLAST - Built for the apocalypse
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;