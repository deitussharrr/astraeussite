import * as THREE from 'three';
import { Canvas } from '@react-three/fiber';

const SimpleThreeJSTest = () => {
  return (
    <canvas style={{ width: '100%', height: '100vh', position: 'fixed', top: 0, left: 0 }}>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <mesh>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={0x4cc9f0} />
      </mesh>
    </canvas>
  );
};

export default SimpleThreeJSTest;