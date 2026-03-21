import * as THREE from 'three';
import { Canvas, useFrame, group, sprite, spriteMaterial, points, pointsMaterial } from '@react-three/fiber';
import { useEffect, useRef, useState } from 'react';

const Hero3D = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const logoGroupRef = useRef<THREE.Group>(null);
  const spriteRef = useRef<THREE.Sprite>(null);
  const pointsRef = useRef<THREE.Points>(null);

  // Handle mouse move to rotate logo
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Normalize mouse position to -1 to 1 range
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = -(e.clientY / window.innerHeight) * 2 + 1;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Update logo rotation based on mouse
  useFrame((state) => {
    if (logoGroupRef.current) {
      // Smoothly rotate logo towards mouse position with damping
      logoGroupRef.current.rotation.y = THREE.MathUtils.lerp(
        logoGroupRef.current.rotation.y,
        mousePos.x * 0.5,
        0.1
      );
      logoGroupRef.current.rotation.x = THREE.MathUtils.lerp(
        logoGroupRef.current.rotation.x,
        mousePos.y * 0.3,
        0.1
      );
    }

    // Slowly rotate particles for background effect
    if (pointsRef.current) {
      pointsRef.current.rotation.y += 0.001;
      pointsRef.current.rotation.x += 0.0005;
    }
  });

  // Create particle geometry once
  useEffect(() => {
    if (pointsRef.current) {
      const count = 1000;
      const positions = new Float32Array(count * 3);
      const colors = new Float32Array(count * 3);

      for (let i = 0; i < count; i++) {
        // Position
        positions[i * 3] = (Math.random() - 0.5) * 20;
        positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
        positions[i * 3 + 2] = (Math.random() - 0.5) * 20;

        // Color (grayscale with some variation)
        const intensity = Math.random() * 0.6 + 0.4; // 0.4 to 1.0
        colors[i * 3] = intensity;
        colors[i * 3 + 1] = intensity;
        colors[i * 3 + 2] = intensity;
      }

      const geometry = new THREE.BufferGeometry();
      geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

      pointsRef.current.geometry = geometry;
    }
  }, []);

  return (
    <>
      <canvas 
        className="hero-canvas" 
        style={{ 
          position: 'fixed', 
          top: 0, 
          left: 0, 
          width: '100%', 
          height: '100%', 
          pointerEvents: 'none' 
        }}
        camera={{ position: [0, 0, 5], fov: 45 }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        
        {/* Logo Group - will respond to mouse */}
        <group ref={logoGroupRef}>
          {/* Logo Sprite - using the existing logo image */}
          <sprite 
            ref={spriteRef}
            position={[0, 1, 0]}
            scale={[3, 1.5, 1]}
          >
            <spriteMaterial 
              map={new THREE.TextureLoader().load('https://iili.io/39N2Eaj.png')}
              transparent
              depthWrite={false}
            />
          </sprite>
        </group>

        {/* Background Particles */}
        <points ref={pointsRef} position={[0, 0, 0]}>
          <pointsMaterial 
            size={0.1}
            vertexColors
            transparent
            opacity={0.6}
            depthWrite={false}
          />
        </points>
      </canvas>
      
      {/* HTML Content Overlay */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center text-center px-4 pt-20">
        <div className="space-y-6">
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
    </>
  );
};

export default Hero3D;