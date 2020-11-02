import { useLoader, useThree } from 'react-three-fiber'
import * as THREE from 'three'
import sky from '../../assets/textures/8k_stars_milky_way.jpg'
import { useEffect } from 'react'

const Environment = () => {
    const { scene, gl } = useThree()
    const texture = useLoader(THREE.TextureLoader, sky)

    useEffect(() => {
        const rt = new THREE.WebGLCubeRenderTarget(texture.image.height)
        rt.fromEquirectangularTexture(gl, texture)
        scene.background = rt
    })

    return null
}

export default Environment
