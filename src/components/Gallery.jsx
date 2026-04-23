import { motion } from 'framer-motion';
import { Camera, Image as ImageIcon } from 'lucide-react';
import Nav from './Nav';

export default function Gallery() {
  // Aquí es donde agregarás tus imágenes
  // Instrucciones:
  // 1. Guarda tus pantallazos en la carpeta `public` (ejemplo: public/foto1.jpg, public/foto2.png)
  // 2. Cambia el valor de 'src' por el nombre de tu foto (ejemplo: src: '/foto1.jpg')
  const photos = [
    {
      id: 1,
      src: 'https://placehold.co/600x400/ffb6c1/ffffff?text=Tu+Foto+Aqui+1',
      caption: 'Nuestra primera victoria juntos 🏆',
      rotation: '-rotate-3'
    },
    {
      id: 2,
      src: 'https://placehold.co/600x400/ffb6c1/ffffff?text=Tu+Foto+Aqui+2',
      caption: 'Cuando fuiste MVP (y hubo drama) 💅',
      rotation: 'rotate-2'
    },
    {
      id: 3,
      src: 'https://placehold.co/600x400/ffb6c1/ffffff?text=Tu+Foto+Aqui+3',
      caption: 'Sobreviviendo en 99 noches 👻',
      rotation: '-rotate-2'
    },
    {
      id: 4,
      src: 'https://placehold.co/600x400/ffb6c1/ffffff?text=Tu+Foto+Aqui+4',
      caption: 'Un momento random en el lobby 🎀',
      rotation: 'rotate-3'
    }
  ];

  return (
    <div className="min-h-screen relative bg-hk-bg pb-12">
      <Nav backTo="/" />
      
      <div className="max-w-5xl mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-heading text-hk-pink mb-4 text-glow flex items-center justify-center gap-4">
            <Camera className="w-10 h-10" />
            Nuestra Galería
          </h1>
          <p className="text-hk-black font-extrabold glass-card inline-block px-6 py-2 rounded-full shadow-md text-lg">
            Recuerdos capturados de nuestro Dúo 📸
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 px-4">
          {photos.map((photo, index) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, rotate: 0, zIndex: 10 }}
              className={`glass-card p-4 rounded-2xl shadow-2xl border-[6px] border-white/80 ${photo.rotation} transition-transform duration-300 relative group cursor-pointer`}
            >
              {/* Estilo polaroid tape */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-16 h-8 bg-white/40 backdrop-blur-sm border border-white/50 -rotate-2 shadow-sm z-10"></div>
              
              <div className="relative aspect-video w-full bg-gray-100 rounded overflow-hidden flex items-center justify-center mb-4 border border-gray-200">
                <img 
                  src={photo.src} 
                  alt={photo.caption}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.onerror = null; 
                    e.target.src = 'https://placehold.co/600x400/f3f4f6/9ca3af?text=Imagen+No+Encontrada';
                  }}
                />
                
                {/* Overlay de instrucciones si la foto es el placeholder */}
                {photo.src.includes('placehold.co') && (
                  <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white p-4 text-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <ImageIcon className="w-8 h-8 mb-2" />
                    <p className="font-bold text-sm">Cambia esta imagen en Gallery.jsx</p>
                  </div>
                )}
              </div>
              
              <p className="font-heading text-gray-700 text-center text-lg">{photo.caption}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
