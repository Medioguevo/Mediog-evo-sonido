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

export class DB {

    constructor ( dbName, migrations ) {
        this.createDB(dbName, migrations)
    }

    /**
     * Creates DB applying migrations.
     * @param {IDBDatabase} dbName 
     * @param {Array} migrations 
     */
    createDB ( dbName, migrations ) {

        const openDBRequest = window.indexedDB.open(dbName, migrations.length)

        openDBRequest.addEventListener("error", event => {
            throw openDBRequest.errorCode
        })

        openDBRequest.addEventListener("success", event => {
            this.db = openDBRequest.result
        })

        openDBRequest.addEventListener("upgradeneeded", event => {
            /**
             * openDBRequest.result is the DB
             */
            migrations.at(-1)(openDBRequest.result)
        })

    }
}