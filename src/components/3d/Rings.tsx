import React, { forwardRef, useMemo, useRef } from 'react'
import * as THREE from 'three'
import { ReactThreeFiber, useFrame } from 'react-three-fiber'
import useStore from '../../stores/store'

interface RingProps extends ReactThreeFiber.Object3DNode<THREE.Group, typeof THREE.Group> {
    count?: number
    height?: number
    rotationOffset?: number
}

const Rings = forwardRef((props: RingProps, ref) => {
    const { count = 10, height = 20, rotationOffset = 10 } = props

    const ringColor = useStore((state) => state.ringColor)

    const instance = useRef<THREE.InstancedMesh>()

    const dummy = useMemo(() => new THREE.Object3D(), [])
    const toruses = useMemo(
        () =>
            [...Array(count)].map((elt, i) => ({
                yPos: i / count,
                rotation: THREE.MathUtils.degToRad(i * rotationOffset),
            })),
        [count, rotationOffset]
    )

    useFrame(() => {
        toruses.forEach((torus, i, arr) => {
            const { yPos } = torus
            if (yPos >= 1) {
                torus.yPos = 0
                if (i < toruses.length - 1) {
                    torus.rotation = arr[i + 1].rotation + THREE.MathUtils.degToRad(rotationOffset)
                } else {
                    torus.rotation = arr[0].rotation + THREE.MathUtils.degToRad(rotationOffset)
                }
            }
            const y = (torus.yPos += 0.001)
            const rot = (torus.rotation += 0.001)

            const scale = 8 * Math.sin(Math.PI * yPos)

            dummy.position.set(0, THREE.MathUtils.lerp(0, height, y), 0)
            dummy.rotation.set(Math.PI / 2, 0, rot)
            dummy.scale.set(scale, scale, scale)
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
