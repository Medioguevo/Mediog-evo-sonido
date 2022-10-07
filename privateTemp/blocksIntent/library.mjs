import migrations from "./migrations.mjs";

const dbName = "idbFiles"

const modes = {
    READONLY: 0,
    READWRITE: 1,
    APPEND: 2,
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

    constructor ( dataBaseName = dbName ) {
        this.findDataBase(dataBaseName)
        this.openDataBase( this.dataBaseDescriptor )
    }

    findDataBase (dataBaseName) {
        windows.indexedDB.databases()
            .then( dataBaseDescriptors => {
                const dataBaseDescriptor = dataBaseDescriptors.find(
                    descriptor => descriptor.name === dataBaseName
                )
                this.dataBaseDescriptor = descriptor || {name: dataBaseName, version: 1}
            })
    }

    openDataBase ({name, version}) {

        const openDBRequest = window.indexedDB.open(name, version)

        openDBRequest.addEventListener("error", () => {
            throw openDBRequest.errorCode
        })

        openDBRequest.addEventListener("success", () => {
            /**
             * openDBRequest.result is the DB
             */
            this.dataBase = openDBRequest.result
        })

        openDBRequest.addEventListener("upgradeneeded", () => {
            /**
             * openDBRequest.result is the DB
             */
            migrations.forEach( migration => migration(openDBRequest.result))
        })

    }

}

export function idbFile () {

    if ( ! this.dataBase ) this.dataBase = new IdbFilesDataBase()
    return this 

    function findFile (fileName, dataBase = this.dataBase) {
        return dataBase.objectStoreNames.find(fileName)
    }

    function createFileObjectStorage (fileName, mode = modes.READONLY, dataBase = this.dataBase) {
        //TODO
    }

    function createIdbFileInstance (fileObjectStore, mode = modes.READONLY) {
        //TODO
    }

    function open (fileName, mode = modes.READONLY, dataBase = this.dataBase) {

        const fileObjectStore = findFile(fileName)

        //TODO: Instantitate and return a file object in provided mode
        if ( fileObjectStore ) return createIdbFileInstance(fileObjectStore, mode)

        if ( mode === modes.READWRITE || mode === modes.APPEND ) {
            return createFileObjectStorage(fileName, dataBase) 
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