import React, { useRef, useEffect } from 'react';
import { useLoader } from '@react-three/fiber';
import { useNavigate } from 'react-router-dom'; 
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import './Model.css'

const Model = ({ mousePosition }) => {
  const meshRef = useRef();
  const gltf = useLoader(GLTFLoader, '/buildings.glb');  
  console.log("let's go voir notre mesh: " + gltf);
  const navigate = useNavigate()

  // pour la rotation en fonction de la position de la mouse
  useEffect(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y = mousePosition.x * Math.PI; // rotation sur axe Y
      meshRef.current.rotation.x = mousePosition.y * Math.PI / 2; // rotation sur axe X
    }
  }, [mousePosition]);

  // fonction navigation
  const handleMeshClick = () => {
    navigate('/test')
  };

  return (
    <primitive 
      object={gltf.scene} ref={meshRef} scale={[1, 1, 1]} position={[0, 0, 0]}  onClick={handleMeshClick}
      className="mesh-hover"
    />
  );
};

export default Model;