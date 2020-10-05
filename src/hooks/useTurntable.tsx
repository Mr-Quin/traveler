import { useFrame } from 'react-three-fiber'
import React from 'react'

type T = (
    ref: React.MutableRefObject<any>,
    options: {
        readonly axis?: string
        readonly rate?: number
    }
) => React.MutableRefObject<any>

const useTurntable: T = (ref, { axis = 'y', rate = 0.01 }) => {
    useFrame(() => {
        ref.current!.rotation[axis] += rate
    })
    return ref
}

export default useTurntable
