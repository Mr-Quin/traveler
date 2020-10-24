import create from 'zustand'
import { addEffect } from 'react-three-fiber'
import * as THREE from 'three'
import useStore from './store'

type WarpStore = {
    mutations: {
        rig: THREE.Group | undefined
        camera: THREE.Camera | undefined
        controls: any
        target: CelestialBodyType | undefined
        threshold: number
        speed: number
        targetSpeed: number
        warping: boolean
    }
    actions: {
        readonly startWarp: () => void
        readonly endWarp: () => void
        readonly warpTo: (to: CelestialBodyType) => void
    }
    init: (rig: THREE.Group, camera: THREE.Camera, controls: any) => void
}

const yRotation = new THREE.Quaternion(0, 1, 0, 0)
const DISTANCE_OFFSET = 110
const FOV = useStore.getState().fov

const useWarpStore = create<WarpStore>((set, get) => ({
    mutations: {
        rig: undefined,
        camera: undefined,
        controls: undefined,
        target: undefined,
        threshold: 0,
        speed: 0,
        targetSpeed: 0,
        warping: false,
    },
    actions: {
        startWarp: () =>
            // @ts-ignore
            set((state) => {
                state.mutations.targetSpeed = 100
                state.mutations.warping = true
            }),
        endWarp: () =>
            // @ts-ignore
            set((state) => {
                state.mutations.targetSpeed = 0
                state.mutations.warping = false
            }),
        warpTo: (to) => {
            // @ts-ignore
            set((state) => {
                state.mutations.target = to
                state.mutations.threshold =
                    to.diameter / 2 / Math.tan((Math.PI * FOV) / 360) + DISTANCE_OFFSET // calculate the distance needed for the object to fill the screen. Offset for deceleration
            })
            get().actions.startWarp()
        },
    },
    init: (rig, camera, controls) => {
        const mutations = get().mutations
        const actions = get().actions
        // @ts-ignore
        set((state) => {
            state.mutations.rig = rig
            state.mutations.camera = camera
            state.mutations.controls = controls
        })

        // attach camera to rig on init
        mutations.camera!.quaternion.copy(mutations.rig!.quaternion).multiply(yRotation)
        mutations.camera!.position.copy(mutations.rig!.position)

        // @ts-ignore
        addEffect(() => {
            const {
                speed,
                targetSpeed,
                warping,
                rig,
                camera,
                controls,
                target,
                threshold,
            } = mutations

            if (!warping) {
                mutations.speed += (0 - speed) * 0.05 // target speed is 0 when not warping. Decelerate faster
            } else if (warping) {
                // rotate rig to face target
                const q1 = new THREE.Quaternion().copy(rig!.quaternion)
                rig!.lookAt(target!.position)
                const q2 = new THREE.Quaternion().copy(rig!.quaternion)
                THREE.Quaternion.slerp(q1, q2, rig!.quaternion, 0.03)

                // rotate camera to face rig
                const t = rig!.quaternion.clone().multiply(yRotation) // rotate camera 180degrees around Y
                camera!.quaternion.slerp(t, 0.1)

                // accelerate
                mutations.speed += (targetSpeed - speed) * Math.max(speed / 2000, 0.001)

                // end warp when close to target
                const distanceLeft = rig!.position.distanceTo(target!.position) - target!.diameter
                if (distanceLeft < threshold) actions.endWarp()
            }
            // apply speed to position
            rig!.translateZ(mutations.speed / 20)
            camera!.position.lerp(rig!.position, 0.8)
            // controls.target.copy(rig!.position)
        })
    },
}))

export default useWarpStore
