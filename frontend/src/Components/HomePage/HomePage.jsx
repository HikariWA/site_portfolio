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
  const [popUp, setPopUp] = useState(0)
  const popups = [
    {
      message: "Hello! Naviguez avec le modèle 3D pour explorer.",
      position: { top: '20%', left: '10%' }
    },
    {
      message: "Ou bien, utilisez la barre de navigation",
      position: { top: '7%', left: '2%' }
    },
    {
      message: "Bonne visite et amusez-vous bien!",
      position: { top: '80%', left: '80%' }
    }
  ]

  // fonction pour afficher popups
  const handlePopUp = () => {
    if (popUp < popups.length - 1) {
      setPopUp(popUp + 1)
    }
  }

  // si c'est le dernier popup, fermer apres 2sec
  useEffect(() => {
    if (popUp === popups.length - 1) {
      const timeout = setTimeout(() => {
        setPopUp(null)
      }, 2500)
      return () => clearTimeout(timeout) // pour nettoyer timeout
    }
  }, [popUp])

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
        {popUp !== null && popups[popUp] && (
          <div
            className='popup'
            style={popups[popUp].position}
          >
            <div className='popup-content'>
              <p>{popups[popUp].message}</p>
              {popUp < popups.length - 1 ? (
                <button onClick={handlePopUp}>Next</button>
              ) : (
                <p>Merci et bonne visite !</p>
              )}
            </div>
          </div>
        )}
        <Canvas className='custom-canvas' onClick={(event) => console.log("event position: " + event)}>

        {/* lumieres */}
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} intensity={0.7} />

        {/* model 3D */}
        <Model mousePosition={mousePosition} />

        {/* permet a l'user de tourner autour du mesh */}
        <OrbitControls
            ref={controlsRef}
            maxDistance={10}
            minDistance={3}
            // enablePan={false}  
            // enableZoom={false} 
          />

        </Canvas>
    </div>
  );
};

export default HomePage





