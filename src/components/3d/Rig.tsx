import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { useThree } from 'react-three-fiber'
import useWarpStore from '../../stores/WarpStore'
import useBodyStore from '../../stores/BodyStore'
import { OrbitControls } from 'drei'

const targets = useBodyStore.getState().bodies
const warpToSelector = (state) => state.actions.warpTo
const initSelector = (state) => state.init

const Rig = (props) => {
    const group = useRef<THREE.Group>()
    const controls = useRef()

    const { camera } = useThree()

    const warpTo = useWarpStore(warpToSelector)
    const init = useWarpStore(initSelector)

    useEffect(() => {
        init(group.current!, camera, controls.current!)
    }, [])

    useEffect(() => {
        setTimeout(() => {
            warpTo(targets[0])
            setInterval(() => {
                warpTo(targets[(Math.random() * 4) << 0])
            }, 20000)
        }, 2000)
    }, [])

    return (
        <>
            <group ref={group}>
                <group>
                    <mesh position={[0, -0.2, 1]}>
                        <boxBufferGeometry attach="geometry" args={[0.5, 0.1, 0.5]} />
                    </mesh>
                    {props.children}
                </group>
            </group>
            {/*<OrbitControls*/}
            {/*    ref={controls}*/}
            {/*    target={[0, -0.2, 1]}*/}
            {/*    maxDistance={125}*/}
            {/*    touches={{*/}
            {/*        ONE: THREE.TOUCH.ROTATE,*/}
            {/*        TWO: THREE.TOUCH.DOLLY_PAN,*/}
            {/*    }}*/}
            {/*/>*/}
        </>
    )
}

export default Rig
