import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Lobby from './components/Lobby';
import Timeline from './components/Timeline';
import Quiz from './components/Quiz';
import Gift from './components/Gift';
import Cake from './components/Cake';
import Coupons from './components/Coupons';
import Gallery from './components/Gallery';
import { KittyFace, KittyBow } from './components/HelloKittyDecorations';

function AnimatedRoutes() {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Lobby />} />
        <Route path="/timeline" element={<Timeline />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/gift" element={<Gift />} />
        <Route path="/cake" element={<Cake />} />
        <Route path="/coupons" element={<Coupons />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </AnimatePresence>
  );
}

function GlobalBows() {
  // A few static bows floating around the screen
  const bows = Array.from({ length: 6 }).map((_, i) => ({
    id: i,
    left: `${Math.random() * 90}%`,
    top: `${Math.random() * 90}%`,
    delay: Math.random() * 5,
    duration: Math.random() * 3 + 4
  }));

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-30">
      {bows.map(bow => (
        <motion.div
          key={bow.id}
          className="absolute"
          style={{ left: bow.left, top: bow.top }}
          animate={{
            y: [0, -20, 0],
            rotate: [-10, 10, -10]
          }}
          transition={{
            duration: bow.duration,
            repeat: Infinity,
            delay: bow.delay,
            ease: "easeInOut"
          }}
        >
          <KittyBow className="scale-50 opacity-50" />
        </motion.div>
      ))}
    </div>
  );
}

function KittyRainButton() {
  const [kittys, setKittys] = useState([]);

  const triggerKittys = () => {
    const newKittys = Array.from({ length: 15 }).map((_, i) => ({
      id: Date.now() + i,
      x: Math.random() * window.innerWidth,
      delay: Math.random() * 0.5,
      size: Math.random() * 0.5 + 0.3 // Tamaño de escala
    }));
    
    setKittys([...kittys, ...newKittys]);
    
    setTimeout(() => {
      setKittys(prev => prev.filter(h => !newKittys.find(nh => nh.id === h.id)));
    }, 4000);
  };

  return (
    <>
      <button 
        onClick={triggerKittys}
        className="fixed bottom-6 right-6 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(255,107,157,0.5)] hover:scale-110 active:scale-95 transition-all z-50 group border-4 border-hk-lightpink"
        title="Botón Sorpresa"
      >
        <div className="scale-[0.4] group-hover:scale-[0.45] transition-transform">
          <KittyFace />
        </div>
      </button>

      {/* Falling Kittys Container */}
      <div className="fixed inset-0 pointer-events-none z-[100] overflow-hidden">
        <AnimatePresence>
          {kittys.map(kitty => (
            <motion.div
              key={kitty.id}
              initial={{ y: window.innerHeight + 100, x: kitty.x, opacity: 1, scale: 0 }}
              animate={{ 
                y: -150, 
                x: kitty.x + (Math.random() * 150 - 75),
                opacity: 0,
                scale: kitty.size,
                rotate: Math.random() * 360
              }}
              transition={{ duration: 3.5, delay: kitty.delay, ease: "easeOut" }}
              className="absolute"
            >
              <KittyFace />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen w-full font-sans text-hk-black">
        <GlobalBows />
        <div className="relative z-10">
          <AnimatedRoutes />
          <KittyRainButton />
        </div>
      </div>
    </Router>
  );
}

export default App;
