import { useFrame } from 'react-three-fiber'

const useWobble = (ref, defaultValue, factor = 1, fn = 'sin', callback) => {
    useFrame((state) => {
        const time = state.clock.getElapsedTime()
        ref.current.position.y = defaultValue + Math[fn](time) * factor
        if (callback) callback(time, ref.current)
    })
    return ref
}

export default useWobble
