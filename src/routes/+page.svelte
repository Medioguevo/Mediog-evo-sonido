<script lang="ts">

    import type { PageData } from "./$types";
    import DashboardComponent from "./DashboardComponent.svelte";

    export let data: PageData

</script>

<DashboardComponent {data}/>