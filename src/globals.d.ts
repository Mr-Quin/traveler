import * as THREE from 'three'

declare global {
    type CelestialBodyType = {
        name: string
        position: THREE.Vector3
        diameter: number
        texture: string | any
        isStar?: boolean
        turnRate?: number
    }

    type Uniform = {
        value: any
    }

    type Uniforms = {
        [key: string]: Uniform
    }
}
