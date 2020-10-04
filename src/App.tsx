import React, { Suspense } from 'react'
import { Canvas } from 'react-three-fiber'
import { OrbitControls } from 'drei'
import useStore from './store'
import Particles from './components/3d/Particles'
import Prism from './components/3d/Prism'
import Ground from './components/3d/Ground'
import Effects from './components/3d/Effects'
import Planets from './components/3d/Planets'
import StarrySky from './components/3d/StarrySky'
import Loading from './components/3d/Loading'
import UI from './components/UI'
import * as THREE from 'three'

const App = () => {
    const isMobile: boolean = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
    const quality = useStore((state) => state.quality)
    const effectsEnabled = useStore((state) => state.effectsEnabled)
    const setGL = useStore((state) => state.actions.setGL)

    return (
        <>
            <Canvas
                vr
                concurrent
                gl={{ antialias: true }}
                pixelRatio={isMobile ? quality / 2 : quality}
                camera={{
                    fov: 80,
                    position: [0, 1.6, 20],
                    near: 0.005,
                    far: 10000,
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
                    <Particles count={2000} />
                    <StarrySky factor={isMobile ? 8 : 5} />
                    <Ground />
                    <Prism />
                    <Planets />
                    <Environment />
                    {/*<StarrySky factor={isMobile ? 25 : 20} />*/}
                    {/*<Ground />*/}
                    <ambientLight args={['#6368e2', 0.15]} />
                </Suspense>
                {effectsEnabled ? <Effects /> : null}
                <OrbitControls
                    target={[0, 8, 0]}
                    minDistance={10}
                    maxDistance={125}
                    maxPolarAngle={1.7}
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
