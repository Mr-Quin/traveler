import React, { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import { useLoader } from 'react-three-fiber'
import sunTex from '../../assets/2k_sun.jpg'
import planetTex from '../../assets/2k_makemake_fictional.jpg'
import moon2Tex from '../../assets/2k_haumea_fictional.jpg'
import moonTex from '../../assets/2k_ceres_fictional.jpg'

import useTurntable from '../../hooks/useTurntable'
import useOrbit from '../../hooks/useOrbit'
import useStore from '../../store'

const selector = (state) => ({
    marsPosition: state.marsPosition,
    moon1Position: state.moon1Position,
    moon2Position: state.moon2Position,
})

const Planets = ({ ...props }) => {
    const mars = useRef<THREE.Group>()
    const moon1 = useRef<THREE.Group>()
    const moon2 = useRef<THREE.Group>()
    const sunLight = useRef<THREE.DirectionalLight>()

    const { marsPosition, moon1Position, moon2Position } = useStore(selector)

    const [target, setTarget] = useState<THREE.Object3D>()

    const sunTexture = useLoader(THREE.TextureLoader, sunTex)
    const marsTexture = useLoader(THREE.TextureLoader, planetTex)
    const moonTexture = useLoader(THREE.TextureLoader, moonTex)
    const moon2Texture = useLoader(THREE.TextureLoader, moon2Tex)

    useEffect(() => void (target && (sunLight.current!.target = target)), [target])
    useTurntable(mars, { rate: -0.0002 })
    useTurntable(moon1, { rate: -0.0006 })
    useTurntable(moon2, { rate: 0.0005 })
    useOrbit(moon1, mars, { axis: new THREE.Vector3(-0.55, 1, 0).normalize(), rate: 0.00004 })
    useOrbit(moon2, mars, { axis: new THREE.Vector3(3.667, 1, 0).normalize(), rate: 0.00002 })

    return (
        <>
            {/*mars*/}
            <group
                ref={mars}
                position={marsPosition}
                rotation={[THREE.MathUtils.degToRad(30), 0, THREE.MathUtils.degToRad(5)]}
            >
                <mesh scale={[200, 200, 200]} onUpdate={(self) => setTarget(self)}>
                    <sphereBufferGeometry attach="geometry" args={[1, 64, 32]} />
                    <meshStandardMaterial attach="material" color={'#eeeeee'} map={marsTexture} />
                </mesh>
            </group>
            {/*moon1*/}
            <group ref={moon1} position={moon1Position}>
                <mesh scale={[30, 30, 30]}>
                    <sphereBufferGeometry attach="geometry" args={[1, 64, 32]} />
                    <meshStandardMaterial attach="material" color={'#eeeeee'} map={moonTexture} />
                </mesh>
            </group>
            {/*moon2*/}
            <group ref={moon2} position={moon2Position}>
                <mesh scale={[30, 30, 30]}>
                    <sphereBufferGeometry attach="geometry" args={[1, 64, 32]} />
                    <meshStandardMaterial attach="material" color={'#888888'} map={moon2Texture} />
                </mesh>
            </group>
            {/*sun*/}
            <group position={[-800, 200, -2000]}>
                <pointLight ref={sunLight} color={'#ffe3bf'} intensity={1} />
                <mesh scale={[20, 20, 20]}>
                    <sphereBufferGeometry attach="geometry" args={[1, 64, 32]} />
                    <meshStandardMaterial
                        attach="material"
                        color={'#ffffff'}
                        emissiveMap={sunTexture}
                        emissive={new THREE.Color('#ffffff')}
                        emissiveIntensity={1.5}
                    />
                </mesh>
            </group>
        </>
    )
}

export default Planets
