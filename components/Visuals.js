'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import { useRef, useMemo } from 'react';

function FloatingShape({ position, color, speed, rotationIntensity, floatIntensity, scale, type }) {
  const meshRef = useRef();

  useFrame((state, delta) => {
    meshRef.current.rotation.x += delta * 0.2 * speed;
    meshRef.current.rotation.y += delta * 0.3 * speed;
  });

  return (
    <Float
      speed={speed} 
      rotationIntensity={rotationIntensity} 
      floatIntensity={floatIntensity} 
      position={position}
    >
      <mesh ref={meshRef} scale={scale}>
        {type === 'torus' && <torusKnotGeometry args={[1, 0.3, 100, 16]} />}
        {type === 'icosahedron' && <icosahedronGeometry args={[1, 0]} />}
        {type === 'octahedron' && <octahedronGeometry args={[1, 0]} />}
        <meshStandardMaterial 
          color={color} 
          roughness={0.8}
          metalness={0.1}
          wireframe={true}
        />
      </mesh>
    </Float>
  );
}

export default function Visuals() {
  return (
    <div className="webgl-container">
      <Canvas camera={{ position: [0, 0, 10], fov: 75 }}>
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <ambientLight intensity={0.5} />
        
        {/* Floating Shapes */}
        <FloatingShape 
          type="torus" 
          position={[-6, 4, -5]} 
          color="#3b82f6" 
          speed={1.5} 
          rotationIntensity={1} 
          floatIntensity={2} 
          scale={1.5}
        />
        <FloatingShape 
          type="icosahedron" 
          position={[7, -5, -8]} 
          color="#002b5c" 
          speed={2} 
          rotationIntensity={1.5} 
          floatIntensity={1.5} 
          scale={2}
        />
        <FloatingShape 
          type="octahedron" 
          position={[5, 6, -10]} 
          color="#60a5fa" 
          speed={1} 
          rotationIntensity={0.5} 
          floatIntensity={1} 
          scale={1.2}
        />
         <FloatingShape 
          type="torus" 
          position={[-5, -4, -6]} 
          color="#2563eb" 
          speed={1.2} 
          rotationIntensity={2} 
          floatIntensity={2} 
          scale={1}
        />
      </Canvas>
    </div>
  );
}
