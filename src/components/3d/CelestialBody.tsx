import React, { forwardRef, useRef } from 'react'
import * as THREE from 'three'
import { ReactThreeFiber, useLoader } from 'react-three-fiber'
import useTurntable from '../../hooks/useTurntable'
import FlareLight from './FlareLight'

interface CelestialBodyProps extends ReactThreeFiber.Object3DNode<THREE.Group, typeof THREE.Group> {
    diameter: number
    turnRate?: number
    isStar?: boolean
    texture?: any
}

/**
 * The base celestial body. Renders a sphere with a texture
 */
const CelestialBody = forwardRef(({ children, ...props }: CelestialBodyProps, ref) => {
    const { diameter, isStar = false, texture, turnRate } = props
    const mesh = useRef()

    useTurntable(mesh, { rate: turnRate })

    const map = useLoader(THREE.TextureLoader, texture)

    return (
        <group ref={ref as React.MutableRefObject<THREE.Group>} {...props}>
            {isStar ? <FlareLight /> : null}
            <mesh ref={mesh} scale={[diameter, diameter, diameter]}>
                <sphereBufferGeometry attach="geometry" args={[1, 64, 32]} />
                <meshStandardMaterial
                    attach="material"
                    color={'#eeeeee'}
                    map={map}
                    emissive={isStar ? new THREE.Color('#ffffff') : undefined}
                    emissiveMap={isStar ? map : undefined}
                    emissiveIntensity={isStar ? 1 : 0}
                    roughness={0.5}
                />
            </mesh>
            {children}
        </group>
    )
})

export default CelestialBody
