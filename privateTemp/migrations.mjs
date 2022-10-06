export default [
    db => {
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
    },
    db => {
        const testObjectsStore = db.createObjectStore(
            "test1",
            { keyPath: "id" }
        )
        testObjectsStore.createIndex(
            "idIndex", "id", { unique: true}
        )
    }
]
