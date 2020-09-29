import React, { useRef } from 'react'
import * as THREE from 'three'
import useStore from '../store'

const Ground = ({ ...props }) => {
    const meshRef = useRef()
    const groundColor = useStore((state) => state.groundColor)

    return (
        <mesh
            ref={meshRef}
            position={[0, -1.6, 0]}
            rotation={[THREE.MathUtils.degToRad(-90), 0, 0]}
            {...props}
        >
            <planeBufferGeometry attach="geometry" args={[80, 80]} />
            <meshStandardMaterial attach="material" color={groundColor} roughness={1} />
        </mesh>
    )
}

export default Ground
