<script lang="ts">

    import type { Profile } from "$lib/types"

    export let data: Profile

</script>

<div class="list-group">
    {#each data.plays_collection as play, key}
    <a href="/play-{key}/" class="list-group-item list-group-item-action text-white bg-dark" aria-current="true">
        <img class="icon" src="/images/icon.svg" alt="Icon">
        {play.title}
    </a>
    {/each}
</div>

<style>
    img.icon {
        width: 2rem;
    }
    a {
        display: flex;
        flex-direction: row;
        align-items: center;
    }
</style>