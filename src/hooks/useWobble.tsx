import { useFrame } from 'react-three-fiber'
import React from 'react'

type Wobble = (
    ref: React.MutableRefObject<any>,
    options: {
        readonly axis?: string
        readonly factor?: number
        readonly defaultValue?: number
        readonly fn?: 'sin' | 'tan' | 'cos'
    }
) => React.MutableRefObject<any>

const useWobble: Wobble = (ref, { axis = 'y', factor = 1, defaultValue = 0, fn = 'sin' }) => {
    useFrame((state) => {
        const time = state.clock.getElapsedTime()
        ref.current!.position[axis] = defaultValue + Math[fn](time) * factor
    })
    return ref
}

export default useWobble
