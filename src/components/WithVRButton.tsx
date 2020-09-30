import React, { useCallback, useEffect, useState } from 'react'
import { VRButton } from 'three/examples/jsm/webxr/VRButton'
import { useThree } from 'react-three-fiber'
import useStore from '../store'
import { UIButton } from './UI'

interface XRSystem {
    isSessionSupported(sessionType: string): Promise<null>
}

declare global {
    interface Navigator {
        xr: XRSystem
    }
}

const HAS_VR = 'Enter VR'
const NO_VR = 'VR Unavailable'

/**
 * A wrapper for the VRButton import.
 * Allows disabling postprocessing effects when VR is enabled
 * Must called within the canvas tag because of useThree
 */
const WithVRButton = () => {
    const [vrButton, setButton] = useState()
    const [buttonText, setButtonText] = useState('')

    const setEnableEffects = useStore((state) => state.actions.disableEffects)
    const setVRButton = useStore((state) => state.actions.setVRButton)

    const { gl } = useThree()

    const onClick = useCallback(() => {
        vrButton.click()
        setEnableEffects()
    }, [vrButton, setEnableEffects])

    useEffect(() => {
        if (!navigator.xr) return
        const button = VRButton.createButton(gl)
        setButton(button)
        navigator.xr.isSessionSupported('immersive-vr').then((supported) => {
            supported ? setButtonText(HAS_VR) : setButtonText(NO_VR)
        })
    }, [gl])

    useEffect(() => {
        buttonText &&
            setVRButton(
                <UIButton
                    bottom={'20px'}
                    right={'20px'}
                    width={'120px'}
                    border
                    onClick={onClick}
                    disabled={buttonText === NO_VR}
                >
                    {buttonText}
                </UIButton>
            )
    }, [buttonText, onClick, setVRButton])
    return null
}

export default WithVRButton
