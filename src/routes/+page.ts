import type { PageLoad } from "./$types"
import type { Profile } from "$lib/types"

export const profile: Profile = {
    name: "Mediogüevo",
    plays_collection: [
        {
            title: "La Peligros",
            scenes: [
                {
                    title: "Primeira escea",
                    tracks: [
                        {
                            title: "Track number one",
                            src: "./number_one.mp3",
                        },
                        {
                            title: "Track number two",
                            src: "./number_two.mp3"
                        },
                    ]
                },
                {
                    title: "Segunda escea",
                    tracks: [
                        {
                            title: "Track number one",
                            src: "./number_one.mp3",
                        },
                        {
                            title: "Track number two",
                            src: "./number_two.mp3"
                        },
                    ]
                }
            ]
        },
        {
            title: "A Comunidade",
            scenes: [
                {
                    title: "Primeira escea",
                    tracks: [
                        {
                            title: "Track number one",
                            src: "./number_one.mp3",
                        },
                        {
                            title: "Track number two",
                            src: "./number_two.mp3"
                        },
                    ]
                },
                {
                    title: "Segunda escea",
                    tracks: [
                        {
                            title: "Track number one",
                            src: "./number_one.mp3",
                        },
                        {
                            title: "Track number two",
                            src: "./number_two.mp3"
                        },
                    ]
                }
            ]
        }
    ]
}

export function load ( fn: PageLoad ) {

    return profile

}