import create from 'zustand'
import * as THREE from 'three'

type State = {
    prismColorMain: THREE.Color
    prismColorSub: THREE.Color
    prismPosition: THREE.Vector3
    ringColor: THREE.Color
    groundColor: THREE.Color
    glRenderer: THREE.WebGLRenderer | null
    effectsEnabled: boolean
    quality: number
    actions: {
        setGL: (gl: THREE.WebGLRenderer) => void
        disableEffects: () => void
        setQuality: (newQuality: number) => void
    }
}

const useStore = create<State>((set, get) => ({
    prismColorMain: new THREE.Color('#355cd6'),
    prismColorSub: new THREE.Color('#6cbca0'),
    prismPosition: new THREE.Vector3(0, 8, 0),
    ringColor: new THREE.Color('#d7ee9b'),
    groundColor: new THREE.Color('#555555'),
    glRenderer: null,
    effectsEnabled: true,
    quality: window.devicePixelRatio,
    actions: {
        setGL: (gl) => void set({ glRenderer: gl }),
        disableEffects: () => void set({ effectsEnabled: false }),
        setQuality: (newQuality) => void set({ quality: newQuality * window.devicePixelRatio }),
    },
}))

export default useStore
