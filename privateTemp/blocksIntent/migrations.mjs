export default [
    (db, {}) => {
        if ( db.version === 1 )  db.createObjectStore( "filesMetaData" )
    },
    (db, { fileName }) => {
        if ( db.version > 1 )  db.createObjectStore( fileName, { autoIncrement: true} )
    },
]
