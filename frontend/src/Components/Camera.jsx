import { useRef, useState } from 'react';
import { useThree } from '@react-three/fiber';

const Camera = () => {
  const { camera } = useThree();
  const [position, setPosition] = useState([0, 0, 5]);

  const handleClick = () => {
    // pour deplacer camera a l'interieur (X, Y, Z)
    setPosition([1, 2, 1]); 
  };

  camera.position.set(...position);

  return <mesh onClick={handleClick} position={position} />;
};

export default Camera;
