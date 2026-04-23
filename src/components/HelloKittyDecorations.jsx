export const KittyBow = ({ className = "", width = 40, height = 30 }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 100 80" 
    className={className}
    width={width}
    height={height}
  >
    {/* Left Loop */}
    <path d="M 45 40 C 20 10, 5 30, 10 50 C 15 70, 35 60, 45 40 Z" fill="#ff3366" stroke="#1a1a1a" strokeWidth="6" strokeLinejoin="round"/>
    {/* Right Loop */}
    <path d="M 55 40 C 80 10, 95 30, 90 50 C 85 70, 65 60, 55 40 Z" fill="#ff3366" stroke="#1a1a1a" strokeWidth="6" strokeLinejoin="round"/>
    {/* Center */}
    <circle cx="50" cy="40" r="12" fill="#ff3366" stroke="#1a1a1a" strokeWidth="6"/>
  </svg>
);

export const KittyFace = ({ className = "", width = 120, height = 90 }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 150 120" 
    className={className}
    width={width}
    height={height}
  >
    {/* Oreja Izquierda */}
    <path d="M 30 60 L 25 15 L 60 35 Z" fill="#ffffff" stroke="#1a1a1a" strokeWidth="5" strokeLinejoin="round"/>
    
    {/* Oreja Derecha */}
    <path d="M 120 60 L 125 15 L 90 35 Z" fill="#ffffff" stroke="#1a1a1a" strokeWidth="5" strokeLinejoin="round"/>

    {/* Cara (Óvalo principal) */}
    <ellipse cx="75" cy="70" rx="60" ry="45" fill="#ffffff" stroke="#1a1a1a" strokeWidth="5"/>

    {/* Borrar la línea que cruza las orejas dibujando otro óvalo sin borde */}
    <ellipse cx="75" cy="70" rx="57.5" ry="42.5" fill="#ffffff" stroke="none"/>

    {/* Ojos */}
    <ellipse cx="45" cy="75" rx="4" ry="7" fill="#1a1a1a"/>
    <ellipse cx="105" cy="75" rx="4" ry="7" fill="#1a1a1a"/>

    {/* Nariz */}
    <ellipse cx="75" cy="85" rx="6" ry="4" fill="#ffcc00" stroke="#1a1a1a" strokeWidth="2.5"/>

    {/* Bigotes Izquierdos */}
    <line x1="10" y1="65" x2="30" y2="70" stroke="#1a1a1a" strokeWidth="3" strokeLinecap="round"/>
    <line x1="5" y1="75" x2="28" y2="76" stroke="#1a1a1a" strokeWidth="3" strokeLinecap="round"/>
    <line x1="10" y1="85" x2="30" y2="82" stroke="#1a1a1a" strokeWidth="3" strokeLinecap="round"/>

    {/* Bigotes Derechos */}
    <line x1="140" y1="65" x2="120" y2="70" stroke="#1a1a1a" strokeWidth="3" strokeLinecap="round"/>
    <line x1="145" y1="75" x2="122" y2="76" stroke="#1a1a1a" strokeWidth="3" strokeLinecap="round"/>
    <line x1="140" y1="85" x2="120" y2="82" stroke="#1a1a1a" strokeWidth="3" strokeLinecap="round"/>

    {/* Moño (KittyBow) posicionado en la oreja derecha */}
    <g transform="translate(85, 5) scale(0.6) rotate(15)">
      {/* Copia del KittyBow */}
      <path d="M 45 40 C 20 10, 5 30, 10 50 C 15 70, 35 60, 45 40 Z" fill="#ff3366" stroke="#1a1a1a" strokeWidth="6" strokeLinejoin="round"/>
      <path d="M 55 40 C 80 10, 95 30, 90 50 C 85 70, 65 60, 55 40 Z" fill="#ff3366" stroke="#1a1a1a" strokeWidth="6" strokeLinejoin="round"/>
      <circle cx="50" cy="40" r="12" fill="#ff3366" stroke="#1a1a1a" strokeWidth="6"/>
    </g>
  </svg>
);
