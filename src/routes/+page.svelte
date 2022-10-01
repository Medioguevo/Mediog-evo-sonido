<script lang="ts">

    import type { Profile } from "$lib/types";
    import DashboardComponent from "./DashboardComponent.svelte";

    export let data: Profile

</script>

<DashboardComponent {data}/>