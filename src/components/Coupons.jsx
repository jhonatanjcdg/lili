import { useState } from 'react';
import { motion } from 'framer-motion';
import { Ticket } from 'lucide-react';
import Nav from './Nav';
import { KittyBow } from './HelloKittyDecorations';

export default function Coupons() {
  const [coupons, setCoupons] = useState([
    {
      id: 1,
      title: "Vale por una skin",
      description: "Canjeable por la skin que tú quieras en Mobile Legends para tu Lylia o Clint.",
      claimed: false,
      color: "from-blue-400 to-blue-600"
    },
    {
      id: 2,
      title: "Desvelo jugando",
      description: "Vale por quedarme despierto toda la noche jugando Roblox o ML contigo sin quejarme del sueño.",
      claimed: false,
      color: "from-purple-400 to-purple-600"
    },
    {
      id: 3,
      title: "Cero Drama MVP",
      description: "Vale por una partida donde, si tú sacas MVP, yo te haré porras en vez de drama (solo por esta vez).",
      claimed: false,
      color: "from-yellow-400 to-orange-500"
    },
    {
      id: 4,
      title: "Llamada Sorpresa",
      description: "Vale por una llamada donde solo hablemos de lo que tú quieras, el tiempo que quieras.",
      claimed: false,
      color: "from-hk-lightpink to-hk-pink"
    }
  ]);

  const handleClaim = (id) => {
    setCoupons(coupons.map(c => c.id === id ? { ...c, claimed: true } : c));
  };

  return (
    <div className="min-h-screen relative bg-hk-bg pb-12">
      <Nav backTo="/" />
      
      <div className="max-w-4xl mx-auto px-4 py-8 relative">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-heading text-hk-pink mb-4 text-glow">Cuponera VIP</h1>
          <p className="text-hk-black font-extrabold glass-card inline-block px-6 py-2 rounded-full shadow-md text-lg">
            Exclusivo para la cumpleañera. ¡Canjéalos cuando quieras! 🎟️
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {coupons.map((coupon) => (
            <motion.div
              key={coupon.id}
              whileHover={!coupon.claimed ? { scale: 1.02 } : {}}
              className={`relative overflow-hidden rounded-[2rem] border-2 ${
                coupon.claimed ? 'border-gray-300/50 bg-gray-200/50 grayscale' : 'glass-card border-white/80 shadow-xl hover:-translate-y-1'
              } transition-all duration-300 flex h-40 group`}
            >
              {/* Adorno de Hello Kitty en la esquina */}
              <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2 scale-50 z-20 opacity-80">
                <KittyBow />
              </div>

              {/* Left side (Stub) */}
              <div className={`w-1/3 bg-gradient-to-br ${
                coupon.claimed ? 'from-gray-300 to-gray-400' : coupon.color
              } flex flex-col items-center justify-center p-4 text-white relative border-r-4 border-dashed border-white`}>
                <Ticket className="w-10 h-10 mb-2 opacity-80" />
                <span className="font-heading text-sm text-center transform -rotate-12">VIP TICKET</span>
                
                {/* Cuadritos de los bordes del boleto */}
                <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-hk-bg rounded-full border-2 border-white"></div>
              </div>

              {/* Right side (Content) */}
              <div className="w-2/3 p-4 flex flex-col justify-between relative">
                <div className="absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-hk-bg rounded-full border-2 border-white"></div>
                
                <div>
                  <h3 className={`font-heading text-lg mb-1 pr-6 ${coupon.claimed ? 'text-gray-500' : 'text-gray-800'}`}>
                    {coupon.title}
                  </h3>
                  <p className={`text-xs leading-snug ${coupon.claimed ? 'text-gray-400' : 'text-gray-600 font-medium'}`}>
                    {coupon.description}
                  </p>
                </div>

                <div className="flex justify-end mt-2 z-10">
                  <button
                    onClick={() => handleClaim(coupon.id)}
                    disabled={coupon.claimed}
                    className={`text-xs font-bold px-4 py-2 rounded-full transition-colors shadow-sm ${
                      coupon.claimed 
                        ? 'bg-gray-200 text-gray-500 cursor-not-allowed' 
                        : 'bg-hk-pink text-white hover:bg-hk-red hover:shadow-md active:scale-95'
                    }`}
                  >
                    {coupon.claimed ? '¡Canjeado!' : 'Reclamar Cupon'}
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
