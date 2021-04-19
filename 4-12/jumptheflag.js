function jumps(flagHeight, bigJump) {
    debugger
    let totalJumps = 0;
    if (flagHeight >= bigJump) {
        totalJumps += Math.floor(flagHeight / bigJump)
        totalJumps += flagHeight % bigJump
        return totalJumps
    }
    return flagHeight
}