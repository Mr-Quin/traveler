import React from 'react'
import { useGLTFLoader } from 'drei'
import shipModel from '../../assets/StarSparrow.gltf'

const Vessel = (props) => {
    // @ts-ignore
    const { nodes, materials } = useGLTFLoader(shipModel, true)

    return (
        <group {...props}>
            <group name="ship">
                <mesh
                    material={materials.StarSparrowBlue}
                    geometry={nodes.StarSparrow03.geometry}
                />
            </group>
        </group>
    )
}

export default Vessel
