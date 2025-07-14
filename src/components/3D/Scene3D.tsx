import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, Html } from '@react-three/drei';
import FloatingCube from './FloatingCube';

interface Scene3DProps {
  className?: string;
}

const Scene3D: React.FC<Scene3DProps> = ({ className }) => {
  return (
    <div className={className}>
      <Canvas 
        camera={{ position: [0, 0, 5], fov: 60 }}
        dpr={[1, 2]}
        performance={{ min: 0.5 }}
      >
        <Suspense fallback={<Html center><div className="text-white">Loading...</div></Html>}>
          <ambientLight intensity={0.4} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          <directionalLight position={[-5, 5, 5]} intensity={0.5} />
          
          <FloatingCube position={[-2, 0, 0]} color="#3b82f6" size={0.8} />
          <FloatingCube position={[2, 1, -1]} color="#10b981" size={0.6} />
          <FloatingCube position={[0, -1, 1]} color="#f59e0b" size={0.7} />
          <FloatingCube position={[3, -0.5, 0.5]} color="#ef4444" size={0.5} />
          <FloatingCube position={[-3, 0.5, -0.5]} color="#8b5cf6" size={0.9} />
          
          <Environment preset="city" />
          <OrbitControls 
            enableZoom={false} 
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.5}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Scene3D;
