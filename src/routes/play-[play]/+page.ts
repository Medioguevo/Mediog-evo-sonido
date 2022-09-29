import type { PageLoad } from "./$types"
import { profile } from "../+page"

export const load: PageLoad =  function ({params}) {
    return profile.plays_collection[parseInt(params.play)]
}