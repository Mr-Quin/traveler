import React, { useRef } from 'react'
import { Stars } from 'drei'

import useTurntable from '../../hooks/useTurntable'

type Props = {
    readonly factor?: number
}

/**
 * A wrapper around the drei Stars component to add the turntable effect
 */
const StarrySky = (props: Props) => {
    const { factor = 4 } = props

    const star = useRef()

    useTurntable(star, { rate: -0.00005 })

    return (
        <>
            <Stars saturation={0.8} radius={400} depth={100} factor={factor} fade ref={star} />
        </>
    )
}

export default StarrySky
