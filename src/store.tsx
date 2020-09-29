import create from 'zustand'
import * as THREE from 'three'
import { ReactComponentElement } from 'react'

type State = {
    prismColorMain: THREE.Color
    prismColorSub: THREE.Color
    ringColor: THREE.Color
    groundColor: THREE.Color
    enableEffects: boolean
    setEnableEffects: (value: boolean) => void
    vrButton: ReactComponentElement<any> | undefined
    setVRButton: (element: ReactComponentElement<any>) => void
}

const useStore = create<State>((set, get) => ({
    prismColorMain: new THREE.Color('#355cd6'),
    prismColorSub: new THREE.Color('#6cbca0'),
    ringColor: new THREE.Color('#d7ee9b'),
    groundColor: new THREE.Color('#555555'),
    enableEffects: true,
    setEnableEffects: (value) => void set({ enableEffects: value }),
    vrButton: undefined,
    setVRButton: (element) => void set({ vrButton: element }),
}))

export default useStore
