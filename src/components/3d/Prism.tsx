import React, { useMemo, useRef } from 'react'
import * as THREE from 'three'
import { useFrame } from 'react-three-fiber'
import useTurntable from '../../hooks/useTurntable'
import useWobble from '../../hooks/useWobble'
// import { useHelper } from 'drei'
import useStore from '../../store'
import Rings from './Rings'

const Prism = ({ ...props }) => {
    const mainColor = useStore((state) => state.prismColorMain)
    const subColor = useStore((state) => state.prismColorSub)
    const prismPosition = useStore((state) => state.prismPosition)
    const prismScale: [number, number, number] = [1, 1.8, 1]
    const cubeScale: [number, number, number] = [1.4, 1.4, 1.4]

    const prismGroup = useRef<THREE.Group>()
    const cube = useRef<THREE.Mesh<THREE.BoxBufferGeometry, THREE.MeshStandardMaterial>>()
    const light1 = useRef<THREE.PointLight>()
    const light2 = useRef<THREE.PointLight>()

    const prismGeometry = useMemo(() => new THREE.SphereBufferGeometry(3.5, 4, 2), [])

    // useHelper(light1, THREE.PointLightHelper, 1, 'teal')
    // useHelper(light2, THREE.PointLightHelper, 1, 'teal')

    useWobble(prismGroup, { defaultValue: prismPosition.y, factor: 0.5 })

    useTurntable(prismGroup, { rate: 0.005 })
    useTurntable(cube, { axis: 'x', rate: 0.02 })
    useTurntable(cube, { rate: 0.015 })
    useTurntable(cube, { axis: 'z' })

    useFrame(({ clock }) => {
        const time = clock.getElapsedTime()
        cube.current!.material.emissiveIntensity = Math.sin(time * Math.PI * 0.5) / 2 + 1.5
        light1.current!.intensity = cube.current!.material.emissiveIntensity
        light1.current!.position.y = prismGroup.current!.position.y
        light2.current!.intensity = cube.current!.material.emissiveIntensity
        light2.current!.position.y = -prismGroup.current!.position.y
    })

    return (
        <group>
            <group ref={prismGroup} position={prismPosition}>
                {/*light*/}
                <pointLight ref={light1} distance={20} color={mainColor} />
                <pointLight ref={light2} distance={20} color={mainColor} />
                {/*light cube*/}
                <mesh ref={cube} scale={cubeScale} {...props}>
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
            <Rings position={[0, -2, -20]} />
        </group>
    )
}

export default Prism
