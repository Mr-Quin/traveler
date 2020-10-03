import React, { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
// import { useHelper } from 'drei'
import { useLoader } from 'react-three-fiber'
import tex from '../../assets/TDVC_Mars_Texture_Map.jpg'
import normal from '../../assets/TDVC_Mars_Texture_Normal.jpg'
import useTurntable from '../../hooks/useTurntable'

const Planets = ({ ...props }) => {
    const mars = useRef<THREE.Mesh>()
    const sunLight = useRef<THREE.DirectionalLight>()

    const [target, setTarget] = useState<THREE.Object3D>()

    const marsTexture = useLoader(THREE.TextureLoader, tex)
    const marsNormal = useLoader(THREE.TextureLoader, normal)

    // useHelper(sunLight, THREE.DirectionalLightHelper, 10, 'teal')
    useEffect(() => void (target && (sunLight.current!.target = target)), [target])
    useTurntable(mars, { rate: -0.0005 })

    return (
        <>
            <mesh
                ref={mars}
                position={[35, 55, -60]}
                rotation={[THREE.MathUtils.degToRad(30), 0, THREE.MathUtils.degToRad(5)]}
                scale={[20, 20, 20]}
                onUpdate={(self) => setTarget(self)}
            >
                <sphereBufferGeometry attach="geometry" args={[1, 64, 32]} />
                <meshStandardMaterial
                    attach="material"
                    color={'#ffffff'}
                    map={marsTexture}
                    normalMap={marsNormal}
                    roughness={1}
                />
            </mesh>
            <group position={[-60, 20, -300]}>
                <directionalLight ref={sunLight} color={'#ffe3bf'} intensity={1} />
                {/*<mesh scale={[20, 20, 20]}>*/}
                {/*    <sphereBufferGeometry attach="geometry" args={[1, 64, 32]} />*/}
                {/*    <meshStandardMaterial*/}
                {/*        attach="material"*/}
                {/*        color={'#ffffff'}*/}
                {/*        roughness={1}*/}
                {/*        emissive={new THREE.Color('#a1fff7')}*/}
                {/*    />*/}
                {/*</mesh>*/}
            </group>
        </>
    )
}

export default Planets
