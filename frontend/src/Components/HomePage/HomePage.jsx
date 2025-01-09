import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei'; 
import Model from './Model/Model';
import './HomePage.css';
import AnimatedText from './AnimatedText/AnimatedText';
import Navbar from '../Navbar/Navbar';

const HomePage = () => {
  // pour la position de la mouse
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const controlsRef = useRef()
  const [popupIndex, setPopupIndex] = useState(null)
  const [popupKey, setPopupKey] = useState(0)
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
  ];

  const checkPopups = useCallback(() => {
    let seenPopups = JSON.parse(localStorage.getItem('seenPopups'));
  
    // si seenPopups = null ou undefined => tableau de popups non vus
    if (!seenPopups) {
      seenPopups = new Array(popups.length).fill(false);
      localStorage.setItem('seenPopups', JSON.stringify(seenPopups));
    }
  
    // trouver popup non vu
    const nextPopupIndex = seenPopups.findIndex(seen => !seen);
  
  
    console.log('seenPopups :', seenPopups);
    console.log('nextPopupIndex :', nextPopupIndex);
  
    if (nextPopupIndex === -1) {
      setPopupIndex(null) // tous les popups vus
      console.log('Tous les popups ont été vus');
    } else {
      setPopupIndex(nextPopupIndex) 
      console.log('popup avec index :', nextPopupIndex);
    }
  }, [popups.length]);
  
  const handleNext = () => {
    if (popupIndex !== null && popupIndex < popups.length - 1) {
      let seenPopups = JSON.parse(localStorage.getItem('seenPopups'));
      seenPopups[popupIndex] = true; // pour preciser que popup actuel etait vu
      localStorage.setItem('seenPopups', JSON.stringify(seenPopups));
  
      console.log("popup precise comme vu:" + {popupIndex});
  
      setPopupKey(prevKey => prevKey + 1); // forcer le re-rendu
      checkPopups() // verif popup suoivant
    }
  }
  
  const handleLetsGo = () => {
    let seenPopups = JSON.parse(localStorage.getItem('seenPopups'));
    seenPopups.fill(true); // mentionne tous les popups comme vus
    localStorage.setItem('seenPopups', JSON.stringify(seenPopups));

    console.log('tous les popups etaient vus');
  
    setPopupKey(prevKey => prevKey + 1); 
    checkPopups() 
  }
  

  // calcul du mouvement de la mouse et maj de la position de la mouse
  const handleMouseMove = (event) => {
    setMousePosition({
      x: (event.clientX / window.innerWidth) * 2 - 1,  
      y: -(event.clientY / window.innerHeight) * 2 + 1, 
    });
  }

  // ecouteur pour le mouvement de la mouse
  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className='homepage-container'>
        <Navbar/>
        {/* <AnimatedText /> */}

        {popupIndex !== null && popups[popupIndex] && (
          <div className='popup' style={popups[popupIndex].position}>
            <div className='popup-content'>
              <p>{popups[popupIndex].message}</p>
              {popupIndex < popups.length - 1 ? (
                <button onClick={handleNext}>Next</button>
              ) : (
                <button onClick={handleLetsGo}>Lets gooo!</button>
              )}
            </div>
          </div>
        )}

        <Canvas className='custom-canvas' onClick={(event) => console.log("event position: " + event)}>

        {/* lumieres */}
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} intensity={0.7} />

        {/* modele 3D */}
        <Model mousePosition={mousePosition} />

        {/* permet a user de tourner autour du modele */}
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
