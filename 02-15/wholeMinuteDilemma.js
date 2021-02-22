function playlist(songs) {
    // Write your code here
    //[10, 50, 90, 30, 30]
    songs = songs.map(time => time % 60)
    const counter = {} //{10:1,30:2}
    let pairs = 0 //4
    songs.forEach(song => {  //[10,50,30,30,30]
        const diff = (60 - song) % 60
        if (counter[diff]) pairs += counter[diff]
        if (!counter[song]) {
            counter[song] = 0
        }
        counter[song]++
    })
    return pairs

}
