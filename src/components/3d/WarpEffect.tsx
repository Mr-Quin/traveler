import React, { useRef } from 'react'
import * as THREE from 'three'
import { useFrame, useThree, useUpdate } from 'react-three-fiber'
import useWarpStore from '../../stores/WarpStore'
import useStore from '../../stores/store'

// eslint-disable-next-line import/no-webpack-loader-syntax
import vertex from '!!raw-loader!../../shaders/warp.vert'
// eslint-disable-next-line import/no-webpack-loader-syntax
import frag from '!!raw-loader!../../shaders/warp.frag'

const FOV = useStore.getState().fov
const distanceOffset = 1 / 2 / Math.tan((Math.PI * FOV) / 360)

const mutations = useWarpStore.getState().mutations

/**
 * A plane with a fragment shader. Placed so that it covers the screen exactly
 */
/**
 * TODO: Add this to effect so it always covers the screen
 */

const WarpEffect = () => {
    const uniforms = useRef<Uniforms>({
        iTime: { value: 0 },
        iResolution: { value: new THREE.Vector2(1, 1) },
        seed: { value: Math.random() / 5 },
        uSpeed: { value: 0 },
    })
    const { aspect } = useThree()

    const plane = useUpdate<THREE.Mesh>(() => {
        plane.current!.scale.setX(aspect)
        uniforms.current!.iResolution.value = new THREE.Vector2(aspect, 1) // update shader aspect ratio here
    }, [aspect])

    useFrame(({ clock }) => {
        uniforms.current.uSpeed.value = mutations.speed
        uniforms.current.iTime.value = clock.getElapsedTime()
    })

    return (
        <mesh ref={plane} position={[0, 0, distanceOffset]}>
            <planeBufferGeometry attach="geometry" args={[1, 1]} />
            <shaderMaterial
                attach="material"
                args={[
                    {
                        uniforms: uniforms.current,
                        vertexShader: vertex,
                        fragmentShader: frag,
                    },
                ]}
                transparent
                side={THREE.DoubleSide}
            />
        </mesh>
    )
}

export default WarpEffect
