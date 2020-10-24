import create from 'zustand'
import * as THREE from 'three'

import { sunTex, marsTex, moon1Tex, moon2Tex } from '../assets'

type BodyState = {
    bodies: CelestialBodyType[]
}

const useBodyStore = create<BodyState>(() => ({
    bodies: [
        {
            name: 'sun',
            position: new THREE.Vector3(-800, 200, -2000),
            diameter: 20,
            texture: sunTex,
            isStar: true,
            turnRate: 0.0002,
        },
        {
            name: 'mars',
            position: new THREE.Vector3(250, 500, -600),
            diameter: 200,
            texture: marsTex,
            turnRate: -0.0005,
        },
        {
            name: 'moon1',
            position: new THREE.Vector3(-650, 5, -400),
            diameter: 30,
            texture: moon1Tex,
            turnRate: 0.0008,
        },
        {
            name: 'moon2',
            position: new THREE.Vector3(100, -50, 400),
            diameter: 30,
            texture: moon2Tex,
            turnRate: 0.001,
        },
    ],
}))

export default useBodyStore
