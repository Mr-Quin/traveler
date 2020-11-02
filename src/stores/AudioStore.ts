import create from 'zustand'

type AudioState = {
    audio: boolean
    toggleAudio: () => void
}

const useAudioStore = create<AudioState>((set, get) => ({
    audio: false,
    toggleAudio: () => void set({ audio: !get().audio }),
}))

export default useAudioStore
