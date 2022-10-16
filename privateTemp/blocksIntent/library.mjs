import migrations from "./migrations.mjs";

const dbName = "idbFiles"

const CHUNK_SIZE = 512

export const modes = {
    READONLY: 0,
    READWRITE: 1,
    APPEND: 2,
    WRITABLESTREAM: 3,
    READABLESTREAM: 4,
    APPENDSTREAM: 5,
}

export function testRequirements () {
    /**
     * Test for indexedDB support
     */
    if (!('indexedDB' in window)) {
        console.error("This browser doesn't support IndexedDB");
        return false;
    }

    /**
     * If we are here, we fits all requiremets
     */
    return true
}

export class IdbFilesDataBase {

    static async open ( dataBaseName = dbName ) {
        const dataBaseDescriptorPromise = IdbFilesDataBase._findDataBase(dataBaseName)
        return await IdbFilesDataBase.openDataBase( await dataBaseDescriptorPromise, migrations )
    }

    static async _findDataBase (dataBaseName) {
        const dataBaseDescriptorsPromise = window.indexedDB.databases()
        return (await dataBaseDescriptorsPromise)
            .find(
                descriptor => descriptor.name === dataBaseName
            ) || {name: dataBaseName, version: 1}
    }

    static openDataBase ({name, version}, migrations, migratiosParameters = {}) {

        return new Promise ((resolve, reject) => {

            const openDBRequest = window.indexedDB.open(name, version)

            openDBRequest.addEventListener("error", () => {
                reject(openDBRequest.errorCode)
            })
    
            openDBRequest.addEventListener("success", () => {
                /**
                 * openDBRequest.result is the DB
                 */
                resolve(openDBRequest.result)
            })
    
            openDBRequest.addEventListener("upgradeneeded", () => {
                /**
                 * openDBRequest.result is the DB
                 */
                migrations.forEach( migration => migration(openDBRequest.result, migratiosParameters))
            })
            
        })

    }

}

export class idbFile {

    constructor ( fileName, mode, dataBase ) {
        this.fileName = fileName
        this.mode = mode
        this.dataBase = dataBase
    }

    append ( data ) {
        if ( this.mode !=  modes.APPEND ) throw "This file is not in APPEND mode"
        this.dataBase.transaction([this.fileName], "readwrite")
            .objectStore(this.fileName).add(data)
    }

    read () {
        return new Promise(
            (resolve, reject) => {
                const data = []
                if ( this.mode === modes.APPEND ) throw "This file is in APPEND mode"
                this.dataBase.transaction([this.fileName], "readwrite")
                    .objectStore(this.fileName)
                    .openCursor()
                    .onsuccess = (event) => {
                        const row = event.target.result;
                        if (row) {
                            data.push(row.value)
                            row.continue();
                        } else {
                          resolve(data.join("\n"))
                        }
                    }
            }
        )
    }

    write (data) {
        if ( this.mode != modes.READWRITE ) throw "This file isn't in READWRITE mode"
        let writed = false
        this.dataBase.transaction([this.fileName], "readwrite")
            .objectStore(this.fileName)
            .openCursor()
            .onsuccess = (event) => {
                const row = event.target.result
                if ( row ) {

                    if (! writed) {
                        row.update(data)
                        writed = true
                    } else {
                        row.delete()
                    }

                  row.continue();

                }
            }
    }

    async writeStream (readableStream) {
        if ( this.mode != modes.READWRITE ) throw "This file isn't in READWRITE mode"
        const reader = readableStream.getReader()
        this.dataBase.transaction([this.fileName], "readwrite")
            .objectStore(this.fileName)
            .openCursor()
            .onsuccess = (event) => {
                const row = event.target.result
                if ( row ) {
                    row.delete()
                    row.continue();
                }
            }
        let moreData = true
        while ( moreData ) {
            const { done, value } = await reader.read()
            if ( done ) {
                moreData = false
                continue
            }
            this.dataBase.transaction([this.fileName], "readwrite")
                .objectStore(this.fileName)
                .add(value)
        }
    }

    static _existsFileObjectStore ( fileName, dataBase ) {
        return dataBase.objectStoreNames.contains(fileName) ? fileName : false
    }

    static async _createFileObjectStorage (fileName, dataBase) {
        //TODO
        dataBase.addEventListener("close", async ()=>{
            console.log("Closing");
            //const newDataBasePromise = IdbFilesDataBase.openDataBase({name: dataBase.name, version: dataBase.version+1})
        })
        dataBase.close()
        const newDataBasePromise = IdbFilesDataBase.openDataBase(
            {name: dataBase.name, version: dataBase.version+1},
            migrations,
            { fileName }
        )
        return 
    }

    static _createIdbFileInstance (fileName, mode, dataBase) {
        //TODO: Instantitate and return a file object in provided mode
        //return dataBase.transaction([fileName], mode === mode.READONLY ? "readonly" : "readwrite");
        return new idbFile( fileName, mode, dataBase )
    }

    static async open ( fileName, mode = modes.READONLY, dataBaseName = dbName ) {

        const dataBasePromise = IdbFilesDataBase.open(dataBaseName)

        if ( idbFile._existsFileObjectStore(fileName, await dataBasePromise) ) {
            return idbFile._createIdbFileInstance(fileName, mode, await dataBasePromise )
        }

        if ( mode === modes.READWRITE || mode === modes.APPEND ) {
            return  idbFile._createIdbFileInstance(
                await idbFile._createFileObjectStorage(fileName, await dataBasePromise),
                mode
            )
        }

        throw Error("File not found")

    }

}

export function writeChunk ( fileName, chunkIndex, data, dbObject, objectStoreName ) {
    const transaction = dbObject.db.transaction([objectStoreName], "readwrite")
    transaction.addEventListener("complete", event => {
        console.log(event)
    })
    transaction.addEventListener("error", event => {
        console.error(event)
    })
}