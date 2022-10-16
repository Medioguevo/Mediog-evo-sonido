import { testRequirements, modes, idbFile } from "./library.mjs";

if (! testRequirements) throw "This browser doesn't fit requirementes"

let unfile = await idbFile.open("ficheroPruebas", modes.READWRITE)

unfile.write(Date.now())

unfile = await idbFile.open("ficheroPruebas", modes.APPEND)

unfile.append(Date.now())

unfile = await idbFile.open("ficheroPruebas", modes.READONLY)

console.log( await unfile.read() )

unfile = await idbFile.open("ficheroPruebas", modes.READWRITE)

unfile.write("Jajaja")

console.log( await unfile.read() )

unfile = await idbFile.open("ficheroPruebasStream", modes.READWRITE)

fetch("https://medioguevo.up.railway.app/audio/1.%20INICIO-ENTRADA%20DE%20PUBLICO.mp3")
    .then( response =>  unfile.writeStream(response.body) )