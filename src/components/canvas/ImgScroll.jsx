import {Suspense} from 'react'
import { Canvas } from '@react-three/fiber'
import { Decal, Float, OrbitControls, Preload, useTexture } from '@react-three/drei'
import CanvasLoader from '../Loader'
import { PlaneGeometry } from 'three'

const Plane = (props) => {
const [decal] = useTexture([props.image]);

return (
<Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
    <ambientLight intensity={0.5}/>
    <directionalLight position={[0.02, -0.5, 0.1]}/>
    <mesh castShadow receiveShadow scale={2.7}>
    <PlaneGeometry args={[1, 1.3]}/>
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

const ImgScroll =  ({icon}) => {
return (
<Canvas
frameloop="demand"
gl = {{ preserveDrawingBuffer: true}}>

<Suspense fallback={ <CanvasLoader />}>
    <OrbitControls enableZoom={false}
    maxPolarAngle={Math.PI / 2}
    minPolarAngle={Math.PI / 2}/>
    <Plane imgUrl={icon} />
</Suspense>

<Preload all />
</Canvas>
)
}
export default ImgScroll