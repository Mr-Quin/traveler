import React, { useRef } from 'react'
import { Stars } from 'drei'

import useTurntable from '../../hooks/useTurntable'

const StarrySky = ({ factor = 4, ...props }) => {
    const star = useRef()

    useTurntable(star, 'y', -0.00005)

    return (
        <>
            <Stars saturation={0.8} depth={10} factor={factor} fade ref={star} />
        </>
    )
}

export default StarrySky
