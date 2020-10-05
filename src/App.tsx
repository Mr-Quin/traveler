import React, { Suspense } from 'react'
import { Canvas } from 'react-three-fiber'
import * as THREE from 'three'
import { OrbitControls } from 'drei'
import useStore from './store'
import Particles from './components/3d/Particles'
import Prism from './components/3d/Prism'
// import Ground from './components/3d/Ground'
import Effects from './components/3d/Effects'
import Planets from './components/3d/Planets'
// import StarrySky from './components/3d/StarrySky'
import Loading from './components/3d/Loading'
import Environment from './components/3d/Environment'
import VRCamera from './components/3d/VRCamera'
import UI from './components/UI'
import Sound from './components/Sound'

const selector = (state) => ({
    cameraPosition: state.cameraPosition,
    effectsEnabled: state.effectsEnabled,
    prismPosition: state.prismPosition,
    setGL: state.actions.setGL,
})

const App = () => {
    const { cameraPosition, effectsEnabled, prismPosition, setGL } = useStore(selector)

    return (
        <>
            <Canvas
                vr
                concurrent
                gl={{ antialias: true }}
                camera={{
                    fov: 70,
                    position: cameraPosition,
                    near: 0.01,
                    far: 4000,
                }}
                onCreated={({ gl }) => {
                    gl.setClearColor('#07060c')
                    setGL(gl)
                }}
                style={{
                    position: 'fixed',
                    height: '100%',
                    width: '100%',
                    top: 0,
                    left: 0,
                }}
                shadowMap
            >
                <Suspense fallback={<Loading />}>
                    <Particles count={350} />
                    <Prism />
                    <Planets />
                    {effectsEnabled ? <Environment /> : null}
                    {/*<StarrySky factor={isMobile ? 25 : 20} />*/}
                    {/*<Ground />*/}
                    <ambientLight args={['#6368e2', 0.15]} />
                    <Sound />
                </Suspense>
                {effectsEnabled ? <Effects /> : null}
                {effectsEnabled ? null : <VRCamera />}
                <OrbitControls
                    target={prismPosition}
                    minDistance={10}
                    maxDistance={125}
                    // maxPolarAngle={1.7}
                    touches={{
                        ONE: THREE.TOUCH.ROTATE,
                        TWO: THREE.TOUCH.DOLLY_PAN,
                    }}
                />
            </Canvas>
            <UI />
        </>
    )
}

export default App
