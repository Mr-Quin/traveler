import React, { forwardRef, useMemo, useRef } from 'react'
import * as THREE from 'three'
import { ReactThreeFiber, useFrame } from 'react-three-fiber'
import useStore from '../../store'

interface Props extends ReactThreeFiber.Object3DNode<THREE.Group, typeof THREE.Group> {
    count?: number
    height?: number
    rotationOffset?: number
}

const Rings = forwardRef((props: Props, ref) => {
    const { count = 10, height = 20, rotationOffset = 10 } = props

    const ringColor = useStore((state) => state.ringColor)

    const instance = useRef<THREE.InstancedMesh>()

    const dummy = useMemo(() => new THREE.Object3D(), [])
    const toruses = useMemo(
        () =>
            new Array(count).fill(null).map((elt, i) => ({
                z: i / count,
                r: THREE.MathUtils.degToRad(i * rotationOffset),
            })),
        [count, rotationOffset]
    )

    useFrame(() => {
        toruses.forEach((torus, i, arr) => {
            const { z } = torus
            if (z >= 1) {
                torus.z = 0
                if (i < toruses.length - 1) {
                    torus.r = arr[i + 1].r + THREE.MathUtils.degToRad(rotationOffset)
                } else {
                    torus.r = arr[0].r + THREE.MathUtils.degToRad(rotationOffset)
                }
            }
            const d = (torus.z += 0.001)
            const rd = (torus.r += 0.001)
            const size = 8 * Math.sin(Math.PI * z)

            dummy.position.set(0, THREE.MathUtils.lerp(0, height, d), 0)
            dummy.rotation.set(Math.PI / 2, 0, rd)
            dummy.scale.set(size, size, size)
            dummy.updateMatrix()
            instance.current!.setMatrixAt(i, dummy.matrix)
        })
        instance.current!.instanceMatrix.needsUpdate = true
    })

    return (
        <group ref={ref as React.MutableRefObject<THREE.Group>} {...props}>
            <instancedMesh ref={instance} args={[null as any, null as any, toruses.length]}>
                <torusBufferGeometry attach="geometry" args={[1, 0.002, 5, 3]} />
                <meshStandardMaterial
                    attach="material"
                    roughness={0.1}
                    color={ringColor}
                    emissive={ringColor}
                    emissiveIntensity={0.5}
                    opacity={0.5}
                    transparent
                    side={THREE.DoubleSide}
                />
            </instancedMesh>
        </group>
    )
})

export default Rings
