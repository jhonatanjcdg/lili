import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Heart, Star, Gamepad2, Gift, Cake, Ticket, Shield } from 'lucide-react';
import { KittyFace } from './HelloKittyDecorations';

export default function Lobby() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    },
    exit: { opacity: 0, scale: 0.95 }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100 } }
  };

  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="min-h-screen flex flex-col items-center justify-center p-4 relative overflow-x-hidden"
    >
      {/* Decorative floaters */}
      <div className="absolute top-10 left-10 text-4xl animate-float opacity-70" style={{animationDelay: '0s'}}>🎀</div>
      <div className="absolute top-20 right-10 text-4xl animate-float opacity-70" style={{animationDelay: '1s'}}>🌸</div>
      <div className="absolute bottom-20 left-20 text-4xl animate-float opacity-70" style={{animationDelay: '2s'}}>💖</div>
      <div className="absolute bottom-10 right-20 text-4xl animate-float opacity-70" style={{animationDelay: '1.5s'}}>✨</div>

      <motion.div variants={itemVariants} className="text-center mb-10 z-10 mt-8">
        <h1 className="text-5xl md:text-7xl font-heading text-hk-pink mb-3 text-glow tracking-wide">
          Nuestro Lobby
        </h1>
        <p className="text-xl font-bold text-hk-pink glass-card inline-block px-8 py-3 rounded-full shadow-lg">
          ¡Feliz Cumpleaños Lili! 🎂🎀
        </p>
      </motion.div>

      <div className="flex flex-col md:flex-row items-center gap-8 mb-16 z-10">
        {/* Player 1 Banner */}
        <motion.div variants={itemVariants} className="glass-card rounded-3xl flex flex-col items-center w-64 relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300">
          <div className="absolute top-0 left-0 w-full h-14 bg-gradient-to-r from-blue-300/60 to-blue-200/60 flex items-center justify-center font-bold text-blue-900 border-b border-white/50 backdrop-blur-md">
            Player 1
          </div>
          <div className="w-24 h-24 bg-white/80 rounded-full mt-20 mb-4 flex items-center justify-center text-5xl border-[5px] border-blue-300/80 shadow-lg relative z-10 overflow-hidden">
            <span className="relative z-10 drop-shadow-md">👦🏻</span>
          </div>
          <div className="pb-6 w-full text-center">
            <h2 className="font-heading text-3xl text-gray-800 drop-shadow-sm">Tú</h2>
            <div className="flex items-center justify-center gap-1 mt-1 text-sm text-blue-800 font-bold bg-blue-100/50 mx-6 rounded-full py-1">
              <Shield className="w-4 h-4" /> Jungla Main
            </div>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="flex items-center justify-center drop-shadow-xl z-20">
          <Heart className="text-hk-pink animate-heartbeat w-14 h-14 filter drop-shadow-[0_0_10px_rgba(255,107,157,0.8)]" fill="#ff6b9d" />
        </motion.div>

        {/* Player 2 Banner */}
        <motion.div variants={itemVariants} className="glass-card rounded-3xl flex flex-col items-center w-64 relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300">
          <div className="absolute top-0 left-0 w-full h-14 bg-gradient-to-r from-hk-pink/80 to-hk-lightpink/80 flex items-center justify-center font-bold text-white border-b border-white/50 backdrop-blur-md shadow-sm">
            Player 2 (MVP)
          </div>
          <div className="w-24 h-24 bg-white/90 rounded-full mt-20 mb-4 flex items-center justify-center border-[5px] border-hk-pink/80 shadow-lg relative overflow-visible z-10">
            <KittyFace className="scale-75 absolute -top-1" />
          </div>
          <div className="pb-6 w-full text-center">
            <h2 className="font-heading text-3xl text-hk-pink text-glow">Lili</h2>
            <div className="flex items-center justify-center gap-1 mt-1 text-sm text-hk-red font-bold bg-hk-pink/20 mx-4 rounded-full py-1">
              <Star className="w-4 h-4" fill="currentColor" /> Lylia/Clint 👑
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full z-10 pb-20 px-4">
        <Link to="/timeline" className="group">
          <div className="glass-card p-6 rounded-[2rem] flex flex-col items-center text-center h-full hover:scale-105 transition-all duration-300 ease-out">
            <div className="bg-white/50 p-4 rounded-full mb-4 shadow-sm group-hover:bg-white/80 transition-colors">
              <Gamepad2 className="w-10 h-10 text-hk-pink group-hover:rotate-12 transition-transform duration-300" />
            </div>
            <h3 className="font-heading text-2xl text-gray-800 mb-2 group-hover:text-hk-pink transition-colors">Nivel 1: Nuestras Aventuras</h3>
            <p className="text-sm text-gray-700/80 font-bold bg-white/40 px-3 py-1 rounded-lg">El registro de victorias 🎮</p>
          </div>
        </Link>
        
        <Link to="/quiz" className="group">
          <div className="glass-card p-6 rounded-[2rem] flex flex-col items-center text-center h-full hover:scale-105 transition-all duration-300 ease-out">
            <div className="bg-white/50 p-4 rounded-full mb-4 shadow-sm group-hover:bg-white/80 transition-colors">
              <Star className="w-10 h-10 text-yellow-500 group-hover:rotate-180 transition-transform duration-500" fill="#eab308" />
            </div>
            <h3 className="font-heading text-2xl text-gray-800 mb-2 group-hover:text-yellow-600 transition-colors">Nivel 2: Quiz del Dúo</h3>
            <p className="text-sm text-gray-700/80 font-bold bg-white/40 px-3 py-1 rounded-lg">¿Qué tanto recuerdas? 🤔</p>
          </div>
        </Link>

        <Link to="/gallery" className="group">
          <div className="glass-card p-6 rounded-[2rem] flex flex-col items-center text-center h-full hover:scale-105 transition-all duration-300 ease-out">
            <div className="bg-white/50 p-4 rounded-full mb-4 shadow-sm group-hover:bg-white/80 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10 text-purple-500 group-hover:scale-110 transition-transform"><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/><circle cx="12" cy="13" r="3"/></svg>
            </div>
            <h3 className="font-heading text-2xl text-gray-800 mb-2 group-hover:text-purple-600 transition-colors">Nivel 3: Galería</h3>
            <p className="text-sm text-gray-700/80 font-bold bg-white/40 px-3 py-1 rounded-lg">Nuestros pantallazos 📸</p>
          </div>
        </Link>

        <Link to="/cake" className="group">
          <div className="glass-card p-6 rounded-[2rem] flex flex-col items-center text-center h-full hover:scale-105 transition-all duration-300 ease-out">
            <div className="bg-white/50 p-4 rounded-full mb-4 shadow-sm group-hover:bg-white/80 transition-colors">
              <Cake className="w-10 h-10 text-orange-500 group-hover:-translate-y-2 transition-transform duration-300" />
            </div>
            <h3 className="font-heading text-2xl text-gray-800 mb-2 group-hover:text-orange-600 transition-colors">Nivel 4: El Pastel</h3>
            <p className="text-sm text-gray-700/80 font-bold bg-white/40 px-3 py-1 rounded-lg">¡Apaga las velas! 🎂</p>
          </div>
        </Link>

        <Link to="/coupons" className="group">
          <div className="glass-card p-6 rounded-[2rem] flex flex-col items-center text-center h-full hover:scale-105 transition-all duration-300 ease-out">
            <div className="bg-white/50 p-4 rounded-full mb-4 shadow-sm group-hover:bg-white/80 transition-colors">
              <Ticket className="w-10 h-10 text-blue-500 group-hover:-rotate-12 transition-transform duration-300" />
            </div>
            <h3 className="font-heading text-2xl text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">Nivel 5: Cuponera</h3>
            <p className="text-sm text-gray-700/80 font-bold bg-white/40 px-3 py-1 rounded-lg">Exclusivo para MVP 🎟️</p>
          </div>
        </Link>

        <Link to="/gift" className="group">
          <div className="glass-card bg-hk-pink/60 p-6 rounded-[2rem] flex flex-col items-center justify-center text-center h-full shadow-xl hover:bg-hk-pink/80 hover:scale-105 transition-all duration-300 ease-out border-[3px] border-white/50 box-glow overflow-hidden relative">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4zKSIvPjwvc3ZnPg==')] opacity-50"></div>
            <Gift className="w-14 h-14 text-white mb-4 group-hover:animate-bounce relative z-10 drop-shadow-md" />
            <h3 className="font-heading text-3xl text-white mb-2 text-glow relative z-10">Sorpresa Final</h3>
            <p className="text-sm text-white font-bold bg-hk-red/40 px-4 py-1.5 rounded-xl shadow-inner relative z-10">Tu regalo 💌</p>
          </div>
        </Link>
      </motion.div>
    </motion.div>
  );
}
