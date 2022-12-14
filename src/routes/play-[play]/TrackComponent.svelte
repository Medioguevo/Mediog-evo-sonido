<script lang="ts">

    import { onMount } from "svelte"
    import { tweened } from "svelte/motion"
    import type { Track } from "$lib/types"

    import { volumeControl } from "./volumeControl";

    export let track: Track

    let playing = false
    let player: HTMLAudioElement
    let trackDuration = 0
    let currentTrackPosition = tweened(0)
    let background = "none"
    let buttonIcon: string
    let track_name_color: string
    const currentVolume = $volumeControl.currentVolume

    onMount(()=>{
        player.addEventListener("durationchange", () => {
            trackDuration = player.duration
        })
        player.addEventListener("timeupdate", ()=>{
            currentTrackPosition.set(player.currentTime)
        })
    })


    $: if (player) player.volume = $currentVolume
    
    $: {

        try {
            background = playing ? "yellow" : "none"
            buttonIcon = playing ? "/images/pause.svg" : "/images/play.svg"
            track_name_color = playing ? "text-dark" : "text-white"
            if (playing) player?.play()
            else player?.pause()
        } catch (error) {
            alert(error)
        }
    }

    function playHandler (): void {
        playing = !playing
    }

    function resetHandler (): void {
        playing = false
        player.currentTime = 0
    }

    function endHandler (): void {
        resetHandler()
    }

</script>

<div class="bg-dark text-white">
    <audio bind:this={player} preload="auto" src={track.src} on:ended={endHandler}></audio>
    <button class="play" on:click={playHandler} style="--playing-background: {background}">
        <img src={buttonIcon} alt="Play button">
        <p class="{track_name_color}">{track.title}</p>
    </button>
    {#if player?.currentTime > 0}
    <button on:click={resetHandler}>
        <img src="/images/rewind.svg" alt="Stop button">
    </button>
    {/if}
</div>
{#if ($currentTrackPosition > 0 || playing) }
<progress max={trackDuration} value={$currentTrackPosition}/>
{/if}

<style>
    div {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
    button {
        display: flex;
        flex-direction: row;
        align-items: center;
        border-radius: 2rem;
        border: none;
        margin: 0px;
        padding: 1rem;
        background: none;
    }
    button.play {
        background: var(--playing-background);
    }
    button > * {
        margin: 0px
    }
    img {
        width: 2rem;
        margin-right: 1rem;
    }
    progress {
        width: 100%;
    }
</style>