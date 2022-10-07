export default [
    db => {
        if ( db.version === 1 )  db.createObjectStore( "fileMetaData" )
    },
]
