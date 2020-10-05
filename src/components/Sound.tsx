import React, { useEffect } from 'react'
import { useAudioStore } from '../store'

const ambientAudio = require('../assets/ambient.ogg') // using import causes error in ts
const ambient = new Audio(ambientAudio)

const Sound = () => {
    const shouldPlay = useAudioStore((state) => state.audio)

    useEffect(() => {
        ambient.loop = true
    }, [])

    useEffect(() => {
        shouldPlay ? ambient.play() : ambient.pause()
    }, [shouldPlay])

    return null
}

export default Sound
