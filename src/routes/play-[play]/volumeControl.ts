import { writable, type Writable } from 'svelte/store'
import { tweened } from 'svelte/motion'
import type {Volume} from '$lib/types'

import {FADE_TIME, MIDDLE_VOLUME} from '$lib/defines'

export let volumeControl = writable ({
    currentVolume: tweened(1, {duration: FADE_TIME}),
    middleVolume: MIDDLE_VOLUME,
})