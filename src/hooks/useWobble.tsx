import { useFrame } from 'react-three-fiber'
import React from 'react'

type T = (
    ref: React.MutableRefObject<any>,
    options: {
        readonly axis?: string
        readonly factor?: number
        readonly defaultValue?: number
        readonly fn?: string
    }
) => React.MutableRefObject<any>

const useWobble: T = (ref, { axis = 'y', factor = 1, defaultValue = 0, fn = 'sin' }) => {
    useFrame((state) => {
        const time = state.clock.getElapsedTime()
        ref.current!.position[axis] = defaultValue + Math[fn](time) * factor
    })
    return ref
}

export default useWobble
