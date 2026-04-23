import { motion } from 'framer-motion';
import { KittyBow } from './HelloKittyDecorations';
import Nav from './Nav';

export default function Timeline() {
  const events = [
    {
      title: "Sentido del Humor",
      description: "Tu capacidad para hacer drama y hacerme reír sin parar en cada día.",
      icon: "🎭",
      date: "Atributo Dominante"
    },
    {
      title: "Magia",
      description: "Tienes la magia especial de alegrarme el día completo con solo un mensajito tuyo.",
      icon: "🔮",
      date: "Habilidad Activa"
    },
    {
      title: "Inteligencia e Ingenio",
      description: "Me doy cuenta que eres super inteligente e ingeniosa y me sigues la corriente en todo.",
      icon: "🧠",
      date: "Nivel Máximo"
    },
    {
      title: "Compañerismo",
      description: "Eres la persona ideal para pasar el rato, ya sea hablando por chat o por micro o jugando algún juego.",
      icon: "🤝",
      date: "Aura de Equipo"
    },
    {
      title: "Dulzura",
      description: "Esa voz tan linda y dulce que tienes cuando hablamos por el micro. Honestamente me encanta escucharla en cada momento.",
      icon: "🌸",
      date: "Pasiva"
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
          <h1 className="text-5xl md:text-6xl font-heading text-hk-pink mb-4 text-glow mt-8">Sus Mejores Cualidades</h1>
          <p className="text-hk-black font-extrabold glass-card inline-block px-6 py-2 rounded-full shadow-md text-lg">
            Los atributos que la hacen única 🎀
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
              className={`relative flex items-center justify-between mb-16 w-full ${index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'
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
