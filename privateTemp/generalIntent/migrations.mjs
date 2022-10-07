export default [
    db => {
        const testObjectsStore = db.createObjectStore(
            "test",
            { autoIncrement : true }
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
    },
]
