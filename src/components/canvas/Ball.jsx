import {Suspense} from 'react'
import { Canvas } from '@react-three/fiber'
import { Decal, Float, OrbitControls, Preload, useTexture } from '@react-three/drei'
import CanvasLoader from '../Loader'

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.5}/>
      <directionalLight position={[0.02, -0.5, 0.1]}/>
      <mesh castShadow receiveShadow scale={2.7}>
        <sphereGeometry args={[1,50, 50]}/>
        <meshStandardMaterial 
        roughness={0}
        metalness={0.5}
        color="#FFF3D4"
        />
        <Decal 
        position={[0, 0, 1]}
        rotation={[2*Math.PI, 0, 6.25]}
        flatShading
        map={decal}/>
      </mesh>
    </Float>
  )
}

const BallCanvas =  ({icon}) => {
  return (
    <Canvas
    frameloop="demand"
    gl = {{ preserveDrawingBuffer: true}}>
    
    <Suspense fallback={ <CanvasLoader />}>
      <OrbitControls enableZoom={false}
      maxPolarAngle={Math.PI / 2}
      minPolarAngle={Math.PI / 2}/>
      <Ball imgUrl={icon} />
    </Suspense>

    <Preload all />
  </Canvas>
  )
}
export default BallCanvas