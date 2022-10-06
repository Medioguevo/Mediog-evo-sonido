export const migrations = {
    1: function (db) {
        const testObjectsStore = db.createObjectStore(
            "test",
            { keyPath: ["file", "chunk"] }
        )
        testObjectsStore.createIndex(
            "fileIndex", "file", { unique: false}
        )
        testObjectsStore.createIndex(
            "chunkIndex", "chunk", { unique: false}
        )
        testObjectsStore.createIndex(
            "mainIndex", ["file", "chunk"], { unique: false}
        )
    }
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

export function createDB( dbName, version, migrations ) {
    const openDBRequest = window.indexedDB.open(dbName, version)

    openDBRequest.addEventListener("error", event => {
        console.error(openDBRequest.errorCode)
    })

    openDBRequest.addEventListener("success", event => {
        const db = openDBRequest.result
    })

    openDBRequest.addEventListener("upgradeneeded", event => {
        /**
         * openDBRequest.result is de DB
         */
        for (let migration in migrations) {
            migrations[migration](openDBRequest.result)
        }
        console.log(openDBRequest.result);
    })

}