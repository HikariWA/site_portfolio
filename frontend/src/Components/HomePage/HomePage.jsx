import React, { useState, useEffect, useRef, useCallback } from 'react'; // useCallback pour eviter de recreer des fonctions
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
  const popups = [
    {
      message: "Hello! Naviguez avec le modèle 3D pour explorer.",
      position: { top: '20%', left: '60%' },
      lightPosition: [2, 2, 2],
    },
    {
      message: "Ou bien, utilisez la barre de navigation",
      position: { top: '7%', left: '5%' },
      lightPosition: [ -2, 4, 3 ]
    },
    {
      message: "Bonne visite et amusez-vous bien!",
      position: { top: '70%', left: '10%' },
      lightPosition: [-2, 0, 3],
    }
  ];

  // systeme de verif popups si vus ou non
  const checkPopups = useCallback(() => {
    let seenPopups = JSON.parse(localStorage.getItem('seenPopups')) || new Array(popups.length).fill(false) // recup des popups vus (stockrs dans storage avec cle seenPopups) pour stockage dans un json, convertit en tableau js ou nouvel array et false car par defaut popup non vu
    const nextPopupIndex = seenPopups.findIndex(seen => !seen)
    setPopupIndex(nextPopupIndex === -1 ? null : nextPopupIndex) // maj de l'etat popupIndex, si nextPopupIndex -1 (tous les popups ont ete vus) et null pour pour indiquer qu'aucun popup ne doit etre affiche
  }, [popups.length])

  // passer au popup suivant
  const handleNext = () => {
    if (popupIndex !== null) {
      let seenPopups = JSON.parse(localStorage.getItem('seenPopups')) || new Array(popups.length).fill(false)
      seenPopups[popupIndex] = true
      localStorage.setItem('seenPopups', JSON.stringify(seenPopups))
      checkPopups()
    }
  }

  // useEffect(() => {
  // console.log("popupIndex actuel :", popupIndex);
  // }, [popupIndex]);

  // marquer tous les popups en vu
  const handleLetsGo = () => {
    let seenPopups = new Array(popups.length).fill(true)
    // console.log("handleLetsGo :", seenPopups);
    localStorage.setItem('seenPopups', JSON.stringify(seenPopups))
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

  //reinitialiser popups
  const handleResetPopups = () => {
    localStorage.removeItem('seenPopups');
    checkPopups(); // Re-check popups after reset
  };


  // pour assombrir background
  const backgroundStyle = popupIndex !== null ? { backgroundColor: 'rgba(0, 0, 0, 0.6)' } : {}



  return (
    <div className='homepage-container' style={backgroundStyle}>
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

        <button onClick={handleResetPopups}>Reinitialiser Popups</button>



        <Canvas className='custom-canvas' onClick={(event) => console.log("event position: " + event)}>

        {/* lumieres */}
        <ambientLight intensity={0.5} />
        <spotLight 
            position={popups[popupIndex]?.lightPosition || [10, 10, 10]} 
            intensity={10} 
            angle={Math.PI / 4}
            penumbra={1}
            castShadow
            color="#FFA500"
          />
        <spotLight position={[10, 10, 10]} intensity={0.7} />
        <spotLight position ={[2, 2, 2]} intensity={10} color="#78AD19" />

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
