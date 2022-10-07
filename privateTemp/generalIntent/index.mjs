import { testRequirements, DB } from "./library.mjs";
import migrations from "./migrations.mjs"

if (! testRequirements) throw "This browser doesn't fit requirementes"

const db = new DB("testDB", migrations)

console.log(db)