import { motion } from 'framer-motion';
import { Cake, Gamepad2, Gift, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
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
      <div className="absolute top-10 left-10 text-4xl animate-float opacity-70" style={{ animationDelay: '0s' }}>🎀</div>
      <div className="absolute top-20 right-10 text-4xl animate-float opacity-70" style={{ animationDelay: '1s' }}>🌸</div>
      <div className="absolute bottom-20 left-20 text-4xl animate-float opacity-70" style={{ animationDelay: '2s' }}>💖</div>
      <div className="absolute bottom-10 right-20 text-4xl animate-float opacity-70" style={{ animationDelay: '1.5s' }}>✨</div>

      <motion.div variants={itemVariants} className="text-center mb-10 z-10 mt-8">
        <h1 className="text-5xl md:text-7xl font-heading text-hk-pink mb-3 text-glow tracking-wide">
          Lobby
        </h1>
        <p className="text-xl font-bold text-hk-pink glass-card inline-block px-8 py-3 rounded-full shadow-lg">
          ¡Feliz Cumpleaños Lili! 🎂🎀
        </p>
      </motion.div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-16 z-10 w-full">
        {/* Player 2 Banner (Center Stage) */}
        <motion.div variants={itemVariants} className="glass-card rounded-3xl flex flex-col items-center w-72 relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300">
          <div className="absolute top-0 left-0 w-full h-14 bg-gradient-to-r from-hk-pink/80 to-hk-lightpink/80 flex items-center justify-center font-bold text-white border-b border-white/50 backdrop-blur-md shadow-sm">
            MPV(perdedor)
          </div>
          <div className="w-28 h-28 bg-white/90 rounded-full mt-24 mb-4 flex items-center justify-center border-[6px] border-hk-pink/80 shadow-lg relative overflow-visible z-10">
            <KittyFace className="scale-90 absolute -top-1" />
          </div>
          <div className="pb-8 w-full text-center">
            <h2 className="font-heading text-4xl text-hk-pink text-glow">Lili</h2>
            <div className="flex items-center justify-center gap-1 mt-2 text-sm text-hk-red font-bold bg-hk-pink/20 mx-4 rounded-full py-1">
              <Star className="w-4 h-4" fill="currentColor" /> 👑
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
            <h3 className="font-heading text-2xl text-gray-800 mb-2 group-hover:text-hk-pink transition-colors">Cualidades del personaje</h3>
          </div>
        </Link>

        <Link to="/cake" className="group">
          <div className="glass-card p-6 rounded-[2rem] flex flex-col items-center text-center h-full hover:scale-105 transition-all duration-300 ease-out">
            <div className="bg-white/50 p-4 rounded-full mb-4 shadow-sm group-hover:bg-white/80 transition-colors">
              <Cake className="w-10 h-10 text-orange-500 group-hover:-translate-y-2 transition-transform duration-300" />
            </div>
            <h3 className="font-heading text-2xl text-gray-800 mb-2 group-hover:text-orange-600 transition-colors">Apaga las velas</h3>
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
