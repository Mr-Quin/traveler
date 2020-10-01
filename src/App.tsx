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
import Loading from './components/3d/Loading'
import UI from './components/UI'

/**
 * TODO: Type all components
 */
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
                pixelRatio={quality}
                camera={{
                    fov: 80,
                    position: [0, 0, 0],
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
                    <Rings />
                    <Prism />
                    <Planets />
                    <ambientLight args={['#6368e2', 0.15]} />
                </Suspense>
                {effectsEnabled ? <Effects /> : null}
                <Camera />
            </Canvas>
            <UI />
        </>
    )
}

export default App
