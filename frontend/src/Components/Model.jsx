import React, { useRef, useEffect } from 'react';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const Model = ({ mousePosition }) => {
  const meshRef = useRef();
  const gltf = useLoader(GLTFLoader, '/buildings.glb');  
  console.log("let's go voir notre mesh: " + gltf);

  // pour la rotation en fonction de la position de la mouse
  useEffect(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y = mousePosition.x * Math.PI; // rotation sur axe Y
      meshRef.current.rotation.x = mousePosition.y * Math.PI / 4; // rotation sur axe X
    }
  }, [mousePosition]);

  return <primitive object={gltf.scene} ref={meshRef} scale={[1, 1, 1]} position={[0, 0, 0]} />;
};

export default Model;
