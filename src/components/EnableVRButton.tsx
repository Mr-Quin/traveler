import React, { useCallback, useEffect, useState } from 'react'
import styled from 'styled-components'
import { VRButton } from 'three/examples/jsm/webxr/VRButton'
import { useThree } from 'react-three-fiber'
import useStore from '../store'

const StyledButton = styled.button`
    position: absolute;
    color: #fff;
    bottom: 20px;
    left: calc(50% - 50px);
    width: 120px;
    padding: 12px 6px;
    border: 1px solid #fff;
    border-radius: 4px;
    background: rgba(0, 0, 0, 0.1);
    text-align: center;
    opacity: 0.5;
    outline: none;
    z-index: 9999;
    transition: opacity 0.3s;
    &:hover {
        ${(props) => (props.disabled ? null : `opacity:1`)}
    }
`

const HAS_VR = 'Enter VR'
const NO_VR = 'VR Unavailable'
/**
 * A wrapper for the VRButton import.
 * Allows disabling postprocessing effects when VR is enabled
 */
const EnableVRButton = ({ ...props }) => {
    const [vrButton, setButton] = useState()
    const [buttonText, setButtonText] = useState('')

    const setEnableEffects = useStore((state) => state.setEnableEffects)
    const setVRButton = useStore((state) => state.setVRButton)

    const { gl } = useThree()

    const onClick = useCallback(() => {
        vrButton.click()
        setEnableEffects(false)
    }, [vrButton, setEnableEffects])

    useEffect(() => {
        const button = VRButton.createButton(gl)
        setButton(button)
        navigator.xr.isSessionSupported('immersive-vr').then((supported) => {
            supported ? setButtonText(HAS_VR) : setButtonText(NO_VR)
        })
    }, [gl])

    useEffect(() => {
        buttonText &&
            setVRButton(
                <StyledButton onClick={onClick} disabled={buttonText === NO_VR}>
                    {buttonText}
                </StyledButton>
            )
    }, [buttonText, onClick, setVRButton])
    return null
}

export default EnableVRButton
