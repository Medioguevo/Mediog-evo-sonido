<script lang="ts">

    import type { PageData } from "./$types"
    import PlayComponent from "./PlayComponent.svelte"

    export let data: PageData

</script>

<PlayComponent play={data}/>