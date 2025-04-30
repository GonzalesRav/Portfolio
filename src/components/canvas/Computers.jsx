import { Suspense, useEffect, useState } from "react";
import { Canvas, extend } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
// El problema de carga se !solucionó con extend
// extend({ OrbitControls})

import CanvasLoader from '../Loader';

const Computers = ( {isMobile} ) => {
  const computer = useGLTF('./isometric_hacker_room/scene.gltf')
  
  return (
    <mesh>
      <hemisphereLight intensity={0.15} 
      groundColor="black" />
      <pointLight intensity={1} />
      <spotLight 
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive 
        object={computer.scene}
        scale = { isMobile ? 0.025 : 0.035}
        position = {isMobile ? [0, -3, -2.2 ] : [0, -2.25, -1.5]}
        rotation = {[0, 0, 0]}
        />
    </mesh>
  )
}

const ComputersCanvas = () => {
const [ isMobile, setIsMobile] = useState(false);

useEffect(() => {
  // Add a eventListener for changes to the screen size
  const mediaQuery = window.matchMedia('(max-width: 500px)');
  // Set the initial value of the 'ismobile' state variable
  setIsMobile(mediaQuery.matches);

  // Define a callback function to handle changes to the media query
  const handleMediaQueryChange = (event) => {
    setIsMobile(event.matches);
  }

  // Add the challback fx as a listener for changes to the media query
  mediaQuery.addEventListener('change', handleMediaQueryChange);

  // Remove the listener when the component is unmounted
  return () => {
    mediaQuery.removeEventListener('change', handleMediaQueryChange);
  }

}, [])

  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov:25}}
      gl = {{ preserveDrawingBuffer: true}}>
      
      <Suspense fallback={ <CanvasLoader />}>
        <OrbitControls 
        enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  )
}
export default ComputersCanvas