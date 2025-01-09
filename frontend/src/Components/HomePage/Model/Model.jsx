import React, { useRef, useEffect } from 'react';
import { useLoader, useThree } from '@react-three/fiber';
import { useNavigate } from 'react-router-dom'; 
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import './Model.css'
import { Raycaster, Vector2 } from 'three'; // objets three.js

const Model = ({ mousePosition }) => {
  const meshRef = useRef();
  const gltf = useLoader(GLTFLoader, '/buildings.glb');  
  // console.log("let's go voir notre mesh: " + gltf);
  const navigate = useNavigate()
  const { scene, camera } = useThree()
  const raycaster = new Raycaster() // pour afficher intersections entre un rayon (ici, du click de la mouse) 
  const mouse = new Vector2() // pour afficher position 2D (ici, de la mouse)

  // pour la rotation en fonction de la position de la mouse
  useEffect(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y = mousePosition.x * Math.PI; // rotation sur axe Y
      meshRef.current.rotation.x = mousePosition.y * Math.PI / 2; // rotation sur axe X
    }
  }, [mousePosition]);

  // fonction navigation
  const handleMeshClick = (event) => {
    // calcul des cordonnees du click de la mouse :
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    raycaster.setFromCamera(mouse, camera); // maj Raycaster avec position de la mouse (transformee en cordonnees de l'ecran) et de la canera
    
    const intersects = raycaster.intersectObject(meshRef.current, true); // pour calculer interactions entre rayon et mesh / presence interactions = user qui a click sur mesh 
    
    if (intersects.length > 0) {
      const selectedPart = intersects[0].object.name;
      const intersectionPoint = intersects[0].point; // coordonnees 3D de l'intersection
      console.log(("selected part name: " + {selectedPart}));
      console.log(`coordonnees intersection: ${intersectionPoint.x}, ${intersectionPoint.y}, ${intersectionPoint.z}`);
      
      // navigation en fonction du name du mesh
      if (selectedPart === 'Cube_1') {
        navigate('/about')
      } else if (selectedPart === 'Cube_3') {
        navigate('/about')
      } else {
        navigate('/about')
      }
    }
  }

  // verif noms du mesh
  // useEffect(() => {
  //   if (gltf.scene) {
  //     // traverse = fonction qui parcourt tous les meshes de la scene
  //     gltf.scene.traverse((child) => {
  //       if (child.isMesh) {
  //         console.log("nom du mesh: " + child.name); 
  //       }
  //     })
  //   }
  // }, [gltf]);

  return (
      <primitive 
        object={gltf.scene} ref={meshRef} scale={[1, 1, 1]} position={[0, 0, 0]}  onClick={handleMeshClick}
        className="mesh-hover"
      />
  );
};

export default Model;