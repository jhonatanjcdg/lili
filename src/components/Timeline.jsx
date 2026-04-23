import { motion } from 'framer-motion';
import Nav from './Nav';
import { KittyBow } from './HelloKittyDecorations';

export default function Timeline() {
  const events = [
    {
      title: "El primer cruce (Mobile Legends)",
      description: "Nos cruzamos en ML. Tú siendo la Main Mid Lylia o Oro Clint más dura, y yo en la Jungla. El dúo perfecto para carrear... o fedear juntos.",
      icon: "⚔️",
      date: "Partida Inicial"
    },
    {
      title: "Explorando mundos oscuros (Roblox)",
      description: "Empezamos a jugar Roblox. Competencias de 2 jugadores y últimamente sobreviviendo a puros sustos en '99 noches en el bosque'.",
      icon: "🎮",
      date: "Nuevos Servidores"
    },
    {
      title: "El Drama del MVP",
      description: "La regla no escrita: El que saca MVP tiene derecho a hacer muchísimo drama y sarcasmo, restregándoselo al otro en la cara. Y nos encanta.",
      icon: "🏆",
      date: "En cada victoria"
    },
    {
      title: "Rutina Diaria",
      description: "Los buenos días: 'buen dia, cómo amaneciste?' y las buenas noches: 'descansa muchoo, cuídatee y sueuña bonitoo'. La mejor parte de mi día.",
      icon: "🌙",
      date: "Todos los días"
    },
    {
      title: "¡Hoy!",
      description: "¡Tu cumpleaños! Celebrando a la MVP de mi corazón. Feliz cumpleaños, Lili. 💖",
      icon: "🎂",
      date: "Celebración"
    }
  ];

  return (
    <div className="min-h-screen relative flex flex-col">
      <Nav backTo="/" />
      
      <div className="max-w-4xl mx-auto px-4 py-12 relative z-10 w-full">
        <motion.div 
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20 relative"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-10 scale-75 opacity-90 drop-shadow-md">
            <KittyBow />
          </div>
          <h1 className="text-5xl md:text-6xl font-heading text-hk-pink mb-4 text-glow mt-8">Nuestras Aventuras</h1>
          <p className="text-hk-black font-extrabold glass-card inline-block px-6 py-2 rounded-full shadow-md text-lg">
            Nuestro registro de dúo 🎀
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical Line with Glass effect */}
          <div className="absolute left-6 md:left-1/2 md:-ml-1 top-0 bottom-0 w-2 md:w-3 glass-card !rounded-full !border-0 bg-white/40"></div>

          {events.map((event, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50, y: 20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2, type: "spring" }}
              className={`relative flex items-center justify-between mb-16 w-full ${
                index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'
              } flex-row`}
            >
              {/* Spacer for desktop layout */}
              <div className="hidden md:block w-5/12"></div>

              {/* Center Icon Node */}
              <div className="absolute left-2 md:left-1/2 md:-translate-x-1/2 w-10 h-10 md:w-16 md:h-16 rounded-full glass-card border-[3px] md:border-4 border-hk-pink flex items-center justify-center text-xl md:text-3xl z-10 shadow-xl group hover:scale-125 transition-transform duration-300 bg-white/80">
                {event.icon}
              </div>

              {/* Content Card with Glassmorphism */}
              <div className="w-full md:w-5/12 pl-16 md:pl-0">
                <div className="glass-card p-6 md:p-8 rounded-[2rem] hover:!border-hk-pink/60 transition-colors duration-300 relative group overflow-hidden">
                  
                  {/* Subtle shine effect */}
                  <div className="absolute top-0 left-[-100%] w-1/2 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-[-20deg] group-hover:left-[200%] transition-all duration-[1.5s] ease-in-out"></div>
                  
                  <span className="bg-hk-pink text-white px-4 py-1.5 rounded-xl text-xs font-bold inline-block mb-4 shadow-md tracking-wider uppercase">
                    {event.date}
                  </span>
                  <h3 className="font-heading text-2xl text-gray-800 mb-3 drop-shadow-sm">{event.title}</h3>
                  <p className="text-gray-700 font-bold leading-relaxed">{event.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
