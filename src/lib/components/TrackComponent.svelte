<script lang="ts">

    import type { Track } from "../../types";

    export let track: Track

</script>

<p>{track.title}</p>
<audio controls preload="auto" src={track.src}></audio>
