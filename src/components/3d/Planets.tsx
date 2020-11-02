import React from 'react'
import * as THREE from 'three'
import { useLoader } from 'react-three-fiber'
import CelestialBody from './CelestialBody'

import { lensFlare as corona } from '../../assets'

import useBodyStore from '../../stores/BodyStore'

const bodies = useBodyStore.getState().bodies

const Planets = () => {
    const sunCorona = useLoader(THREE.TextureLoader, corona)

    return (
        <>
            {bodies.map((body) => (
                <CelestialBody {...body} key={body.name}>
                    {/*{body.isStar ? (*/}
                    {/*    <sprite scale={[0.5, 0.5, 0.5]}>*/}
                    {/*        <spriteMaterial*/}
                    {/*            attach={'material'}*/}
                    {/*            map={sunCorona}*/}
                    {/*            alphaMap={sunCorona}*/}
                    {/*            sizeAttenuation={false}*/}
                    {/*        />*/}
                    {/*    </sprite>*/}
                    {/*) : null}*/}
                </CelestialBody>
            ))}
        </>
    )
}

export default Planets
