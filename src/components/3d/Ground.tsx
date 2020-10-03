import React, { useRef } from 'react'
import * as THREE from 'three'
import useStore from '../../store'

const Ground = () => {
    const ground = useRef<THREE.Mesh>()
    const groundColor = useStore((state) => state.groundColor)

    return (
        <mesh ref={ground} position={[0, -1.6, 0]} rotation={[THREE.MathUtils.degToRad(-90), 0, 0]}>
            <planeBufferGeometry attach="geometry" args={[200, 200]} />
            <meshStandardMaterial attach="material" color={groundColor} roughness={1} />
        </mesh>
    )
}

export default Ground
