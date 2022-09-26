<script lang=ts>

    import type { Play, Scene } from "../../types"
    import TrackComponent from "./TrackComponent.svelte"

    export let scene: Scene
    export let play_id: string

    const encoder = new TextEncoder

    let id = scene.title.toLowerCase().replace(/[^a-z]/g, "-")

</script>

<div class="accordion-item">
  <h2 class="accordion-header" id="flush-heading-{id}">
    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse-{id}" aria-expanded="false" aria-controls="flush-collapse-{id}">
        {scene.title}
    </button>
  </h2>
  <div id="flush-collapse-{id}" class="accordion-collapse collapse" aria-labelledby="flush-heading-{id}" data-bs-parent="#{play_id}">
    <div class="accordion-body">
      {#each scene.tracks as track }
      <TrackComponent {track}/>
      {/each}
    </div>
  </div>
</div>
