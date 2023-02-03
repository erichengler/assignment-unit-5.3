console.log('***** Music Collection *****')

let collection = [];

function addToCollection ( title, artist, yearPublished ) {
    let newAlbum = 
    {
        title: title,
        artist: artist,
        yearPublished: yearPublished
    }
    collection.push( newAlbum );
    return `Added ${ newAlbum.title } by ${ newAlbum.artist } to the collection.`
}

//Adding 6 albums to collection
console.log( addToCollection ( 'Polygondwanaland', 'King Gizzard and the Lizard Wizard', 2017 ) );
console.log( addToCollection( 'Weird by Nature', 'Yabba Dabba', 2021 ) );
console.log( addToCollection ( 'Nonagon Infinity', 'King Gizzard and the Lizard Wizard', 2016 ) );
console.log( addToCollection ( 'The Accelerated Path', 'Ingrained Instincts', 2016 ) );
console.log( addToCollection ( 'Leather Teeth', 'Carpenter Brut', 2018 ) );
console.log( addToCollection ( 'Butterfly 3000', 'King Gizzard and the Lizard Wizard', 2021 ) );

console.log( collection );

function showCollection ( array ) {
    console.log( 'This collection has ' + array.length + ' albums:' )
    for ( let album of array ) {
        console.log( album.title + ' by ' + album.artist + ', published in ' + album.yearPublished );
    }
}

showCollection ( collection );

function findByArtist ( artist ) {
    let results = [];
    for ( let i=0; i<collection.length; i++ ) {
        if ( artist === collection[i].artist ) {
            results.push( collection[i] );
        }
    } return results;
}

console.log( findByArtist( 'Yabba Dabba' ) );
console.log( findByArtist( 'King Gizzard and the Lizard Wizard' ) );
console.log( findByArtist( 'Shpongle' ) );

// * STRETCH GOALS *
console.log( 'STRETCHIN' );
function search ( input ) {
    let results = [];
    for ( let object of collection ) {
        for ( let key in object ) {
            if ( input === object[key] ) {
                results.push( object );
            }
        }
        if ( input === '' ) {
            results = collection
        } 
    } return results;
}

console.log( search( 'King Gizzard and the Lizard Wizard' ) );
console.log( search( 'Leather Teeth' ) );
console.log( search( 2016 ) );
console.log( search( 2021 ) );
console.log( search( '' ) );