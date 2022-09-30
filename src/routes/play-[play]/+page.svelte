<script lang="ts">

    import type { PageData } from "./$types"
    import PlayComponent from "./PlayComponent.svelte"

    export let data: PageData

</script>

<main class="container-fluid bg-dark text-white">
    <PlayComponent play={data}/>
</main>
