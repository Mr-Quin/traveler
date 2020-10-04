import create from 'zustand'
import * as THREE from 'three'

type State = {
    prismColorPrimary: THREE.Color
    prismColorSecondary: THREE.Color
    prismPosition: THREE.Vector3
    prismScale: THREE.Vector3
    ringColor: THREE.Color
    groundColor: THREE.Color
    marsPosition: THREE.Vector3
    moon1Position: THREE.Vector3
    moon2Position: THREE.Vector3
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
    prismColorPrimary: new THREE.Color('#355cd6'),
    prismColorSecondary: new THREE.Color('#6cbca0'),
    prismPosition: new THREE.Vector3(0, 8, 0),
    prismScale: new THREE.Vector3(1, 1.8, 1),
    ringColor: new THREE.Color('#d7ee9b'),
    groundColor: new THREE.Color('#555555'),
    marsPosition: new THREE.Vector3(250, 500, -600),
    moon1Position: new THREE.Vector3(-650, 5, -400),
    moon2Position: new THREE.Vector3(100, -50, 400),
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
