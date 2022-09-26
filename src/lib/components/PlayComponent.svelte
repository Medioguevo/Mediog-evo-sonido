<script lang="ts">

    import type { Play } from "src/types"
    import SceneComponent from "./SceneComponent.svelte"

    export let play: Play
    let id = play.title.toLowerCase().replace(/[^a-z]/g,"-")

</script>

<h1>{play.title}</h1>

<div class="accordion accordion-flush" {id}>
    {#each play.scenes as scene}
    <SceneComponent {scene} play_id={id}/>
    {/each}
</div>