function playlist(songs) {
    // Write your code here
    //[10, 50, 90, 30] -> [10, 50, 30, 30] 
    // [20,40] ->[20,40]
    debugger
    songs = songs.map(time => time % 60)
    const counter = {} // {20:1,40:1}
    let pairs = 0 //1
    songs.forEach(song => { //40
        const diff = (60 - song) % 60  //20
        if (counter[diff]) pairs += counter[diff]
        if (!counter[song]) {
            counter[song] = 0
        }
        counter[song]++
    })
    return pairs
}
