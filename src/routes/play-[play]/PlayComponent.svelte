<script lang="ts">

    import type { Play } from "$lib/types"
    import SceneComponent from "./SceneComponent.svelte"
    import { idStringFrom } from "$lib/aux"
    import VolumeControl from "./VolumeControl.svelte";

    export let play: Play
    let playId = idStringFrom(play.title)

</script>

<h1>
    <a href="/" class="text-white">
        <img class="rewind" src="/images/eject.svg" alt="Volver al panel">
        {play.title}
    </a>
</h1>

<div class="accordion" id={playId}>
    {#each play.scenes as scene}
    <SceneComponent {scene} {playId}/>
    {/each}
</div>

<VolumeControl/>

<style>
    img.rewind {
        width: 2rem;
        margin: 1rem;
    }
    h1 {
        display: flex;
        flex-direction: row;
        align-items: center;
    }
    a {
        text-decoration: none;
    }
</style>