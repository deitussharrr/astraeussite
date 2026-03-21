import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';

interface ServiceCard3DProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  onClick: () => void;
  ariaLabel: string;
  position: [number, number, number];
}

const ServiceCard3D = ({ title, description, icon, onClick, ariaLabel, position }: ServiceCard3DProps) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  // Handle hover state
  useFrame(() => {
    if (meshRef.current) {
      // Gentle hover lift and rotation
      const targetScale = hovered ? 1.1 : 1.0;
      const targetRotationY = hovered ? 0.1 : 0;
      
      meshRef.current.scale.set(
        THREE.MathUtils.lerp(meshRef.current.scale.x, targetScale, 0.1),
        THREE.MathUtils.lerp(meshRef.current.scale.y, targetScale, 0.1),
        THREE.MathUtils.lerp(meshRef.current.scale.z, targetScale, 0.1)
      );
      
      meshRef.current.rotation.y = THREE.MathUtils.lerp(
        meshRef.current.rotation.y,
        targetRotationY,
        0.1
      );
    }
  });

  return (
    <group 
      ref={meshRef}
      onPointerEnter={() => setHovered(true)}
      onPointerLeave={() => setHovered(false)}
      onClick={onClick}
      cursor="pointer"
      position={position}
    >
      {/* Card Background */}
      <mesh>
        <planeGeometry args={[2.5, 3.5]} />
        <meshStandardMaterial 
          color={hovered ? 0xffffff : 0x1a1a1a}
          transparent
          opacity={0.9}
          roughness={0.3}
          metalness={0.1}
        />
      </mesh>
      
      {/* Simple icon placeholder - using a colored sphere */}
      <group position={[0, 1, 0.1]}>
        <mesh>
          <sphereGeometry args={[0.3, 0.3, 0.3, 8, 8]} />
          <meshStandardMaterial 
            color={0x4cc9f0} 
            metalness={0.5} 
            roughness={0.3} 
          />
        </mesh>
      </group>
      
      {/* Title - using a simple rectangle with text-like appearance */}
      <group position={[0, 0.5, 0.1]}>
        <mesh>
          <planeGeometry args={[2, 0.4]} />
          <meshStandardMaterial 
            color={0xffffff} 
            transparent
            opacity={0.9}
          />
        </mesh>
      </group>
      
      {/* Description - using a larger rectangle */}
      <group position={[0, -0.5, 0.1]}>
        <mesh>
          <planeGeometry args={[2.2, 0.8]} />
          <meshStandardMaterial 
            color={0xcccccc} 
            transparent
            opacity={0.8}
          />
        </mesh>
      </group>
    </group>
  );
};

export default ServiceCard3D;