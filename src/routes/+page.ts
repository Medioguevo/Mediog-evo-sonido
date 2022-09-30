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
                            src: "/audio/1. INICIO-ENTRADA DE PUBLICO.mp3",
                        },
                        {
                            title: "Acto 1º",
                            src: "/audio/2. ACTO 1.mp3",
                        },
                        {
                            title: "Telefonillo avogado",
                            src: "/audio/3.TELEFONILLO AVOGADO.mp3",
                        },
                        {
                            title: "Entrada avoas",
                            src: "/audio/4.ENTRADA AVOAS.mp3",
                        },
                        {
                            title: "Telefonillo Felipe",
                            src: "/audio/5. Telefonillo FELIPE.mp3",
                        },
                        {
                            title: "Telefonillo Herminia",
                            src: "/audio/6. Telefonillo HERMINIA.mp3",
                        },
                        {
                            title: "Severino 1",
                            src: "/audio/7. SEVERINO 1.mp3",
                        },
                    ]
                },
                {
                    title: "Acto 2º",
                    tracks: [
                        {
                            title: "Acto 2º",
                            src: "/audio/8. ACTO 2.mp3",
                        },
                        {
                            title: "El hombre y la tierra",
                            src: "/audio/9. EL HOMBRE Y LA TIERRA.mp3"
                        },
                    ]
                },
                {
                    title: "Acto 3º",
                    tracks: [
                        {
                            title: "Acto 3º",
                            src: "/audio/10. ACTO 3.mp3",
                        },
                        {
                            title: "Severino 2",
                            src: "/audio/11. SEVERINO 2.mp3",
                        },
                        {
                            title: "Instrumental rumba final",
                            src: "/audio/12. INSTRUMENTAL RUMBA FINAL.mp3",
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
                            src: "/audio/1. INICIO-ENTRADA DE PUBLICO.mp3",
                        },
                        {
                            title: "Acto 1º",
                            src: "/audio/2. ACTO 1.mp3",
                        },
                        {
                            title: "Telefonillo avogado",
                            src: "/audio/3.TELEFONILLO AVOGADO.mp3",
                        },
                        {
                            title: "Entrada avoas",
                            src: "/audio/4.ENTRADA AVOAS.mp3",
                        },
                        {
                            title: "Telefonillo Felipe",
                            src: "/audio/5. Telefonillo FELIPE.mp3",
                        },
                        {
                            title: "Telefonillo Herminia",
                            src: "/audio/6. Telefonillo HERMINIA.mp3",
                        },
                        {
                            title: "Severino 1",
                            src: "/audio/7. SEVERINO 1.mp3",
                        },
                    ]
                },
                {
                    title: "Acto 2º",
                    tracks: [
                        {
                            title: "Acto 2º",
                            src: "/audio/8. ACTO 2.mp3",
                        },
                        {
                            title: "El hombre y la tierra",
                            src: "/audio/9. EL HOMBRE Y LA TIERRA.mp3"
                        },
                    ]
                },
                {
                    title: "Acto 3º",
                    tracks: [
                        {
                            title: "Acto 3º",
                            src: "/audio/10. ACTO 3.mp3",
                        },
                        {
                            title: "Severino 2",
                            src: "/audio/11. SEVERINO 2.mp3",
                        },
                        {
                            title: "Instrumental rumba final",
                            src: "/audio/12. INSTRUMENTAL RUMBA FINAL.mp3",
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