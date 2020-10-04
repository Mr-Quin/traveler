import React, { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import { useFrame, useLoader } from 'react-three-fiber'
import marsTex from '../../assets/TDVC_Mars_Texture_Map.jpg'
import marsNorm from '../../assets/TDVC_Mars_Texture_Normal.jpg'
import moonTex from '../../assets/2k_ceres_fictional.jpg'
import moon2Tex from '../../assets/2k_makemake_fictional.jpg'

import useTurntable from '../../hooks/useTurntable'
import useStore from '../../store'
import useOrbit from '../../hooks/useOrbit'

const Planets = ({ ...props }) => {
    const mars = useRef<THREE.Group>()
    const moon1 = useRef<THREE.Group>()
    const moon2 = useRef<THREE.Group>()
    const sunLight = useRef<THREE.DirectionalLight>()

    const { marsPosition, moon1Position, moon2Position } = useStore((state) => state)

    const [target, setTarget] = useState<THREE.Object3D>()

    const marsTexture = useLoader(THREE.TextureLoader, marsTex)
    const marsNormal = useLoader(THREE.TextureLoader, marsNorm)
    const moonTexture = useLoader(THREE.TextureLoader, moonTex)
    const moon2Texture = useLoader(THREE.TextureLoader, moon2Tex)

    useEffect(() => void (target && (sunLight.current!.target = target)), [target])
    useTurntable(mars, { rate: -0.0002 })
    useTurntable(moon1, { rate: -0.0005 })
    useTurntable(moon2, { rate: 0.0001 })
    useOrbit(moon1, mars, { axis: new THREE.Vector3(-0.55, 1, 0).normalize(), rate: 0.00004 })
    useOrbit(moon2, mars, { axis: new THREE.Vector3(3.667, 1, 0).normalize(), rate: 0.00005 })

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
                    <meshStandardMaterial
                        attach="material"
                        color={'#ffffff'}
                        map={marsTexture}
                        normalMap={marsNormal}
                    />
                </mesh>
            </group>
            {/*moon1*/}
            <group ref={moon1} position={moon1Position}>
                <mesh scale={[30, 30, 30]}>
                    <sphereBufferGeometry attach="geometry" args={[1, 64, 32]} />
                    <meshStandardMaterial attach="material" color={'#ffffff'} map={moonTexture} />
                </mesh>
            </group>
            {/*moon2*/}
            <group ref={moon2} position={moon2Position}>
                <mesh scale={[30, 30, 30]}>
                    <sphereBufferGeometry attach="geometry" args={[1, 64, 32]} />
                    <meshStandardMaterial attach="material" color={'#666666'} map={moon2Texture} />
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
                        emissive={new THREE.Color('#ffb827')}
                        emissiveIntensity={2}
                    />
                </mesh>
            </group>
        </>
    )
}

export default Planets
