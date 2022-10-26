import { writable, type Writable } from 'svelte/store'
import { tweened } from 'svelte/motion'
import type {Volume} from '$lib/types'
import app_config from '../../app_config'

export let volumeControl: Writable<Volume> = writable ({
    currentVolume: tweened(1, {duration: app_config.fadeTime}),
    middleVolume: app_config.middleVolume,
})