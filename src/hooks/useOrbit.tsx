import React from 'react'
import { useFrame } from 'react-three-fiber'
import * as THREE from 'three'

type Orbit = (
    ref: React.MutableRefObject<any>,
    targetRef: React.MutableRefObject<any>,
    options: {
        readonly axis?: THREE.Vector3
        readonly rate?: number
    }
) => React.MutableRefObject<any>

const useOrbit: Orbit = (ref, targetRef, { axis = new THREE.Vector3(0, 1, 0), rate = 0.01 }) => {
    /*
     TODO: Provide another point to calculate rotation axis
           The rotational axis is perpendicular to the plane constructed by ref, targetRef, and another Vector3
     */

    useFrame(() => {
        ref.current!.position.sub(targetRef.current!.position)
        ref.current!.position.applyAxisAngle(axis!, rate!)
        ref.current!.position.add(targetRef.current!.position)
    })
    return ref
}

export default useOrbit
