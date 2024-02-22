function gramophone(bandName, albumName, songName){

    let rotate = ((albumName.length * bandName.length) * songName.length / 2)
    console.log(`The plate was rotated ${Math.ceil(rotate / 2.5)} times.`);
    
    
}
gramophone('Black Sabbath', 'Paranoid', 'War Pigs')
gramophone('Rammstein', 'Sehnsucht', 'Engel')