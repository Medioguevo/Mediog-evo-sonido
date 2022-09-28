<script lang="ts">

    import type { PageData } from "./$types";
    import DashboardComponent from "$lib/components/DashboardComponent.svelte";

    export let data: PageData

</script>

<DashboardComponent {data}/>