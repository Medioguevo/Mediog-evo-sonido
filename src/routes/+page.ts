import type { PageLoad } from "./$types"
import type { Profile } from "$lib/types"

export const profile: Profile = {
    name: "Mediogüevo",
    plays_collection: [
        {
            title: "Patio sen luces",
            scenes: [
                {
                    title: "Acto 1º",
                    tracks: [
                        {
                            title: "Entrada público",
                            src: "https://medioguevosounds.s3.filebase.com/1. INICIO-ENTRADA DE PUBLICO.mp3",
                        },
                        {
                            title: "Acto 1º",
                            src: "https://medioguevosounds.s3.filebase.com/2. ACTO 1.mp3",
                        },
                        {
                            title: "Telefonillo avogado",
                            src: "https://medioguevosounds.s3.filebase.com/3.TELEFONILLO AVOGADO.mp3",
                        },
                        {
                            title: "Entrada avoas",
                            src: "https://medioguevosounds.s3.filebase.com/4.ENTRADA AVOAS.mp3",
                        },
                        {
                            title: "Telefonillo Felipe",
                            src: "https://medioguevosounds.s3.filebase.com/5. Telefonillo FELIPE.mp3",
                        },
                        {
                            title: "Telefonillo Herminia",
                            src: "https://medioguevosounds.s3.filebase.com/6. Telefonillo HERMINIA.mp3",
                        },
                        {
                            title: "Severino 1",
                            src: "https://medioguevosounds.s3.filebase.com/7. SEVERINO 1.mp3",
                        },
                    ]
                },
                {
                    title: "Acto 2º",
                    tracks: [
                        {
                            title: "Acto 2º",
                            src: "https://medioguevosounds.s3.filebase.com/8. ACTO 2.mp3",
                        },
                        {
                            title: "El hombre y la tierra",
                            src: "https://medioguevosounds.s3.filebase.com/9. EL HOMBRE Y LA TIERRA.mp3"
                        },
                    ]
                },
                {
                    title: "Acto 3º",
                    tracks: [
                        {
                            title: "Acto 3º",
                            src: "https://medioguevosounds.s3.filebase.com/10. ACTO 3.mp3",
                        },
                        {
                            title: "Severino 2",
                            src: "https://medioguevosounds.s3.filebase.com/11. SEVERINO 2.mp3",
                        },
                        {
                            title: "Instrumental rumba final",
                            src: "https://medioguevosounds.s3.filebase.com/12. INSTRUMENTAL RUMBA FINAL.mp3",
                        },
                    ]
                },
            ]
        },
        {
            title: "La peligros",
            scenes: [
                {
                    title: "Acto 1º",
                    tracks: [
                        {
                            title: "Entrada público",
                            src: "https://medioguevosounds.s3.filebase.com/1. INICIO-ENTRADA DE PUBLICO.mp3",
                        },
                        {
                            title: "Acto 1º",
                            src: "https://medioguevosounds.s3.filebase.com/2. ACTO 1.mp3",
                        },
                        {
                            title: "Telefonillo avogado",
                            src: "https://medioguevosounds.s3.filebase.com/3.TELEFONILLO AVOGADO.mp3",
                        },
                        {
                            title: "Entrada avoas",
                            src: "https://medioguevosounds.s3.filebase.com/4.ENTRADA AVOAS.mp3",
                        },
                        {
                            title: "Telefonillo Felipe",
                            src: "https://medioguevosounds.s3.filebase.com/5. Telefonillo FELIPE.mp3",
                        },
                        {
                            title: "Telefonillo Herminia",
                            src: "https://medioguevosounds.s3.filebase.com/6. Telefonillo HERMINIA.mp3",
                        },
                        {
                            title: "Severino 1",
                            src: "https://medioguevosounds.s3.filebase.com/7. SEVERINO 1.mp3",
                        },
                    ]
                },
                {
                    title: "Acto 2º",
                    tracks: [
                        {
                            title: "Acto 2º",
                            src: "https://medioguevosounds.s3.filebase.com/8. ACTO 2.mp3",
                        },
                        {
                            title: "El hombre y la tierra",
                            src: "https://medioguevosounds.s3.filebase.com/9. EL HOMBRE Y LA TIERRA.mp3"
                        },
                    ]
                },
                {
                    title: "Acto 3º",
                    tracks: [
                        {
                            title: "Acto 3º",
                            src: "https://medioguevosounds.s3.filebase.com/10. ACTO 3.mp3",
                        },
                        {
                            title: "Severino 2",
                            src: "https://medioguevosounds.s3.filebase.com/11. SEVERINO 2.mp3",
                        },
                        {
                            title: "Instrumental rumba final",
                            src: "https://medioguevosounds.s3.filebase.com/12. INSTRUMENTAL RUMBA FINAL.mp3",
                        },
                    ]
                },
            ]
        },
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