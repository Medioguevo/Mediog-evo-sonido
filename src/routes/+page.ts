import type { PageLoad } from "./$types"
import type { Profile } from "$lib/types"

export const profile: Profile = {
    name: "Mediogüevo",
    plays_collection: [
        {
            title: "Perdimo-lo xuizo?",
            scenes: [
                {
                    title: "Escena única",
                    tracks: [
                        {
                            title: "Intro",
                            src: "/audio/intro.mp3"
                        },
                        {
                            title: "Ruido de pasillos",
                            src: "/audio/pasillo.wav"
                        },
                        {
                            title: "Pasos",
                            src: "/audio/pasos.wav"
                        },
                        {
                            title: "Teléfono",
                            src: "/audio/telefono.wav"
                        },
                        {
                            title: "Tango",
                            src: "/audio/tango.wav"
                        }
                    ]
                }
            ]
        }
    ]
}

export const load: PageLoad = function () {
    return profile
}

export function traskList () {
    const tracks: string[] = []
    profile.plays_collection.forEach(
        play =>{
            play.scenes.forEach(
                scene => scene.tracks.forEach(
                    track => tracks.push(track.src)
                )
            )
        }
    )
    return tracks
}