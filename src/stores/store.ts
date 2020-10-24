import create from 'zustand'
import * as THREE from 'three'

type State = {
    readonly statics: {}
    prismColorPrimary: THREE.Color
    prismColorSecondary: THREE.Color
    prismPosition: THREE.Vector3
    cameraPosition: THREE.Vector3
    prismScale: THREE.Vector3
    ringColor: THREE.Color
    fov: number
    glRenderer: THREE.WebGLRenderer | null
    isMobile: boolean
    effectsEnabled: boolean
    quality: number
    actions: {
        setGL: (gl: THREE.WebGLRenderer) => void
        setEnableEffects: (bool: boolean) => void
        setQuality: (newQuality: number) => void
    }
}

const useStore = create<State>((set, get) => ({
    statics: {},
    prismColorPrimary: new THREE.Color('#355cd6'),
    prismColorSecondary: new THREE.Color('#6cbca0'),
    prismPosition: new THREE.Vector3(0, 8, 0),
    cameraPosition: new THREE.Vector3(0, 1.6, 20),
    prismScale: new THREE.Vector3(1, 1.8, 1),
    ringColor: new THREE.Color('#d7ee9b'),
    fov: 73.7,
    glRenderer: null,
    isMobile: /iPhone|iPad|iPod|Android/i.test(navigator.userAgent),
    effectsEnabled: true,
    quality: window.devicePixelRatio,
    actions: {
        setGL: (gl) => void set({ glRenderer: gl }),
        setEnableEffects: (bool) => void set({ effectsEnabled: bool }),
        setQuality: (newQuality) => void set({ quality: newQuality * window.devicePixelRatio }),
    },
}))

export default useStore
