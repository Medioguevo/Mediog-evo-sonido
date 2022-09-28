import type { PageLoad } from "./$types"
import { profile } from "../+page"

export const load: PageLoad =  ({params}) => {
    return profile.plays_collection[parseInt(params.play)]
}

/*
export function load1 (event: PageLoad) {
    return profile.plays_collection[parseInt(event .play)]
}
*/