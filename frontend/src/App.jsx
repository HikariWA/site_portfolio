import React, { useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei'; 
import Model from './Components/Model';
import './App.css';

const App = () => {
  // pour la position de la mouse
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // calcul du mouvement de la mouse et maj de la position de la mouse
  const handleMouseMove = (event) => {
    setMousePosition({
      x: (event.clientX / window.innerWidth) * 2 - 1,  
      y: -(event.clientY / window.innerHeight) * 2 + 1, 
    })
  }

  // ecouteur pour le mouve de la mouse
  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    }
  }, [])

  return (
    <Canvas className='custom-canvas'>

      {/* lumieres */}
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} intensity={0.7} />

      {/* model 3D */}
      <Model mousePosition={mousePosition} />

      {/* permet a l'user de tourner autour du mesh */}
      <OrbitControls />

    </Canvas>
  );
};

export default App;

