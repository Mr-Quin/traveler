import React, { useRef, useMemo } from 'react'
import * as THREE from 'three'
import { useFrame } from 'react-three-fiber'

const Particles = ({ count = 1500, ...props }) => {
    const instance = useRef<any>()

    const dummy = useMemo(() => new THREE.Object3D(), [])
    const particles: any[] = useMemo(() => {
        return new Array(count).fill(null).map(() => {
            const r = 10
            return {
                d: Math.random() * 10,
                offset: new THREE.Vector3(
                    Math.random() - 0.5,
                    Math.random() - 0.5,
                    Math.random() - 0.5
                )
                    .normalize()
                    .multiplyScalar(Math.random() * r),

                speed: Math.random() / 200 + 0.01,
                scale: Math.min(0.0001, Math.random() / 100),
            }
        })
    }, [count])

    useFrame(() => {
        particles.forEach((particle, i) => {
            const { offset, scale, speed } = particle
            const d = (particle.d += speed / 2)
            const a = Math.cos(d) + Math.sin(d) / 100
            const b = Math.sin(d) + Math.cos(d * 2) / 100
            const r = Math.cos(d)
            dummy.position.set(offset.x + a / 10, offset.y + b / 10, offset.z + a / 10)
            // dummy.position.set(offset.x, offset.y, offset.z)
            dummy.scale.set(scale, scale, scale)
            dummy.rotation.set(r, r * 2, r * 3)
            dummy.updateMatrix()
            instance.current.setMatrixAt(i, dummy.matrix)
        })
        instance.current.instanceMatrix.needsUpdate = true
    })

    return (
        <instancedMesh
            ref={instance}
            args={[null as any, null as any, particles.length]}
            frustumCulled={false}
        >
            <coneBufferGeometry attach="geometry" args={[2, 2, 3]} />
            <meshStandardMaterial
                attach="material"
                roughness={0.1}
                color={'#fefefe'}
                emissive={new THREE.Color(0xffffff)}
                emissiveIntensity={0.5}
            />
        </instancedMesh>
    )
}

export default Particles
