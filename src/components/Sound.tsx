import { useEffect } from 'react'
import useAudioStore from '../stores/AudioStore'

import { ambientSound } from '../assets'

const ambient = new Audio(ambientSound)

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
