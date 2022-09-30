<script lang="ts">

    import type { Profile } from "$lib/types"

    export let data: Profile

</script>

<h1>{data.name}</h1>

<div class="list-group">
    {#each data.plays_collection as play, key}
    <a href="/play-{key}/" class="list-group-item list-group-item-action" aria-current="true">
        {play.title}
    </a>
    {/each}
</div>