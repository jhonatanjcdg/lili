import { useState, useEffect } from 'react';
import { Play, Pause, SkipForward, SkipBack, Heart } from 'lucide-react';
import Nav from './Nav';
import { KittyFace } from './HelloKittyDecorations';

export default function Gift() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);

  const letterLines = [
    "¡Feliz cumpleaños, Lili! 💖",
    "Hoy es un día sumamente especial para ti,",
    "y me emociona mucho poder celebrarlo contigo.",
    "Aunque apenas llevamos un mes de conocernos,",
    "siento que nuestras almas conectaron rapidísimo.",
    "Desde que cruzamos caminos en el lobby de ML,",
    "hasta las risas (y los sustos) en '99 noches en el bosque'.",
    "Me encanta el drama que hacemos cuando uno es MVP,",
    "nuestras indirectas sarcásticas y lo bien que nos entendemos.",
    "Tus mensajes de 'buen dia, cómo amaneciste?'",
    "y los 'descansa muchoo, cuídatee y sueuña bonitoo'",
    "son mi momento favorito, me alegran de inicio a fin.",
    "Eres una chica increíble, divertida y lindísima.",
    "Gracias por darme la oportunidad de conocerte,",
    "y por hacerme sonreír tantas veces.",
    "Deseo que este año te traiga muchísimas victorias,",
    "cero lag en la vida, y que siempre seas muy feliz.",
    "¡Te quiero muchísimo, mi dúo favorito! 🎀"
  ];

  useEffect(() => {
    let interval;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentLineIndex(prev => {
          if (prev >= letterLines.length - 1) {
            setIsPlaying(false);
            return prev;
          }
          return prev + 1;
        });
      }, 3000); // Avanza una línea cada 3 segundos
    }
    return () => clearInterval(interval);
  }, [isPlaying, letterLines.length]);

  const togglePlay = () => setIsPlaying(!isPlaying);

  const handleNext = () => {
    if (currentLineIndex < letterLines.length - 1) {
      setCurrentLineIndex(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentLineIndex > 0) {
      setCurrentLineIndex(prev => prev - 1);
    }
  };

  // Calcula el progreso en porcentaje
  const progress = (currentLineIndex / Math.max(1, letterLines.length - 1)) * 100;

  return (
    <div className="min-h-screen relative flex flex-col bg-hk-bg">
      <Nav backTo="/" />
      
      <div className="flex-1 flex flex-col items-center p-4">
        <h1 className="text-3xl font-heading text-hk-pink mt-4 mb-8 text-glow text-center">Tu Carta Especial</h1>

        <div className="w-full max-w-md glass-card rounded-[2rem] p-6 flex flex-col relative overflow-hidden shadow-2xl">
          {/* Cover Art Image */}
          <div className="w-full aspect-square bg-gradient-to-br from-hk-lightpink to-hk-pink rounded-2xl mb-6 shadow-inner flex flex-col items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-20" style={{
              backgroundImage: 'radial-gradient(#fff 2px, transparent 2px)',
              backgroundSize: '15px 15px'
            }}></div>
            <KittyFace className="animate-bounce" style={{ animationDuration: '3s' }} />
            <Heart className="absolute bottom-4 right-4 text-white w-8 h-8 animate-heartbeat" fill="white" />
          </div>

          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800">Canción para Lili</h2>
            <p className="text-hk-pink font-semibold">De tu Jungla Favorito</p>
          </div>

          <div className="w-full h-2 bg-gray-200 rounded-full mb-6 overflow-hidden">
            <div 
              className="h-full bg-hk-pink transition-all duration-300 ease-linear"
              style={{ width: `${progress}%` }}
            ></div>
          </div>

          <div className="flex items-center justify-center gap-6 mb-8">
            <button 
              onClick={handlePrev}
              className="text-gray-400 hover:text-hk-pink transition-colors active:scale-95"
            >
              <SkipBack className="w-8 h-8" fill="currentColor" />
            </button>
            <button 
              onClick={togglePlay}
              className="w-16 h-16 bg-hk-pink rounded-full flex items-center justify-center text-white shadow-lg hover:scale-105 transition-transform"
            >
              {isPlaying ? <Pause className="w-8 h-8" fill="white" /> : <Play className="w-8 h-8 ml-1" fill="white" />}
            </button>
            <button 
              onClick={handleNext}
              className="text-gray-400 hover:text-hk-pink transition-colors active:scale-95"
            >
              <SkipForward className="w-8 h-8" fill="currentColor" />
            </button>
          </div>

          {/* Lyrics / Letter View */}
          <div className="h-48 overflow-hidden relative rounded-xl bg-white/40 border border-white/60 p-4 flex flex-col items-center shadow-inner mt-2">
            <div 
              className="w-full transition-transform duration-700 ease-in-out flex flex-col items-center"
              style={{ transform: `translateY(${-currentLineIndex * 40 + 60}px)` }}
            >
              {letterLines.map((line, index) => (
                <p 
                  key={index} 
                  className={`h-10 text-center w-full transition-all duration-500 font-bold px-2 flex items-center justify-center ${
                    index === currentLineIndex 
                      ? 'text-hk-red scale-110 text-lg opacity-100 text-glow' 
                      : 'text-gray-400 text-sm opacity-50'
                  }`}
                >
                  {line}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
