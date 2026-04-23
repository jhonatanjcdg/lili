import { motion } from 'framer-motion';
import { Star, Heart } from 'lucide-react';
import { KittyBow } from './HelloKittyDecorations';

export default function AnimatedBackground() {
  // Generar configuraciones aleatorias para elementos flotantes
  const elements = Array.from({ length: 25 }).map((_, i) => {
    const size = Math.random() * 30 + 15; // Tamaño entre 15 y 45px
    const initialX = Math.random() * 100; // Posición horizontal aleatoria
    const duration = Math.random() * 20 + 15; // Velocidad de subida 15-35s
    const delay = Math.random() * -20; // Empezar en un punto aleatorio sin esperar
    
    // Distribuir entre estrellas, corazones y moños de Hello Kitty
    const r = Math.random();
    let type = 'star';
    if (r > 0.5 && r <= 0.8) type = 'heart';
    else if (r > 0.8) type = 'bow';

    return { id: i, size, initialX, duration, delay, type };
  });

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Patrón super suave de fondo adicional estilo Hello Kitty */}
      <div 
        className="absolute inset-0 opacity-[0.03]" 
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ff6b9d\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
        }}
      ></div>

      {/* Elementos Flotando Infinitamente */}
      {elements.map((el) => {
        return (
          <motion.div
            key={el.id}
            initial={{ 
              x: `${el.initialX}vw`, 
              y: '110vh', 
              rotate: 0,
              opacity: Math.random() * 0.4 + 0.1 // Opacidad variada
            }}
            animate={{ 
              x: [`${el.initialX}vw`, `${el.initialX + (Math.random() * 15 - 7.5)}vw`],
              y: '-10vh', 
              rotate: Math.random() > 0.5 ? 360 : -360 
            }}
            transition={{
              duration: el.duration,
              delay: el.delay,
              repeat: Infinity,
              ease: 'linear'
            }}
            className="absolute"
            style={{ width: el.size, height: el.size }}
          >
            {el.type === 'star' && <Star className="w-full h-full text-white/50 fill-white/20 drop-shadow-sm" />}
            {el.type === 'heart' && <Heart className="w-full h-full text-hk-pink/40 fill-hk-pink/20 drop-shadow-sm" />}
            {el.type === 'bow' && (
              <div className="opacity-40 scale-75 xl:scale-100 flex items-center justify-center h-full w-full">
                <KittyBow />
              </div>
            )}
          </motion.div>
        );
      })}
    </div>
  );
}
