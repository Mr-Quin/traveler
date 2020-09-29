import React, { Suspense, useState } from 'react'
import * as THREE from 'three'
import { Canvas } from 'react-three-fiber'
import useStore from './store'
import Camera from './components/Camera'
import Particles from './components/Particles'
import Prism from './components/Prism'
import Ground from './components/Ground'
import Effects from './components/Effects'
import Rings from './components/Rings'
import Planets from './components/Planets'
import StarrySky from './components/StarrySky'
import EnableVRButton from './components/EnableVRButton'

interface XRSystem {
    isSessionSupported(sessionType: string): Promise<null>
}
declare global {
    interface Navigator {
        xr: XRSystem
    }
}

const App = () => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
    const enableEffects = useStore((state) => state.enableEffects)
    const vrButton = useStore((state) => state.vrButton)
    const [vrAvailable, setVR] = useState(false)

    return (
        <>
            <Canvas
                vr
                concurrent
                gl={{ antialias: true }}
                pixelRatio={window.devicePixelRatio}
                camera={{
                    fov: 80,
                    position: [0, 0, 0],
                    near: 0.005,
                    far: 10000,
                }}
                onCreated={(data: any) => {
                    const gl: THREE.WebGLRenderer = data.gl
                    if (navigator.xr) {
                        setVR(true)
                    }
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
                {enableEffects ? <Effects /> : null}
                {vrAvailable ? <EnableVRButton /> : null}
                <Camera />
                <ambientLight args={['#6368e2', 0.15]} />
            </Canvas>
            {vrButton}
        </>
    )
}

export default App
