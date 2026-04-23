import { Heart, Pause, Play, SkipBack, SkipForward } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { KittyFace } from './HelloKittyDecorations';
import Nav from './Nav';

export default function Gift() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const containerRef = useRef(null);
  const activeLineRef = useRef(null);

  const letterLines = [
    "¡Feliz cumpleaños, Lili! 💖",
    "Hoy es un día sumamente especial para ti,",
    "y me emociona mucho poder celebrarlo contigo.",
    "Aunque apenas llevamos un mes de conocernos,",
    "me encanta lo rápido que hicimos click para el dúo.",
    "Desde que cruzamos caminos en el lobby de ML,",
    "hasta las risas (y los sustos) en '99 noches en el bosque'.",
    "Me encanta el drama que hacemos cuando uno es MVP,",
    "nuestras indirectas sarcásticas y lo bien que nos entendemos.",
    "Tus mensajes de 'buen dia, cómo amaneciste?'",
    "y los 'descansa muchoo, cuídatee y sueuña bonitoo'",
    "son de mis momentos favoritos, me alegran el día.",
    "Eres una chica increíble, súper divertida y genial.",
    "Gracias por esos buenos ratos y las risas,",
    "y por dejarme ser parte de tu cumpleaños.",
    "Deseo que este año te traiga muchísimas victorias,",
    "cero lag en la vida, y que siempre seas muy feliz.",
    "¡Te quiero mucho, mi dúo de confianza! 🎀"
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
      }, 4000); // 4 segundos da más tiempo para leer textos largos
    }
    return () => clearInterval(interval);
  }, [isPlaying, letterLines.length]);

  // Hacer auto-scroll a la línea activa
  useEffect(() => {
    if (activeLineRef.current && containerRef.current) {
      const container = containerRef.current;
      const activeElement = activeLineRef.current;
      container.scrollTo({
        top: activeElement.offsetTop - container.offsetHeight / 2 + activeElement.offsetHeight / 2,
        behavior: 'smooth'
      });
    }
  }, [currentLineIndex]);

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
    <div className="min-h-screen relative flex flex-col" style={{ background: 'linear-gradient(to bottom, #4a4a4a, #121212)' }}>
      <Nav backTo="/" />

      <div className="flex-1 flex flex-col items-center p-4">
        {/* Banner gigante de Anuncio estilo Spotify Gratis */}
        <div className="bg-yellow-400 text-black font-extrabold w-full text-center py-2 mb-4 mt-2 text-sm uppercase tracking-[0.3em] shadow-lg rounded animate-pulse">
          - Anuncio Publicitario -
        </div>

        <div className="w-full max-w-md bg-transparent flex flex-col relative px-2">

          {/* Cover Art Image */}
          <div className="w-full aspect-square bg-[#282828] rounded-md mb-8 flex flex-col items-center justify-center relative shadow-[0_8px_40px_rgba(0,0,0,0.6)]">
            <KittyFace className="scale-[1.8] drop-shadow-2xl" />
          </div>

          <div className="flex justify-between items-end mb-6">
            <div>
              <h2 className="text-2xl font-bold text-white mb-1">Un Mensaje para ti</h2>
              <p className="text-[#b3b3b3] text-base">Tu Jungla Favorito</p>
            </div>
            <Heart className="w-6 h-6 text-[#1db954]" fill="#1db954" />
          </div>

          {/* Progress Bar */}
          <div className="mb-4 group cursor-pointer">
            <div className="flex justify-between items-center text-xs font-semibold mb-2">
              <span className="text-[#a7a7a7]">0:15</span>
              <span className="bg-gray-700 text-white px-3 py-0.5 rounded text-[11px] tracking-widest border border-gray-500 shadow-xl">
                PUBLICIDAD (No se puede saltar)
              </span>
            </div>
            <div className="w-full h-1 bg-[#4d4d4d] rounded-full flex items-center">
              <div
                className="h-full bg-white group-hover:bg-[#1db954] rounded-full transition-all duration-300 ease-linear"
                style={{ width: `${progress}%` }}
              ></div>
              <div className="w-3 h-3 bg-white rounded-full -ml-1.5 opacity-0 group-hover:opacity-100 shadow-sm transition-opacity"></div>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between mb-8">
            <button className="text-[#1db954] transition-colors relative">
              <svg role="img" height="20" width="20" viewBox="0 0 16 16" fill="currentColor"><path d="M13.151.922a.75.75 0 1 0-1.06 1.06L13.109 3H11.16a3.75 3.75 0 0 0-2.873 1.34l-6.173 7.356A2.25 2.25 0 0 1 .39 12.5H0V14h.391a3.75 3.75 0 0 0 2.873-1.34l6.173-7.356a2.25 2.25 0 0 1 1.72-1.804h1.947l-1.017 1.018a.75.75 0 0 0 1.06 1.06L15.98 2.75 13.151.922zM.391 3.5H0V2h.391c1.109 0 2.16.49 2.873 1.34L4.89 5.277l-.979 1.167-1.796-2.14A2.25 2.25 0 0 0 .39 3.5z" /></svg>
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#1db954] rounded-full"></div>
            </button>

            <div className="flex items-center justify-center gap-6">
              <button onClick={handlePrev} className="text-white transition-colors">
                <SkipBack className="w-9 h-9" fill="currentColor" />
              </button>
              <button
                onClick={togglePlay}
                className="w-16 h-16 bg-white hover:scale-105 rounded-full flex items-center justify-center text-black shadow-lg transition-transform"
              >
                {isPlaying ? <Pause className="w-8 h-8" fill="currentColor" /> : <Play className="w-8 h-8 ml-1" fill="currentColor" />}
              </button>
              <button onClick={handleNext} className="text-white transition-colors opacity-50 cursor-not-allowed">
                {/* On ads, you can't really skip next easily */}
                <SkipForward className="w-9 h-9" fill="currentColor" />
              </button>
            </div>

            <button className="text-white transition-colors">
              <svg role="img" height="20" width="20" viewBox="0 0 16 16" fill="currentColor"><path d="M0 4.75A3.75 3.75 0 0 1 3.75 1h8.5A3.75 3.75 0 0 1 16 4.75v5a3.75 3.75 0 0 1-3.75 3.75H9.81l3.157 3.157a.75.75 0 1 1-1.06 1.06L8.14 13.959a.75.75 0 0 1 0-1.06l3.767-3.767a.75.75 0 0 1 1.06 1.06l-2.458 2.458h1.741a2.25 2.25 0 0 0 2.25-2.25v-5a2.25 2.25 0 0 0-2.25-2.25h-8.5A2.25 2.25 0 0 0 1.5 4.75v5A2.25 2.25 0 0 0 3.75 12H5v1.5H3.75A3.75 3.75 0 0 1 0 9.75v-5z" /></svg>
            </button>
          </div>

          <div className="w-full flex justify-center mb-8 relative">
            <button className="flex items-center justify-between w-full max-w-[300px] text-white bg-[#1db954] hover:bg-[#1ed760] font-black tracking-widest py-4 px-6 rounded-md shadow-[0_0_20px_rgba(29,185,84,0.3)] transition-all duration-200">
              <span className="uppercase text-sm">Visitar Anunciante</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
            <div className="absolute -top-3 -right-2 bg-red-600 text-white text-[9px] font-bold px-2 py-1 rounded-full uppercase animate-bounce">
              ¡Haz click!
            </div>
          </div>

          {/* Lyrics View */}
          <div ref={containerRef} className="h-64 overflow-y-auto scrollbar-hide relative rounded-xl bg-black/60 p-5 flex flex-col items-start cursor-pointer transition-colors backdrop-blur-md border border-gray-800" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            <div className="text-white font-black text-xs mb-6 uppercase tracking-wider opacity-80 w-full flex-shrink-0">
              Transcripción del Anuncio
            </div>
            <div className="w-full flex flex-col gap-6 pb-32">
              {letterLines.map((line, index) => (
                <p
                  key={index}
                  ref={index === currentLineIndex ? activeLineRef : null}
                  className={`w-full transition-all duration-500 font-bold ${index === currentLineIndex
                      ? 'text-white text-[22px] opacity-100 drop-shadow-md scale-[1.02] origin-left'
                      : 'text-gray-400 text-lg opacity-60'
                    }`}
                >
                  <span className="leading-snug block">
                    {line}
                  </span>
                </p>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
