import React, { Suspense, useRef } from 'react'
import { Canvas } from 'react-three-fiber'
import * as THREE from 'three'
import { OrbitControls } from 'drei'
import useStore from '../stores/store'
import Particles from '../components/3d/Particles'
import Prism from '../components/3d/Prism'
import WarpEffect from '../components/3d/WarpEffect'
import Effects from '../components/3d/Effects'
import Planets from '../components/3d/Planets'
import Environment from '../components/3d/Environment'
import VRCamera from '../components/3d/VRCamera'
import UI from '../components/UI'
import Sound from '../components/Sound'
import Rig from '../components/3d/Rig'
import { Loader } from 'drei'

const selector = (state) => ({
    cameraPosition: state.cameraPosition,
    effectsEnabled: state.effectsEnabled,
    setGL: state.actions.setGL,
    fov: state.fov,
})

const Warp = () => {
    const { cameraPosition, effectsEnabled, setGL, fov } = useStore(selector)

    // @ts-ignore
    return (
        <>
            <Canvas
                vr
                concurrent
                gl={{ antialias: true }}
                camera={{
                    fov: fov,
                    position: cameraPosition,
                    near: 0.01,
                    far: 40000,
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
                <Suspense fallback={null}>
                    <Planets />
                    {effectsEnabled ? <Environment /> : null}
                    <Rig>
                        <WarpEffect />
                    </Rig>
                    <ambientLight args={['#6368e2', 0.15]} />
                    <Sound />
                </Suspense>
                {effectsEnabled ? <Effects /> : null}
                {effectsEnabled ? null : <VRCamera />}
            </Canvas>
            <Loader innerStyles={null} barStyles={null} containerStyles={null} dataStyles={null} />
            <UI />
        </>
    )
}

export default Warp
