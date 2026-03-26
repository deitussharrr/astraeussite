import { useEffect, useRef, useState } from 'react';

const Hero3D = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLImageElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  // Handle mouse move to create 3D tilt effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const rect = heroRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      // Normalize to -0.5 to 0.5 range
      const normX = (x / rect.width - 0.5) * 2;
      const normY = (y / rect.height - 0.5) * 2;
      
      setMousePos({ x: normX, y: normY });
      setIsHovered(true);
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
      setMousePos({ x: 0, y: 0 });
    };

    heroRef.current?.addEventListener('mousemove', handleMouseMove);
    heroRef.current?.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      heroRef.current?.removeEventListener('mousemove', handleMouseMove);
      heroRef.current?.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div 
      ref={heroRef}
      className="relative h-screen flex items-center justify-center overflow-hidden bg-black"
      style={{ perspective: '1000px' }}
    >
      {/* Background gradient */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black" />
      </div>
      
      {/* 3D Logo Container */}
      <div 
        className="relative w-48 h-48 md:w-64 md:h-64"
        style={{
          transform: `rotateX(${isHovered ? mousePos.y * 15 : 0}deg) rotateY(${isHovered ? mousePos.x * 15 : 0}deg)`,
          transition: 'transform 0.1s ease-out'
        }}
      >
        <img 
          ref={logoRef}
          src="https://iili.io/39N2Eaj.png"
          alt="Astraeus Media Logo"
          className="w-full h-full object-contain"
          style={{
            filter: isHovered ? 'drop-shadow(0 0 10px rgba(76, 201, 240, 0.5))' : 'none',
            transition: 'filter 0.3s ease'
          }}
        />
      </div>
      
      {/* Content Overlay */}
      <div className="absolute bottom-16 text-center">
        <h1 className="text-5xl sm:text-7xl md:text-9xl font-bold mb-4 tracking-tight font-century-gothic neon-glow text-white">
          ASTRAEUS | MEDIA
        </h1>
        <p className="text-xl sm:text-2xl md:text-3xl font-light max-w-3xl mx-auto opacity-80 tracking-wide">
          Crafting digital excellence through film, design, and innovation
        </p>
        <div className="w-8 h-8 mx-auto mt-16 animate-bounce opacity-50">
          <span aria-label="Scroll down">⌄</span>
        </div>
      </div>
    </div>
  );
};

export default Hero3D;