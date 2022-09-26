<script lang="ts">

    import type { Play } from "src/types";
    import PlayComponent from "$lib/components/PlayComponent.svelte";

    const play: Play = {
        title: "Nome da obra",
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

</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<h2>Tests</h2>

<h3>Play</h3>
<PlayComponent {play}/>