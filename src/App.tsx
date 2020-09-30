import React, { Suspense } from 'react'
import { Canvas } from 'react-three-fiber'
import useStore from './store'
import Camera from './components/3d/Camera'
import Particles from './components/3d/Particles'
import Prism from './components/3d/Prism'
import Ground from './components/3d/Ground'
import Effects from './components/3d/Effects'
import Rings from './components/3d/Rings'
import Planets from './components/3d/Planets'
import StarrySky from './components/3d/StarrySky'
import UI from './components/UI'
import WithVRButton from './components/WithVRButton'

/**
 * TODO: Type all components
 * TODO: Add loading screen
 */
const App = () => {
    const isMobile: boolean = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
    const quality = useStore((state) => state.quality)
    const effectsEnabled = useStore((state) => state.effectsEnabled)
    const vrButton = useStore((state) => state.vrButton)

    return (
        <>
            <Canvas
                vr
                concurrent
                gl={{ antialias: true }}
                pixelRatio={quality}
                camera={{
                    fov: 80,
                    position: [0, 0, 0],
                    near: 0.005,
                    far: 10000,
                }}
                onCreated={({ gl }) => {
                    gl.setClearColor('#07060c')
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
                <Suspense fallback={<>Loading</>}>
                    <Particles count={2000} />
                    <StarrySky factor={isMobile ? 8 : 5} />
                    <Ground />
                    <Rings />
                    <Prism />
                    <Planets />
                </Suspense>
                {effectsEnabled ? <Effects /> : null}
                <Camera />
                <ambientLight args={['#6368e2', 0.15]} />
                <WithVRButton />
            </Canvas>
            {vrButton}
            <UI />
        </>
    )
}

export default App
