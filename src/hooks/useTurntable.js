import { useFrame } from 'react-three-fiber'

const useTurntable = (ref, axis = 'y', rate = 0.01) => {
    useFrame(() => {
        ref.current.rotation[axis] += rate
    })
    return ref
}

export default useTurntable
