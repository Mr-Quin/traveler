import React, { useEffect, useMemo, useRef } from 'react'
import * as THREE from 'three'
import { useLoader } from 'react-three-fiber'
import { lensFlare, lensFlareDisk, lensFlareBlur, lensFlareRing } from '../../assets'
import { Lensflare, LensflareElement } from 'three/examples/jsm/objects/Lensflare'

const lensflare = new Lensflare()

const randomRange = (lower, upper) => {
    return lower + Math.random() * (upper - lower)
}

const FlareLight = () => {
    const flareTex = useLoader(THREE.TextureLoader, lensFlare)
    const flareDiskTex = useLoader(THREE.TextureLoader, lensFlareDisk)
    const flareBlurTex = useLoader(THREE.TextureLoader, lensFlareBlur)
    const flareRingTex = useLoader(THREE.TextureLoader, lensFlareRing)

    const light = useRef<THREE.PointLight>()

    // useEffect(() => {
    //     lensflare.addElement(new LensflareElement(flareTex, 200, 0))
    //
    //     for (let i = 0; i < 10; i++) {
    //         const offset = randomRange(0.05, 0.4)
    //         const size = randomRange(16, 48)
    //         const color = new THREE.Color().setHSL(randomRange(0, 1), randomRange(0, 0.1), 0.5)
    //         lensflare.addElement(new LensflareElement(flareBlurTex, size, offset, color))
    //     }
    //     for (let i = 0; i < 5; i++) {
    //         const offset = randomRange(-0.15, -0.05)
    //         const size = randomRange(16, 48)
    //         const color = new THREE.Color().setHSL(randomRange(0, 1), randomRange(0, 0.1), 0.5)
    //         lensflare.addElement(new LensflareElement(flareBlurTex, size, offset, color))
    //     }
    //
    //     light.current!.add(lensflare)
    //
    //     return () => void light.current!.remove(lensflare)
    // }, [])

    return <pointLight ref={light} color={'#ffffff'} intensity={1} />
}

export default FlareLight
