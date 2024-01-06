function calculatePlateRotations(bandName, albumName, songName) {
    // Calculate the song duration
    const songDuration = (albumName.length * bandName.length * songName.length) / 2;
  
    // Calculate the number of plate rotations (rounded up)
    const plateRotations = Math.ceil(songDuration / 2.5);
  
    // Print the result
    console.log(`The plate was rotated ${plateRotations} times.`);
  }