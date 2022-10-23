import type { Tweened } from "svelte/motion"

export type Track = {
    title: string
    src: string
}

export type Scene = {
    title: string
    tracks: Track[]
}

export type Play = {
    title: string
    scenes: Scene[]
}

export type Profile = {
    name: string
    plays_collection: Play[]
}

export type Volume = {
    currentVolume: Tweened<number>
    middleVolume: number
}