import React, { useMemo, useRef } from 'react'
import * as THREE from 'three'
import { useFrame } from 'react-three-fiber'
import useStore from '../../store'

const Rings = ({ count = 10, height = 20, rotation = 10, ...props }) => {
    const ringColor = useStore((state) => state.ringColor)

    const instance = useRef<any>()
    const dummy = useMemo(() => new THREE.Object3D(), [])
    const toruses = useMemo(
        () =>
            new Array(count).fill(null).map((elt, i) => ({
                z: i / count,
                r: THREE.MathUtils.degToRad(i * rotation),
            })),
        [count, rotation]
    )

    useFrame(() => {
        toruses.forEach((torus, i, arr) => {
            const { z } = torus
            if (z >= 1) {
                torus.z = 0
                if (i < toruses.length - 1) {
                    torus.r = arr[i + 1].r + THREE.MathUtils.degToRad(rotation)
                } else {
                    torus.r = arr[0].r + THREE.MathUtils.degToRad(rotation)
                }
            }
            const d = (torus.z += 0.001)
            const rd = (torus.r += 0.001)

            dummy.position.set(0, THREE.MathUtils.lerp(0, height, d), 0)
            dummy.rotation.set(Math.PI / 2, 0, rd)
            dummy.scale.set(8 * Math.sin(Math.PI * z), 8 * Math.sin(Math.PI * z), 1)
            dummy.updateMatrix()
            instance.current.setMatrixAt(i, dummy.matrix)
        })
        instance.current.instanceMatrix.needsUpdate = true
    })

    return (
        <instancedMesh
            ref={instance}
            args={[null as any, null as any, toruses.length]}
            position={[0, -2, -20]}
        >
            <ringBufferGeometry attach="geometry" args={[1, 1.02, 3]} />
            <meshStandardMaterial
                attach="material"
                roughness={0.1}
                color={ringColor}
                emissive={ringColor}
                emissiveIntensity={0.5}
                opacity={0.5}
                transparent
            />
        </instancedMesh>
    )
}

export default Rings
