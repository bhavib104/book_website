import { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

function DustParticles({ count = 3500 }) {
  const points = useRef();

  // Generate a random spherical distribution of dust points
  const positions = useMemo(() => {
    const p = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const radius = 8 + Math.random() * 25; // distribute points widely
      const theta = 2 * Math.PI * Math.random();
      const phi = Math.acos(2 * Math.random() - 1);

      p[i * 3] = radius * Math.sin(phi) * Math.cos(theta);     // x
      p[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta); // y
      p[i * 3 + 2] = radius * Math.cos(phi);                   // z
    }
    return p;
  }, [count]);

  const { pointer } = useThree();

  useFrame((state, delta) => {
    if (points.current) {
      // Baseline slow rotation
      points.current.rotation.x -= delta * 0.06;
      points.current.rotation.y -= delta * 0.04;

      // Parallax interaction using the mouse pointer
      const targetX = (pointer.x * Math.PI) / 6;
      const targetY = (pointer.y * Math.PI) / 6;

      // Smooth interpolation toward the target mouse rotation
      points.current.rotation.y += 0.04 * (targetX - points.current.rotation.y);
      points.current.rotation.x += 0.04 * (targetY - points.current.rotation.x);
    }
  });

  return (
    <Points ref={points} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#e8c84a" // rich gold dust
        size={0.15}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        opacity={0.4}
      />
    </Points>
  );
}

export default function MagicDustBackground() {
  return (
    <div 
      style={{ 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        width: '100vw', 
        height: '100vh', 
        zIndex: 0, // Behind the UI sections but above the body background
        pointerEvents: 'none'
      }}
    >
      <Canvas camera={{ position: [0, 0, 12], fov: 60 }}>
        {/* Soft fog to blend with the vintage parchment layout */}
        <fog attach="fog" args={['#e8d5aa', 15, 45]} />
        <ambientLight intensity={1} />
        <DustParticles />
      </Canvas>
    </div>
  );
}
