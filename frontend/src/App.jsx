import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Model from './Components/Model';

const App = () => {
  return (
    <Canvas>
      <ambientLight />
      <spotLight position={[10, 10, 10]} />
      <Model />
      <OrbitControls />
    </Canvas>
  );
};

export default App;
