import React, { useEffect, useMemo, useRef } from 'react'
import * as THREE from 'three'
import { useFrame } from 'react-three-fiber'
import useTurntable from '../../hooks/useTurntable'
import useWobble from '../../hooks/useWobble'
import useStore from '../../store'
import Rings from './Rings'
import { animated as a, useSpring } from 'react-spring/three'

type SpringProps = {
    rotation: [number, number, number]
    scale: [number, number, number]
}

const Prism = ({ ...props }) => {
    const { prismColorPrimary, prismColorSecondary, prismPosition, prismScale } = useStore(
        (state) => state
    )

    const prismGroup = useRef<THREE.Group>()
    const cube = useRef<THREE.Mesh<THREE.BoxBufferGeometry, THREE.MeshStandardMaterial>>()
    const light1 = useRef<THREE.PointLight>()
    const light2 = useRef<THREE.PointLight>()

    const prismGeometry = useMemo(() => new THREE.SphereBufferGeometry(3.5, 4, 2), [])
    const cubeGeometry = useMemo(() => new THREE.BoxBufferGeometry(1, 1, 1).toNonIndexed(), [])

    const [cubeSpring, setCubeSpring]: [SpringProps, any] = useSpring(() => ({
        rotation: [
            THREE.MathUtils.degToRad(Math.round(Math.random()) * 720),
            THREE.MathUtils.degToRad(Math.round(Math.random()) * 720),
            THREE.MathUtils.degToRad(Math.round(Math.random()) * 720),
        ],
        scale: [1.4, 1.4, 1.4],
        from: { rotation: [0, 0, 0], scale: [1.4, 1.4, 1.4] },
        config: { mass: 30, tension: 10, friction: 10 },
    }))

    useEffect(() => {
        setInterval(
            () =>
                setCubeSpring({
                    rotation: [
                        THREE.MathUtils.degToRad(Math.round(Math.random()) * 540),
                        THREE.MathUtils.degToRad(Math.round(Math.random()) * 540),
                        THREE.MathUtils.degToRad(Math.round(Math.random()) * 540),
                    ],
                }),
            3000
        )
    }, [])

    useWobble(prismGroup, { defaultValue: prismPosition.y, factor: 0.5 })
    useTurntable(prismGroup, { rate: 0.005 })

    useFrame(({ clock }) => {
        const time = clock.getElapsedTime()
        cube.current!.material.emissiveIntensity = Math.sin(time * Math.PI * 0.5) / 2 + 1.5

        // const { position, normal } = cube.current!.geometry.attributes
        // for (let i = 0; i < 36; i++) {
        //     const px = position.array[i * 3]
        //     const py = position.array[i * 3 + 1]
        //     const pz = position.array[i * 3 + 2]
        //
        //     const nx = normal.array[i * 3]
        //     const ny = normal.array[i * 3 + 1]
        //     const nz = normal.array[i * 3 + 2]
        //
        //     position.setXYZ(
        //         i,
        //         px + nx * 0.001 * Math.sin(time),
        //         py + ny * 0.001 * Math.sin(time),
        //         pz + nz * 0.001 * Math.sin(time)
        //     )
        // }
        // position.needsUpdate = true

        light1.current!.intensity = cube.current!.material.emissiveIntensity
        light1.current!.position.y = prismGroup.current!.position.y
        light2.current!.intensity = cube.current!.material.emissiveIntensity
        light2.current!.position.y = -prismGroup.current!.position.y
    })

    return (
        <group>
            <group ref={prismGroup} position={prismPosition}>
                {/*light*/}
                <pointLight ref={light1} distance={20} color={prismColorPrimary} />
                <pointLight ref={light2} distance={20} color={prismColorPrimary} />
                {/*light cube*/}
                <a.mesh ref={cube} geometry={cubeGeometry} {...cubeSpring}>
                    <meshStandardMaterial
                        attach="material"
                        color={prismColorSecondary}
                        emissive={prismColorPrimary}
                        side={THREE.DoubleSide}
                    />
                </a.mesh>
                {/*wireframe*/}
                <mesh scale={prismScale} geometry={prismGeometry}>
                    <meshStandardMaterial
                        attach="material"
                        color={prismColorSecondary}
                        emissive={prismColorPrimary}
                        wireframe
                    />
                </mesh>
                {/*prism*/}
                <mesh scale={prismScale} geometry={prismGeometry}>
                    <meshPhysicalMaterial
                        attach="material"
                        color={prismColorSecondary}
                        opacity={0.4}
                        transparent
                    />
                </mesh>
            </group>
            <Rings position={[prismPosition.x, prismPosition.y - 10, prismPosition.z]} />
        </group>
    )
}

export default Prism
