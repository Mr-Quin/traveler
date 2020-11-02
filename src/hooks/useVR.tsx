import { useCallback, useEffect, useState } from 'react'
import { VRButton } from 'three/examples/jsm/webxr/VRButton'
import useStore from '../stores/store'

interface XRSystem {
    isSessionSupported(sessionType: string): Promise<null>
}

declare global {
    interface Navigator {
        xr: XRSystem
    }
}

type T = () => [() => void, string, boolean]

const HAS_VR = 'Enter VR'
const NO_VR = 'VR Unavailable'

/**
 * A wrapper around the Threejs VRButton import.
 */
const useVR: T = () => {
    const [threeButton, setThreeButton] = useState<HTMLButtonElement>()
    const [buttonText, setButtonText] = useState('')
    const [disabled, setDisabled] = useState(false)

    const gl = useStore((state) => state.glRenderer)
    const setEnableEffects = useStore((state) => state.actions.setEnableEffects)

    const onClickAction = useCallback(() => {
        threeButton!.click()
        setEnableEffects(false)
    }, [threeButton, setEnableEffects])

    useEffect(() => {
        if (!navigator.xr || !gl) return
        const button = VRButton.createButton(gl)
        setThreeButton(button as HTMLButtonElement)
        navigator.xr.isSessionSupported('immersive-vr').then((supported) => {
            supported ? setButtonText(HAS_VR) : setButtonText(NO_VR)
        })
    }, [gl])

    useEffect(() => {
        setDisabled(buttonText === NO_VR)
    }, [buttonText])

    return [onClickAction, buttonText, disabled]
}

export default useVR
