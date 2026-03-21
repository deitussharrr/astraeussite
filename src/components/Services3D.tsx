import * as THREE from 'three';
import { Canvas } from '@react-three/fiber';
import ServiceCard3D from './ServiceCard3D';
import { Camera, Code, Pen, Film } from 'lucide-react';

const Services3D = () => {
  const services = [
    {
      title: 'Film Making',
      description: 'Cinematic storytelling that captures your vision with precision and artistry.',
      icon: <Film className="w-8 h-8" />,
      onClick: () => console.log('Film Making clicked'),
      ariaLabel: 'Film Making service - Cinematic storytelling that captures your vision with precision and artistry'
    },
    {
      title: 'Creative Design',
      description: 'Visual solutions that communicate your message with impact and elegance.',
      icon: <Camera className="w-8 h-8" />,
      onClick: () => console.log('Creative Design clicked'),
      ariaLabel: 'Creative Design service - Visual solutions that communicate your message with impact and elegance'
    },
    {
      title: 'Content Writing',
      description: 'Compelling narratives that engage and inspire your audience.',
      icon: <Pen className="w-8 h-8" />,
      onClick: () => console.log('Content Writing clicked'),
      ariaLabel: 'Content Writing service - Compelling narratives that engage and inspire your audience'
    },
    {
      title: 'Web Services',
      description: 'Custom digital experiences built with modern technologies.',
      icon: <Code className="w-8 h-8" />,
      onClick: () => console.log('Web Services clicked'),
      ariaLabel: 'Web Services service - Custom digital experiences built with modern technologies'
    }
  ];

  return (
    <section className="py-32 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-24 tracking-tight font-century-gothic text-white">
          Our Services
        </h2>
        <div className="relative h-[600px]">
          <Canvas 
            style={{ 
              position: 'absolute', 
              top: 0, 
              left: 0, 
              width: '100%', 
              height: '100%' 
            }}
            camera={{ 
              position: [0, 0, 6], 
              fov: 45 
            }}
          >
            <ambientLight intensity={0.5} />
            <directionalLight position={[5, 5, 5]} intensity={1} />
            
            {/* Render service cards in a grid */}
            {services.map((service, index) => {
              const row = Math.floor(index / 2);
              const col = index % 2;
              const x = (col - 0.5) * 4; // -2, 2
              const y = row * -3; // 0, -3, -6, -9
              
              return (
                <ServiceCard3D 
                  key={service.title}
                  {...service}
                  position={[x, y, 0]}
                />
              );
            })}
          </Canvas>
        </div>
      </div>
    </section>
  );
};

export default Services3D;