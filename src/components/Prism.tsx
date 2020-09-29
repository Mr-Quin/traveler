import React, { useMemo, useRef } from 'react'
import * as THREE from 'three'
import { useFrame } from 'react-three-fiber'
import useTurntable from '../hooks/useTurntable'
import useWobble from '../hooks/useWobble'
// import { useHelper } from 'drei'
import useStore from '../store'

const Prism = ({ ...props }) => {
    const mainColor = useStore((state) => state.prismColorMain)
    const subColor = useStore((state) => state.prismColorSub)

    const prismGroup = useRef<any>()
    const cube = useRef<any>()
    const light1 = useRef<any>()
    const light2 = useRef<any>()

    const prismGeometry = useMemo(() => new THREE.SphereBufferGeometry(3.5, 4, 2), [])

    const groupPosition: [number, number, number] = [0, 8, -20]
    const prismScale: [number, number, number] = [1, 1.8, 1]

    // useHelper(light1, THREE.PointLightHelper, 1, 'teal')
    // useHelper(light2, THREE.PointLightHelper, 1, 'teal')

    useWobble(prismGroup, groupPosition[1], 0.5)

    useTurntable(prismGroup, 'y', 0.005)
    useTurntable(cube, 'x', 0.02)
    useTurntable(cube, 'y', 0.015)
    useTurntable(cube, 'z', 0.01)

    useFrame(({ clock }) => {
        const time = clock.getElapsedTime()
        cube.current.material.emissiveIntensity = Math.sin(time * Math.PI * 0.5) / 2 + 1.5
        light1.current.intensity = cube.current.material.emissiveIntensity
        light1.current.position.y = prismGroup.current.position.y
        light2.current.intensity = cube.current.material.emissiveIntensity
        light2.current.position.y = -prismGroup.current.position.y
    })

    return (
        <group ref={prismGroup} position={groupPosition}>
            {/*light*/}
            <pointLight ref={light1} distance={20} color={mainColor} />
            <pointLight ref={light2} distance={20} color={mainColor} />
            {/*light cube*/}
            <mesh ref={cube} scale={[1.4, 1.4, 1.4]} {...props}>
                <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
                <meshStandardMaterial
                    attach="material"
                    color={mainColor}
                    emissive={mainColor}
                    emissiveIntensity={1}
                />
            </mesh>
            {/*wireframe*/}
            <mesh scale={prismScale} geometry={prismGeometry} {...props}>
                <meshStandardMaterial
                    attach="material"
                    color={subColor}
                    emissive={mainColor}
                    wireframe
                />
            </mesh>
            {/*prism*/}
            <mesh scale={prismScale} geometry={prismGeometry} {...props}>
                <meshPhysicalMaterial
                    attach="material"
                    color={subColor}
                    roughness={1}
                    opacity={0.4}
                    transparent
                />
            </mesh>
        </group>
    )
}

export default Prism
