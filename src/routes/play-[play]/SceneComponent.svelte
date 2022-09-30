<script lang=ts>

    import type { Scene } from "$lib/types"
    import TrackComponent from "./TrackComponent.svelte"
    import { idStringFrom } from "$lib/aux"

    export let scene: Scene
    export let playId: string

    let sceneId = idStringFrom(scene.title)

</script>

<div class="accordion-item">
  <h2 class="accordion-header" id="head-{sceneId}">
    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#{sceneId}" aria-expanded="false" aria-controls={sceneId}>
        {scene.title}
    </button>
  </h2>
  <div id={sceneId} class="accordion-collapse collapse" aria-labelledby="head-{sceneId}" data-bs-parent="#{playId}">
    <div class="accordion-body">
      {#each scene.tracks as track }
      <TrackComponent {track}/>
      {/each}
    </div>
  </div>
</div>
