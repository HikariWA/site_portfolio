import React, { useState, useEffect, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei'; 
import Model from './Model/Model';
import './HomePage.css';
import AnimatedText from './AnimatedText/AnimatedText';
import Navbar from '../Navbar/Navbar';

const HomePage = () => {
  // pour la position de la mouse
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const controlsRef = useRef()

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
    <div className='homepage-container'>
        <Navbar/>
        {/* <AnimatedText /> */}
        <Canvas className='custom-canvas' onClick={(event) => console.log("event position: " + event)}>

        {/* lumieres */}
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} intensity={0.7} />

        {/* model 3D */}
        <Model mousePosition={mousePosition} />

        {/* permet a l'user de tourner autour du mesh */}
        {/* <OrbitControls maxDistance={8} minDistance={2} /> */}
        <OrbitControls
            ref={controlsRef}
            maxDistance={10}
            minDistance={2}
            enablePan={false}  
            enableZoom={false} 
          />

        </Canvas>
    </div>
  );
};

export default HomePage


