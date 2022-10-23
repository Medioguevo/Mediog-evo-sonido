<script lang="ts">

    import { volumeControl } from "./volumeControl";

    const currentVolume = $volumeControl.currentVolume

</script>

<div>
    <button on:click={()=>{$currentVolume=0}}>Mute</button>
    <button on:click={()=>{$currentVolume=$volumeControl.middleVolume}}>Low</button>
    <button on:click={()=>{$currentVolume=1}}>Normal</button>
    <p>{Math.round($currentVolume*100)}%</p>
</div>

<style>
    div {
        display: flex;
        align-items: baseline;
    }
    div > * {
        flex-grow: 1;
    }
    div > p {
        text-align: center;
    }
</style>