import create from 'zustand'
import * as THREE from 'three'
import { ReactComponentElement } from 'react'

type State = {
    prismColorMain: THREE.Color
    prismColorSub: THREE.Color
    ringColor: THREE.Color
    groundColor: THREE.Color
    vrButton: ReactComponentElement<any> | null
    effectsEnabled: boolean
    quality: number
    actions: {
        setVRButton: (button: ReactComponentElement<any>) => void
        disableEffects: () => void
        setQuality: (newQuality: number) => void
    }
}

const useStore = create<State>((set, get) => ({
    prismColorMain: new THREE.Color('#355cd6'),
    prismColorSub: new THREE.Color('#6cbca0'),
    ringColor: new THREE.Color('#d7ee9b'),
    groundColor: new THREE.Color('#555555'),
    isLoading: true,
    vrButton: null,
    effectsEnabled: true,
    quality: window.devicePixelRatio,
    actions: {
        setVRButton: (button) => void set({ vrButton: button }),
        disableEffects: () => void set({ effectsEnabled: false }),
        setQuality: (newQuality) => void set({ quality: newQuality * window.devicePixelRatio }),
    },
}))

export default useStore
