import { testRequirements, modes, idbFile } from "./library.mjs";

if (! testRequirements) throw "This browser doesn't fit requirementes"

let unfile = await idbFile.open("ficheroPruebas1", modes.READWRITE)

unfile.write(Date.now())

unfile = await idbFile.open("ficheroPruebas1", modes.APPEND)

unfile.append(Date.now())

unfile = await idbFile.open("ficheroPruebas1", modes.READONLY)

console.log( await unfile.read() )

unfile = await idbFile.open("ficheroPruebas2", modes.READWRITE)

unfile.write("Jajaja")

console.log( await unfile.read() )

unfile = await idbFile.open("ficheroPruebasStream", modes.READWRITE)

await fetch("https://medioguevo.up.railway.app/audio/1.%20INICIO-ENTRADA%20DE%20PUBLICO.mp3")
    .then( response =>  unfile.writeStream(response.body) )

let blob = new Blob(await unfile.read())
const url = URL.createObjectURL(blob)

document.querySelector("audio").src = url

