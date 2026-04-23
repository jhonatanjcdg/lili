import { AnimatePresence, motion } from 'framer-motion';
import { PartyPopper } from 'lucide-react';
import { useState } from 'react';
import { KittyFace } from './HelloKittyDecorations';
import Nav from './Nav';

export default function Cake() {
  const [candlesBlown, setCandlesBlown] = useState([false, false, false]);
  const [showMessage, setShowMessage] = useState(false);

  const handleBlowCandle = (index) => {
    const newCandles = [...candlesBlown];
    newCandles[index] = true;
    setCandlesBlown(newCandles);

    if (newCandles.every(blown => blown === true)) {
      setTimeout(() => setShowMessage(true), 500);
    }
  };

  return (
    <div className="min-h-screen relative flex flex-col bg-hk-bg overflow-hidden">
      <Nav backTo="/" />

      {/* Confetti Background when message shows */}
      <AnimatePresence>
        {showMessage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 pointer-events-none z-0 overflow-hidden"
          >
            {[...Array(30)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ y: -50, x: Math.random() * window.innerWidth }}
                animate={{
                  y: window.innerHeight + 50,
                  x: Math.random() * window.innerWidth,
                  rotate: Math.random() * 360
                }}
                transition={{
                  duration: Math.random() * 3 + 2,
                  repeat: Infinity,
                  ease: "linear",
                  delay: Math.random() * 2
                }}
                className="absolute w-4 h-4 rounded-full"
                style={{
                  backgroundColor: ['#ff6b9d', '#ffb6c1', '#ffffff', '#ff3366', '#facc15'][Math.floor(Math.random() * 5)]
                }}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex-1 flex flex-col items-center justify-center p-4 z-10">
        <h1 className="text-3xl font-heading text-hk-pink mb-8 text-glow text-center">
          ¡Pide un deseo y apaga las velas!
        </h1>

        <div className="relative mt-20">
          {/* Velas */}
          <div className="flex justify-center gap-8 mb-[-20px] relative z-20">
            {[0, 1, 2].map((index) => (
              <div
                key={index}
                className="relative cursor-pointer group"
                onClick={() => handleBlowCandle(index)}
              >
                {/* Llama */}
                <AnimatePresence>
                  {!candlesBlown[index] && (
                    <motion.div
                      exit={{ scale: 0, opacity: 0 }}
                      className="absolute -top-12 left-1/2 -translate-x-1/2 w-6 h-10 bg-gradient-to-b from-yellow-200 via-yellow-400 to-orange-500 rounded-full animate-pulse blur-[1px] shadow-[0_0_15px_#facc15]"
                      style={{
                        animation: "pulse 1s infinite alternate, float 2s infinite ease-in-out"
                      }}
                    />
                  )}
                </AnimatePresence>
                {/* Cuerpo de la vela */}
                <div className="w-8 h-20 bg-white border-2 border-hk-pink rounded-t-lg relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-full opacity-30" style={{
                    background: 'repeating-linear-gradient(45deg, transparent, transparent 5px, #ff6b9d 5px, #ff6b9d 10px)'
                  }}></div>
                </div>
              </div>
            ))}
          </div>

          {/* Pastel de Hello Kitty usando el SVG real */}
          <motion.div
            initial={{ scale: 0.9, y: 50 }}
            animate={{ scale: 1, y: 0 }}
            className="relative z-10 flex flex-col items-center justify-center mt-4"
          >
            {/* Sombras debajo de la cara para que parezca un pastel en 3D */}
            <div className="absolute inset-0 bg-hk-pink opacity-20 blur-xl rounded-[100px] scale-90 translate-y-4"></div>

            {/* Componente SVG de la cara */}
            <div className="filter drop-shadow-2xl">
              <KittyFace width={320} height={240} />
            </div>

            <div className="absolute -bottom-6 bg-white px-6 py-2 rounded-full border-4 border-hk-pink shadow-lg text-2xl font-bold text-hk-pink text-glow z-20 font-heading">
              Feliz Cumple Lili
            </div>
          </motion.div>
          {/* Plato del pastel */}
          <div className="w-[400px] h-10 bg-hk-lightpink rounded-[100%] border-b-8 border-hk-pink mx-auto -mt-6 relative z-0 shadow-xl"></div>
        </div>

        {/* Mensaje Sorpresa */}
        <AnimatePresence>
          {showMessage && (
            <motion.div
              initial={{ scale: 0.5, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              className="mt-12 glass-card p-8 rounded-[2rem] border border-white max-w-md text-center relative shadow-2xl"
            >
              <PartyPopper className="absolute -top-6 -left-6 w-12 h-12 text-hk-pink animate-bounce" />
              <PartyPopper className="absolute -top-6 -right-6 w-12 h-12 text-hk-pink animate-bounce" />
              <h2 className="text-2xl font-heading text-hk-black mb-2">¡Deseo concedido! 🎂</h2>
              <p className="text-gray-700 font-bold">
                Espero que todos tus sueños se hagan realidad. Eres increíble, la mejor en todooooo, y te mereces lo mejor del mundo hoy y siempre.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
