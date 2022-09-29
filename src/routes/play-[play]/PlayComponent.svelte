<script lang="ts">

    import type { Play } from "$lib/types"
    import SceneComponent from "./SceneComponent.svelte"
    import { idStringFrom } from "$lib/aux"

    export let play: Play
    let playId = idStringFrom(play.title)

</script>

<h1>
    <a href="/">&#60;</a> {play.title}
</h1>

<div class="accordion" id={playId}>
    {#each play.scenes as scene}
    <SceneComponent {scene} {playId}/>
    {/each}
</div>