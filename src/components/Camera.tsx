import { useFrame, useThree } from 'react-three-fiber'
import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'

const PI_2 = Math.PI / 2
const Camera = () => {
    const { camera, gl } = useThree()
    const previousEvent = useRef<MouseEvent>()
    const dragging = useRef(false)
    const yawObject = useRef(new THREE.Object3D())
    const pitchObject = useRef(new THREE.Object3D())

    useEffect(() => {
        camera.rotation.set(0, 0, 0)
    }, [camera])

    useEffect(() => {
        yawObject.current.add(pitchObject.current)
        pitchObject.current.rotation.set(0.4, 0, 0)
        function mouseDown(event: MouseEvent) {
            dragging.current = true
            previousEvent.current = event
        }

        function mouseMove(event: MouseEvent) {
            if (dragging.current && previousEvent.current) {
                const movementX = event.screenX - previousEvent.current.screenX
                const movementY = event.screenY - previousEvent.current.screenY
                const direction = -1
                yawObject.current.rotation.y += movementX * 0.002 * direction
                pitchObject.current.rotation.x += movementY * 0.002 * direction
                pitchObject.current.rotation.x = Math.max(
                    -PI_2,
                    Math.min(PI_2, pitchObject.current.rotation.x)
                )
            }

            previousEvent.current = event
        }
        function mouseUp() {
            previousEvent.current = undefined
            dragging.current = false
        }
        gl.domElement.addEventListener('mousedown', mouseDown, false)
        gl.domElement.addEventListener('mousemove', mouseMove, false)
        gl.domElement.addEventListener('mouseup', mouseUp, false)

        return () => {
            gl.domElement.removeEventListener('mousedown', mouseDown)
            gl.domElement.removeEventListener('mousemove', mouseMove)
            gl.domElement.removeEventListener('mouseup', mouseUp)
        }
    }, [gl.domElement])

    useFrame(() => {
        camera.rotation.x = pitchObject.current.rotation.x
        camera.rotation.y = yawObject.current.rotation.y
    })

    return <group />
}

export default Camera
