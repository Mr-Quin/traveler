import React, { useRef } from 'react'
import useStore from '../store'

const Mountains = ({ ...props }) => {
    const pyramid = useRef()

    return (
        <mesh ref={pyramid} position={[-15, -2, -50]} rotation={[0, 1, 0]} {...props}>
            <coneBufferGeometry attach="geometry" args={[40, 50, 4]} />
            <meshStandardMaterial attach="material" color={'#c38e4e'} roughness={0.8} />
        </mesh>
    )
}

export default Mountains
