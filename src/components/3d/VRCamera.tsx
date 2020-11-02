import React, { useEffect, useRef } from 'react'
import { useThree } from 'react-three-fiber'
import * as THREE from 'three'
import useStore from '../../stores/store'

const VRCamera = () => {
    const { camera, gl } = useThree()

    const { cameraPosition } = useStore((state) => state)

    const rig = useRef<THREE.Group>()

    useEffect(() => {
        // if (!gl.xr.isPresenting) return
        const cam = gl.xr.isPresenting ? gl.xr.getCamera(camera) : camera
        rig.current!.add(cam)
        return () => void rig.current!.remove(cam)
    }, [gl.xr.isPresenting, gl.xr, camera, rig])

    return <group ref={rig} position={cameraPosition} />
}

export default VRCamera
