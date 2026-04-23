import { Link } from 'react-router-dom';
import { ArrowLeft, Home } from 'lucide-react';
import { KittyFace } from './HelloKittyDecorations';

export default function Nav({ backTo = "/" }) {
  return (
    <nav className="p-4 flex justify-between items-center bg-white/70 backdrop-blur-md sticky top-0 z-50 shadow-md border-b-4 border-hk-pink">
      <Link 
        to={backTo}
        className="flex items-center gap-2 text-hk-pink hover:text-hk-red transition-colors font-bold hover:scale-105"
      >
        <ArrowLeft size={20} />
        Volver
      </Link>
      
      <div className="absolute left-1/2 -translate-x-1/2 -bottom-4">
        <KittyFace className="scale-75 shadow-sm" />
      </div>

      <Link 
        to="/"
        className="flex items-center gap-2 text-hk-pink hover:text-hk-red transition-colors font-bold hover:scale-110"
      >
        <Home size={24} />
      </Link>
    </nav>
  );
}
